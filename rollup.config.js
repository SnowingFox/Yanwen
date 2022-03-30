import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const extensions = ['.ts']

export default [
  {
    input: './packages/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
      },
    ],
    plugins: [
      typescript(),
      commonjs(),
      resolve({
        extensions,
      }),
      babel({
        exclude: 'node_modules/**',
        extensions,
      }),
    ],
  },

  {
    input: './packages/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [typescript()],
  },
]
