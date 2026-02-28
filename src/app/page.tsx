'use client'

import React from 'react';
import Image from 'next/image';
import MotionWrapper from '@/components/MotionWrapper'; 
import { 
  FaStar, 
  FaCircleCheck, 
  FaSquareParking, 
  FaQuoteLeft, 
  FaCircleInfo, 
  FaRoute, 
  FaCarSide, 
  FaShieldHalved, 
  FaCommentDots 
} from "react-icons/fa6";

// 🔴 注意：在 'use client' 檔案中不可導出 metadata。
// 請將 metadata 移至同層級的 layout.tsx 或將此檔改為 Server Component。

export default function Home() {
  // 結構化資料內容
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness", 
    "name": "Elegant Europe 優雅歐洲包車",
    "image": "https://yourdomain.com/hero-image.webp",
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
    <div className="min-h-screen bg-[#FDFCF9] text-slate-600 pb-20 relative overflow-x-hidden font-light bg-[url('/images/bg/linen-texture.png')] bg-repeat bg-center">
      {/* 🟢 SEO Schema 注入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* 背景裝飾圖形 */}
      <div className="absolute top-[10%] -left-48 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl opacity-60 animate-blob-slow pointer-events-none"></div>
      <div className="absolute top-[50%] -right-48 w-[500px] h-[500px] bg-[#F2EFE9]/60 rounded-full blur-3xl opacity-50 animate-blob-slow animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-24 w-[400px] h-[400px] bg-blue-50/40 rounded-full blur-3xl opacity-60 animate-blob-slow animation-delay-4000 pointer-events-none"></div>

      <main className="max-w-6xl mx-auto px-6 pt-12 space-y-24 relative z-10">
        
        {/* --- Section 1: Hero --- */}
        <MotionWrapper type="fadeInUp">
          <section className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="md:w-1/2 relative aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-xl border-[12px] border-white shadow-slate-200/50">
              <Image 
                src="/images/europe-tour-hero.webp" 
                alt="歐洲輕旅行 - 塞納河畔漫旅" 
                fill priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden"></div>
            </div>

            <div className="md:w-1/2 space-y-8 py-10">
              <div className="flex items-center gap-2.5 text-[#C4A484]">
                <FaStar size={14} className="opacity-80" />
                <span className="text-xs tracking-[0.3em] uppercase font-bold">Private & Luxury Tour</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif text-slate-800 leading-[1.3]">
                在晨光中醒來，<br />
                <span className="italic text-[#7A9EAF]">漫旅歐洲包車客製化之美。</span>
              </h1>    
              <p className="text-lg leading-relaxed text-slate-600 font-light max-w-lg">
                不趕路，只感受。專屬華語司導陪您走過塞納河畔，穿梭蘇黎世巷弄，享受一場全然放鬆的歐洲假期。
              </p>

              <div className="grid grid-cols-1 gap-6 pt-4 bg-white/50 p-6 rounded-2xl border border-white/80">
  {/* 項目 1 */}
  <div className="flex items-start gap-4 text-base md:text-lg">
    <FaCircleCheck className="text-[#A3B18A] shrink-0 mt-1" size={22} />
    <span className="font-medium text-slate-800">協助安排討論完整路線及行程</span>
  </div>

  {/* 項目 2 */}
  <div className="flex items-start gap-4 text-base md:text-lg">
    <FaSquareParking className="text-[#8E9AAF] shrink-0 mt-1" size={22} />
    <span className="font-medium text-slate-800 leading-relaxed">
      包含全歐境內停車費，過路費及司機小費，每天只要 
      <span className="text-[#C88A2E] font-bold text-xl md:text-2xl mx-1 underline underline-offset-4 decoration-2">
        650
      </span> 
      <span className="text-[#C88A2E] font-bold">歐元</span>
    </span>
  </div>
</div>


              <div className="pt-8">
                <a 
                  href="#booking" 
                  className="inline-block px-12 py-5 bg-[#7A9EAF] text-white rounded-full hover:bg-[#8E9AAF] hover:shadow-xl hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-200/40 text-sm tracking-widest font-bold uppercase"
                >
                  開始您的旅程
                </a>
              </div>
            </div>
          </section>
        </MotionWrapper>

        {/* --- Section 3: 展示區 --- */}
        <MotionWrapper type="fadeInUp" className="-mt-10 md:-mt-16 relative z-10">
          <section className="bg-white rounded-[3rem] px-8 py-6 md:px-16 md:py-10 border border-white shadow-2xl shadow-slate-100/50 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center overflow-hidden">
            <div className="lg:w-[38%] space-y-6 text-left flex flex-col justify-center order-2 lg:order-1">
              <FaQuoteLeft className="text-[#C4A484] opacity-20" size={32} />
              <div className="space-y-3">
                <h2 className="text-3xl md:text-5xl font-serif text-slate-800 italic leading-[1.2]">
                  把瑣事留給我們，<br />
                  <span className="text-[#C4A484]">把風景留給自己。</span>
                </h2>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed font-light max-w-sm">
                  我們的司導懂得駕駛，更懂得生活。解決退稅、代訂門票等瑣事。
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-100">
                {['# 機場接送', '# 跨國長途', '# 客製化行程', '# 婚紗隨行'].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-[#FDFCF9] border border-[#EFECE6] text-slate-400 rounded-full text-[10px] font-bold tracking-wider uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:w-[62%] w-full order-1 lg:order-2">
              <div className="relative w-screen left-1/2 -translate-x-1/2 md:w-full md:left-0 md:translate-x-0 md:max-h-[500px] rounded-none md:rounded-[2.5rem] overflow-hidden bg-[#FDFCF9] p-2 md:p-6 flex items-center justify-center transition-all duration-1000 group mx-auto border-0 md:border-[14px] border-white shadow-none md:shadow-xl">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image 
                    src="/images/booking.webp" 
                    alt="歐洲包車旅遊預定流程" 
                    width={1400} 
                    height={900}
                    priority
                    sizes="100vw"
                    className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </section>
        </MotionWrapper>

        {/* --- Section 4: FAQ --- */}
        <MotionWrapper type="fadeInUp">
          <section className="bg-[#F1F4EE] rounded-[3rem] p-10 md:p-16 border border-[#E9ECE4] shadow-xl shadow-[#A3B18A]/10 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-56 h-56 bg-[#C4A484] rounded-full opacity-10 blur-3xl"></div>
            <div className="flex items-center gap-4 mb-14 relative z-10">
              <FaCircleInfo className="text-[#A3B18A]" size={32} />
              <h2 className="text-3xl font-bold text-slate-800">常見問題與行前須知</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 relative z-10">
              <div className="space-y-3 bg-white/40 p-7 rounded-2xl border border-white/60">
                <h4 className="font-bold text-[#A3B18A] text-lg">Q: 需要提早多久預約？</h4>
                <p className="text-slate-600 leading-relaxed text-sm">建議在出發前一個月與我們聯繫，我們會為您量身規劃第一版行程並保留車輛。</p>
              </div>
              <div className="space-y-3 bg-white/40 p-7 rounded-2xl border border-white/60">
                <h4 className="font-bold text-[#A3B18A] text-lg">Q: 費用包含司導食宿嗎？</h4>
                <p className="text-slate-600 leading-relaxed text-sm">是的，報價已包含司導住宿與餐飲費用，無隱藏消費，讓您行程更輕鬆。</p>
              </div>
            </div>
          </section>
        </MotionWrapper>

        {/* --- Section 2: 服務優勢 --- */}
        <section className="py-2 md:py-4"> 
          <div className="container mx-auto">
            <MotionWrapper type="stagger" className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
              {[
                { icon: <FaRoute />, title: "自訂行程", desc: "不再被時刻表束縛，您的喜好決定路線。" },
                { icon: <FaCarSide />, title: "豪華車隊", desc: "精選賓士等級商務車，確保長途旅程舒適。" },
                { icon: <FaShieldHalved />, title: "全程守護", desc: "合規保險與資深華語司導，旅程踏實安心。" }
              ].map((item, idx) => (
                <MotionWrapper 
                  key={idx} 
                  type="fadeInUp" 
                  className="space-y-3 text-center bg-white/40 p-6 md:p-8 rounded-3xl border border-white/60 transition-all shadow-sm"
                >
                  <div className="text-[#8E9AAF] text-4xl mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif tracking-widest text-slate-800 italic">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-[14px] leading-relaxed font-light">
                    {item.desc}
                  </p>
                </MotionWrapper>
              ))}
            </MotionWrapper>
          </div>
        </section>
      </main>

      {/* --- 懸浮諮詢按鈕 --- */}
      <MotionWrapper type="scale" delay={1} className="fixed bottom-10 right-10 z-50 group">
        <div className="absolute right-full mr-5 top-1/2 -translate-y-1/2 bg-white px-5 py-3 rounded-xl shadow-2xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-md font-bold text-[#003366]">
          線上專員免費諮詢估價
        </div>
        <a 
          href="https://line.me/R/ti/p/@261RYSIY" 
          target="_blank" rel="noopener noreferrer"
          className="bg-[#06C755] text-white w-20 h-20 rounded-full shadow-2xl shadow-[#06C755]/20 hover:scale-110 active:scale-90 transition-all flex items-center justify-center border-4 border-white"
        >
          <FaCommentDots size={36} />
        </a>
      </MotionWrapper>
    </div>
  );
}