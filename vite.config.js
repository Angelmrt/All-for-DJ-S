import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    root: './src',
    build: {
        outDir: '../docs',
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/index.html'), // Archivo principal en ./src
                about: path.resolve(__dirname, 'src/login.html'), // Archivo de login
                contact: path.resolve(__dirname, 'src/mainpage.html'), // Archivo de mainpage
            },
        },
    },
    base: '/All-for-DJ-S/',
});
