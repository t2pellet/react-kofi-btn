import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from '@rollup/plugin-terser'
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss'
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import packageJson from "./package.json" assert { type: "json" };

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
            },
            {
                file: packageJson.module,
                format: "esm",
            },
        ],
        plugins: [
            peerDepsExternal(),
            postcss({
                extract: false,
                modules: true,
                use: ['sass'],
            }),
            resolve(),
            commonjs(),
            typescript({tsconfig: "./tsconfig.json"}),
            terser(),
        ],
        external: ['react', 'react-dom']
    },
    {
        input: "src/index.ts",
        output: [{
            file: "dist/index.d.ts",
            format: "es"
        }],
        plugins: [dts()],
    },
];
