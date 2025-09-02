import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CtrlZ - Take Control of Your Productivity',
    short_name: 'CtrlZ',
    description: 'Revolutionary productivity tool launching Q2 2025. Privacy-first, 100% local processing.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#667eea',
    orientation: 'portrait',
    categories: ['productivity', 'utilities', 'business'],
    lang: 'en',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}