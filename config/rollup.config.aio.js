var nodeResolve = require('rollup-plugin-node-resolve')
var commonjs = require('rollup-plugin-commonjs');

var common = require('./rollup')

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'dist/index.aio.js',
        format: 'umd',
        name: common.name,
        banner: common.banner
    },
    plugins: [
        nodeResolve({
            main:true,
            extensions: ['.js']
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        common.getCompiler()
    ]
}