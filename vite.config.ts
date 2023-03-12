import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react'
import path from 'node:path';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'react-mui-ts-storybook',
      formats: ['es', 'umd'],
      fileName: 'react-mui-ts-storybook',
    },
    rollupOptions: {
      // Externalize node_modules that shouldn't be bundled together with our own library.
      // Rule of thumb: Always externalize third-party dependecies we're using in our source code.
      external: [
        'react',
        'react-dom',

        '@mui/material',
        '@emotion/react',
        '@emotion/styled',
        '@mui/icons-material',
        '@fontsource/roboto',
        '@fontsource/material-icons'
      ],
      output: {
        // Provide externalized dependencies as globals to the UMD build
        globals: {
          react: 'React',
          '@mui/material': '@mui/material',
          'react-dom': 'ReactDOM'
        },
      },
    },
  },
})
