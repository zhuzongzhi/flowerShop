/**
 * flower 业务逻辑处理
 * @author zhuzongzhi 
 */

const {mysql} = require('../qcloud')
// 查询花卉
async function queryFlowers (ctx, next) {
    try {
        const { pageSize=10, pageNo=1, flower_type_id=1 } = ctx.query;
        if (!flower_type_id) {
            throw new Error('参数校验失败');
        }
    
        const mysqlSelect = mysql('flower')
                      .select('flower.*')
                      .where('flower_type_id', flower_type_id)
                      .orderBy('flower.create_time', 'desc')
    
        let flowers = await mysqlSelect.limit(pageSize).offset((Number(pageNo)-1)*pageSize);
    
        ctx.state.data = {
            list: flowers
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

// 新增修改花卉
async function updateSertFlower (ctx, next) {
    try {
        const { flower_id } = ctx.request.body;
        if (!flower_id) {
            throw new Error('参数校验失败');
        } else {
            let flowerInfo = await mysql('flower').select('flower.*').where('id', flower_id);

            if (!flowerInfo || flowerInfo.length === 0) {
                await mysql('flower').insert({
                    flower_name, flower_type_id, flower_language, flower_origina_price, 
                    flower_current_price, is_new_product, sales_volume, deleted, create_id, create_time, 
                    update_id, update_time
                })
            
                ctx.state.data = {
                    msg: '新增成功'
                };
            } else {
                await mysql('flower').where(id, flower_id).update({
                    flower_name
                })
            
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

// 批量删除花卉
async function removeFlowers (ctx, next) {
    try {
        const { flower_ids } = ctx.request.body;
        if (!flower_ids || flower_ids.length === 0) {
            throw new Error('参数校验失败');
        } else {
            await mysql('flower').where('id', 'in', flower_ids.join(',')).update({
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
    queryFlowers,
    updateSertFlower,
    removeFlowers
}