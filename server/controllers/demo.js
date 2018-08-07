module.exports = (ctx, next) => {
    ctx.state.data = {
        hello: "hello 小程序后台"
    }
}