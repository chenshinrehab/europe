import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

const SITE_URL = 'https://www.dryichen.com.tw'

export const viewport: Viewport = {
  // 強制手機瀏覽器狀態列為白色，並確保不會因為系統深色模式而變動
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover', // 確保內容填滿螢幕（解決瀏海頭機型顏色不均問題）
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: '海綿寶寶',
    // 這樣你在分頁設定 title: '蟹堡王' 時，瀏覽器分頁會顯示 '蟹堡王 | 海綿寶寶'
    template: '%s | 海綿寶寶'
  },
  description: '深海的大鳳梨',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    /* 修改點：在 html 標籤也強制補上 bg-white，防止手機滑動露出黑色背景 */
    <html lang="zh-TW" className="scroll-smooth bg-white">
      <body className={`${inter.className} bg-white text-slate-900 antialiased min-h-screen flex flex-col`}>
        <Navigation />
        
        {/* main 區塊不加額外 padding，由 Navigation 內部的內容自行撐開或由頁面控制 */}
        <main className="flex-grow bg-white">
            {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}