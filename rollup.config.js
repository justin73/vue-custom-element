import vue from 'rollup-plugin-vue'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'
import babel from 'rollup-plugin-babel'

const production = process.env.NODE_ENV === 'production'

const devPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('develop')
  }),
  nodeResolve({
    module: true,
    jsnext: true,
    main: true
  }),
  vue({
    compileTemplate: true,
    css: true
  }),
  babel({
    exclude: ['node_modules/**', '*.vue', '**.vue']
  })
]

const productionPlugins = [
  replace({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  nodeResolve({
    module: true,
    jsnext: true,
    main: true
  }),
  vue({
    compileTemplate: true,
    css: true
  }),
  babel({
    exclude: ['node_modules/**', '*.vue', '**.vue']
  }),
  uglify({}, minify)
]

const devRollup = {
  input: 'index.js',
  output: {
    name: "vueElement",
    file: 'docs/vueElement.js',
    format: 'iife'
  },
  strict: true,
  plugins: devPlugins
}

const productionRollup = {
  input: 'index.js',
  output: {
    name: "vueElement",
    file: 'dist/vueElement.js',
    format: 'iife'
  },
  strict: true,
  plugins: productionPlugins
}

export default production ? [devRollup, productionRollup] : devRollup