import terser from "@rollup/plugin-terser";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
    input: './node_modules/@material/web/all.js',
    output: [
        {
            file: 'bundle.js',
            format: 'iife'
        },
        {
            file: 'bundle.min.js',
            format: 'iife',
            plugins: [terser()]
        }
    ],
    plugins: [nodeResolve()]
};
