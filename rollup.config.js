import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'
import pkg from './package.json'

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: 'cjs', exports: 'auto' },
    { file: pkg.module, format: 'esm', exports: 'auto' }
  ],
  plugins: [
    external(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled'
    }),
    del({ targets: ['dist/*'] })
  ],
  external: Object.keys(pkg.peerDependencies || {})
}
