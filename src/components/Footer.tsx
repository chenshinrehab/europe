'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MotionWrapper from '@/components/MotionWrapper' // 🟢 使用統一的動畫掛件

// ✨ 精簡圖示載入
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaPhoneAlt, 
  FaCalendarCheck 
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  const [visitCount, setVisitCount] = useState<string>('---,---')

  // =================================================================
  // 瀏覽人數計算邏輯
  // =================================================================
  useEffect(() => {
    const BASE_VIEWS = 12500; 
    const VIEWS_PER_HOUR = 12;
    const ANCHOR_DATE = new Date('2026-01-10T00:00:00').getTime();

    const calculateViews = () => {
      const now = Date.now();
      const timeDiff = now - ANCHOR_DATE;
      const hoursPassed = timeDiff / (1000 * 60 * 60);
      const currentViews = Math.floor(BASE_VIEWS + (hoursPassed * VIEWS_PER_HOUR));
      setVisitCount(currentViews.toLocaleString());
    };

    calculateViews();
    const intervalId = setInterval(calculateViews, 60000);
    return () => clearInterval(intervalId);
  }, [])

  // =================================================================
  // 🟢 SEO & GEO Schema
  // =================================================================
  const footerSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", 
    "name": "Elegant Europe 優雅歐洲包車",
    "image": "https://yourdomain.com/hero-image.jpg",
    "url": "https://yourdomain.com",
    "telephone": "+886-975-665-786",
    "priceRange": "TWD",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "TW",
      "addressRegion": "Taiwan"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.0330",
      "longitude": "121.5654"
    },
    "publicAccess": false,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "歐洲包車旅遊服務清單",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "法國包車客製化旅遊",
            "description": "專業華語司導，深度遊覽巴黎、南法普羅旺斯。"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "瑞士少女峰包車服務",
            "description": "專車接送往返蘇黎世、格林德瓦，享受無憂旅程。"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "義大利深度包車旅行",
            "description": "羅馬、佛羅倫斯、威尼斯私人司導服務。"
          }
        }
      ]
    },
    "sameAs": ["https://line.me/R/ti/p/@261RYSIY"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "jimmyforjob2@gmail.com",
      "availableLanguage": ["Chinese", "English"]
    }
  };

  return (
    <footer className="bg-[#FDFCF9] border-t border-[#EFECE6] pt-16 pb-8 mt-auto relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(footerSchema) }} />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* =========================================
            Part 1: 服務導覽 (使用 Stagger 動畫)
           ========================================= */}
        <MotionWrapper type="stagger" className="mb-20">
            <MotionWrapper type="fadeInUp">
              <h3 className="text-xl font-serif italic text-slate-800 text-center mb-10 tracking-[0.2em] uppercase">
                Explore Our World
              </h3>
            </MotionWrapper>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { name: '關於服務', path: '/about', img: '/images/footer/1.webp' },
                  { name: '我們的特色', path: '/whychooseus', img: '/images/footer/2.webp' },
                  { name: '熱門路線', path: '/europe', img: '/images/footer/route.webp' },
                  { name: '立即預約', path: '/booking', img: '/images/footer/contact.webp' }
                ].map((item, idx) => (
                  <MotionWrapper key={idx} type="fadeInUp">
                    <Link href={item.path} className="group rounded-[2rem] relative h-36 md:h-48 overflow-hidden shadow-sm border-[6px] border-white hover:shadow-xl transition-all duration-500 block">
                      <Image 
                        src={item.img} 
                        alt={item.name} 
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                          <span className="text-white font-medium text-sm md:text-base tracking-widest border-b border-white/50 pb-1 italic font-serif">
                            {item.name}
                          </span>
                      </div>
                    </Link>
                  </MotionWrapper>
                ))}
            </div>
        </MotionWrapper>

        {/* =========================================
            Part 2: 資訊區 (GEO 強化)
           ========================================= */}
        <MotionWrapper type="fadeInUp" className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-12">
          
          {/* 1. 左側：社群連結 */}
          <div className="w-full lg:w-auto space-y-6">
            <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-slate-400">
              Follow Our Journey
            </h4>
            
            <div className="flex gap-4 items-center flex-wrap">
            <a href="https://www.facebook.com/profile.php?id=61579679421074" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-[#1877F2] flex items-center justify-center hover:bg-blue-50 transition-colors border border-[#EFECE6] shadow-sm">
                  <FaFacebookF size={16} />
                </a>
                <a href="https://www.instagram.com/wanderthrougheurope/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-[#E4405F] flex items-center justify-center hover:bg-pink-50 transition-colors border border-[#EFECE6] shadow-sm">
                  <FaInstagram size={18} />
                </a>
                <a href="https://www.threads.com/@wanderthrougheuropee" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white text-slate-800 flex items-center justify-center hover:bg-slate-100 transition-colors border border-[#EFECE6] shadow-sm">
                  <SiThreads size={18} />
                </a>
                
                <Link 
  href="/booking" 
  className="ml-2 px-8 py-3 rounded-full text-[10px] font-bold tracking-[0.2em] text-white bg-[#7A9EAF] hover:bg-[#8E9AAF] transition-all shadow-lg shadow-blue-100/50 flex items-center gap-2 uppercase"
>
  <FaCalendarCheck size={12} /> Booking
</Link>
            </div>
          </div>

          {/* 2. 中間：累計瀏覽 */}
          <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-auto">
             <div className="bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white flex items-center gap-4 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-200 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-300"></span>
                </span>
                <span className="text-[9px] text-slate-400 font-bold tracking-[0.2em] uppercase">Live Views</span>
                <span className="font-serif italic text-slate-700 font-bold text-xl">
                    {visitCount}
                </span>
             </div>
          </div>
     {/* 3. 右側：聯絡資訊 (純網路服務優化) */}
     <div className="text-left lg:text-right text-slate-500 space-y-4 w-full lg:w-auto">
            {/* LINE 官方帳號 */}
            <a 
              href="https://line.me/R/ti/p/@261RYSIY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-start lg:justify-end gap-3 group transition-all"
            >
           <div className="flex flex-col items-start lg:items-end gap-1">
  {/* 主標題：優雅大氣 */}
  <span className="font-serif italic text-2xl md:text-3xl font-bold tracking-tight text-slate-800 group-hover:text-[#7A9EAF] transition-colors duration-500">
    Line 官方帳號
  </span>
  
  {/* 副標題：帳號 ID 縮小並帶入品牌藍 */}
  <div className="flex items-center gap-2">
    <span className="h-[1px] w-4 bg-[#7A9EAF]/30 hidden lg:block"></span> {/* 裝飾小橫線 */}
    <span className="text-[11px] md:text-[12px] text-[#7A9EAF] font-bold tracking-[0.25em] uppercase bg-[#7A9EAF]/5 px-2 py-0.5 rounded-sm">
      @261RYSIY
    </span>
  </div>
</div>
            </a>
            <div className="flex flex-col items-start lg:items-end gap-1 mt-6">
  {/* 主標題：優雅大氣 */}
  <span className="font-serif italic text-2xl md:text-3xl font-bold tracking-tight text-slate-800 transition-colors duration-500">
    電子郵件諮詢
  </span>
  
  {/* 副標題：Email 地址縮小並帶入品牌藍 */}
  <div className="flex items-center gap-2">
    <span className="h-[1px] w-4 bg-[#7A9EAF]/30 hidden lg:block"></span> {/* 裝飾小橫線 */}
    <a 
      href="mailto:jimmyforjob2@gmail.com" 
      className="text-[11px] md:text-[12px] text-[#7A9EAF] font-bold tracking-[0.1em] lowercase bg-[#7A9EAF]/5 px-2 py-0.5 rounded-sm hover:bg-[#7A9EAF]/10 transition-all"
    >
      jimmyforjob2@gmail.com
    </a>
  </div>
</div>

            {/* 服務標語 */}
            <p className="text-[10px] text-slate-400 tracking-wider">
              Bespoke Chauffeur Service in Europe. <br className="md:hidden" />
              Tailored Journeys, Unmatched Comfort.
            </p>
          </div>
        </MotionWrapper>

        <div className="border-t border-[#F2EFE9] my-10"></div>

        {/* --- 版權聲明 --- */}
        <MotionWrapper type="fadeInUp" className="text-center">
          <p className="text-slate-300 text-[9px] leading-loose tracking-[0.4em] uppercase">
            © {new Date().getFullYear()} WanderThroughEurope  . <br />
          </p>
        </MotionWrapper>
      </div>
    </footer>
  )
}