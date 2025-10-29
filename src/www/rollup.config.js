import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
    input: '../../www/tmp/index.js',
    output: {
        file: '../../www/FCMPlugin.js',
        format: 'cjs',
        name: 'FCM',
        globals: {}
    },
    plugins: [
        commonjs({
            include: 'node_modules/**'
        }),
        nodeResolve({ browser: true })
    ],
    external: []
}
