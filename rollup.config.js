const vue = require('rollup-plugin-vue')
const resolve = require('@rollup/plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')
const naiveSCSSVariable = require('./build/naiveSCSSVarPlugin')

function externalValidator (patterns) {
  return id => patterns.some(pattern => id.startsWith(pattern))
}

module.exports = {
  preserveModules: true,
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      dir: 'lib'
    },
    {
      format: 'esm',
      dir: 'es'
    }
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.json', '.vue']
    }),
    vue({
      template: {
        compilerOptions: {
          preserveWhitespace: false
        }
      }
    }),
    naiveSCSSVariable(),
    terser({
      mangle: false,
      output: {
        beautify: true,
        indent_level: 2
      }
    })
  ],
  external: externalValidator([
    'async-validator',
    'css-render',
    'date-fns',
    'lodash-es',
    'resize-observer-polyfill',
    'vue-runtime-helpers',
    'vue-virtual-scroller',
    '@css-render/plugin-bem'
  ])
}