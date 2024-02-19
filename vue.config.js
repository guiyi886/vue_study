const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    configureWebpack: {
        resolve: {
            fallback: {
                "querystring": require.resolve("querystring-es3")
            }
        }
    },
    chainWebpack: config => {   // 更改title
        config.plugin('html').tap(args => {
            args[0].title = 'A Title';
            return args;
        });
    }
})
