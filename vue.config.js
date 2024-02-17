const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

// 更改title
module.exports = {
    chainWebpack: config => {
        config.plugin('html').tap(args => {
            args[0].title = 'A Title';
            return args;
        });
    }
};

