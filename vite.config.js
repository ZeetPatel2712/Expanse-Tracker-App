import { defineConfig } from 'vite';
import stylelintPlugin from 'vite-plugin-stylelint';
import path from 'path';

export default defineConfig({
     plugins: [
          stylelintPlugin({
               include: ['src/**/*.css', 'src/**/*.scss'],
               fix: true,
          }),
     ],
     css: {
          preprocessorOptions: {
               scss: {
                    additionalData: `@import "/src/styles/base/mixins.scss";`,
               },
          },
     },
     resolve: {
          alias: {
               '@': path.resolve(__dirname, 'src'),
          },
     },
});
