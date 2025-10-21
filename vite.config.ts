import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          devOptions: {
        enabled: true,
        // ...
          },
          registerType: 'autoUpdate',
          // ++ بخش حیاتی اول: معرفی صریح فایل‌های استاتیک
          // به پلاگین می‌گوییم این فایل‌ها را، هرجا که هستند، پیدا و به لیست کش اضافه کن.
          // مسیر فونت‌ها را مطابق پروژه‌ی خودت تغییر بده.
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'public/fonts/*.{woff,woff2}'],
          manifest: {
            name: 'دفترچه‌ی راهنمای کافه فردوسی',
            short_name: 'فردوسی‌یار',
            description: 'راهنمای تیم و فرهنگ کاری کافه فردوسی برای اعضای جدید.',
            theme_color: '#4A3F35',
            background_color: '#FDF8F0',
            display: 'standalone',
            scope: '/',
            start_url: '/',
            icons: [
              {
                src: '/icons/icon-192.png',
                sizes: '192x192',
                type: 'image/png'
              },
              {
                src: '/icons/icon-512.png',
                sizes: '512x512',
                type: 'image/png'
              }
            ]
          },
          // ++ بخش حیاتی دوم: تعریف استراتژی دقیق برای Service Worker
          workbox: {
            // این دستور به Service Worker می‌گوید بعد از build، کل پوشه‌ی dist را بگردد
            // و هر فایلی با این پسوندها را برای کش کردن لیست کند.
            // این روش، تضمینی و قدرتمندتر از includeAssets است.
            globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
