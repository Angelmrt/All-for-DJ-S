import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: './src',
    build: {
        outDir: '../docs',
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/index.html'), 
                about: path.resolve(__dirname, 'src/login.html'), 
                contact: path.resolve(__dirname, 'src/mainpage.html'), 
            },
        },
    },
    base: '/All-for-DJ-S/',
});
