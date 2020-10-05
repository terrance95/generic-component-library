import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const NODE_ENV = process.env.NODE_ENV || 'development';

export default {
	input: 'src/index.tsx',
	output: { file: 'dist/bundle.js' },
	plugins: [
		replace({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
		NODE_ENV !== 'production' && serve({ contentBase: '' }),
		NODE_ENV !== 'production' && livereload(),
	],
};
