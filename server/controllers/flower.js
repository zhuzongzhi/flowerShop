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

}

// 删除花卉
async function removeFlowers (ctx, next) {

}

module.exports = {
    queryFlowers,
    updateSertFlower,
    removeFlowers
}