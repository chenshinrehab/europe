import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'


const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

// 💡 優化 1：加入環境變數取值邏輯，讓本地端與正式站切換更穩定
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dryichen.com.tw').trim();

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '歐洲漫行-旅遊規劃師',
    template: '%s | 歐洲漫行-旅遊規劃師'
  },
  description: '在地華人經營，訂製旅遊包車服務 義大利、奧捷匈、瑞士、德法、西葡',
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW" className="scroll-smooth bg-white">
      <head>
        {/* 💡 優化 2：外部資源預連接 (Preconnect) 
            提早建立與第三方伺服器的連線，減少 DNS 查詢與 SSL 握手時間。
            如果你有用到 YouTube 或其他外部 API，可以在這裡加上去。 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* 💡 優化 3：全域樣式補強 (防止 CLS 版面偏移)
            這是 Google PageSpeed 很看重的指標。強制圖片 auto height 可以避免圖片載入瞬間撐開版面造成的視覺抖動。 */}
        <style>{`
          img { height: auto; }
        `}</style>
      </head>
      
      <body className={`${inter.className} bg-white text-slate-900 antialiased min-h-screen flex flex-col`}>
        <Navigation />
        
        <main className="flex-grow bg-white">
            {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}