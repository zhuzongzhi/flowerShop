/**
 * flower 业务逻辑处理
 * @author zhuzongzhi 
 */

const {mysql} = require('../qcloud')

// 查询地址
async function queryAddress (ctx, next) {
  try {
    const { pageSize=10, pageNo=1, open_id } = ctx.query;
    if (!open_id) {
        throw new Error('无法识别该用户');
    }

    const mysqlSelect = mysql('address')
                  .select('address.*')
                  .where({'open_id': open_id, deleted: 0})
                  .orderBy('address.create_time', 'desc');

    let addressList = await mysqlSelect.limit(pageSize).offset((Number(pageNo)-1)*pageSize);

    ctx.state.data = {
        list: addressList
    };
  } catch (e) {
      ctx.state = {
          code: -1,
          data: {
              msg: `查询失败:${e.message}`
          }
      }
  }
}

// 新增、修改地址
async function updateSertAddress (ctx, next) {
  try {
    const { open_id, receiver, receiver_phone, receiver_region, address_detail, address_id='' } = ctx.request.body;
    if (!open_id) {
        throw new Error('无法识别该用户');
    } else {
        let addressInfo = await mysql('address').select('address.*').where({'id': address_id, deleted: 0});

        // 参数校验
        if (!receiver || !receiver_phone || !receiver_region || !address_detail) {
          throw new Error('参数校验失败');
        }

        if (!addressInfo || addressInfo.length === 0) {
            let insertParam = {
              open_id,
              receiver,
              receiver_phone,
              receiver_region: receiver_region.join('/'),
              address_detail,

              deleted: 0,
              create_id: open_id,
              create_time: new Date(),
              update_id: open_id,
              update_time: new Date()
            };

            await mysql('address').insert(insertParam);
        
            ctx.state.data = {
                msg: '新增成功'
            };
        } else {
            let updateParam = {
              receiver,
              receiver_phone,
              receiver_region,
              address_detail,
            };

            await mysql('address').where(id, address_id).update(updateParam);
        
            ctx.state.data = {
                msg: '修改成功'
            };
        }
    }
} catch (e) {
    ctx.state = {
        code: -1,
        data: {
            msg: `新增或修改失败:${e.message}`
        }
    }
}
}

// 批量删除地址
async function removeAddress (ctx, next) {
  try {
    const { address_ids } = ctx.request.body;
    if (!address_ids || address_ids.length === 0) {
        throw new Error('参数校验失败');
    } else {
        await mysql('address').where('id', 'in', address_ids.join(',')).update({
            deleted: 1
        })

        ctx.data = {
            msg: '删除成功'
        }
    } 
}catch (e) {
    ctx.state = {
        code: -1,
        data: {
            msg: `新增或修改失败:${e.message}`
        }
    }
}
}

module.exports = {
  queryAddress,
  updateSertAddress,
  removeAddress
}