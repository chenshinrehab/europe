'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'
// 💡 引入歐洲國家資料庫
import { europeCountries, CountryItem } from '@/data/europe'
// 💡 引入 Script 組件
import Script from 'next/script'

export default function EuropeDirectoryPage() {
  // 將資料物件轉為陣列
  const countries = Object.values(europeCountries) as CountryItem[];

  // 💡 建立 ItemList Schema：讓 Google 爬蟲將此頁視為目的地導覽目錄
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": countries.map((country, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://yourdomain.com/europe/${country.id}`, // 建議換成您的實際網址
      "name": country.countryName,
      "description": country.description,
      "image": country.spots.length > 0 ? country.spots[0].image : country.image
    }))
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-slate-900 font-sans pb-20">
      {/* 💡 插入 JSON-LD Schema */}
      <Script
        id="europe-directory-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-4xl mx-auto px-6 py-10 md:py-14">
        
        {/* --- 頁面標頭 --- */}
        <MotionWrapper type="fadeInUp" className="text-center mb-10 space-y-2">
          <h1 className="text-3xl md:text-4xl font-serif text-slate-800 italic">探索歐洲目的地</h1>
          <div className="w-12 h-[1px] bg-[#C4A484] mx-auto mt-4"></div>
        </MotionWrapper>

        {/* --- 國家列表：動態生成 --- */}
        <div className="grid grid-cols-1 gap-6">
          {countries.map((country, idx) => {
            // ✅ 圖片邏輯：使用該檔案的第一張景點圖 (spots[0].image)
            const displayImage = country.spots.length > 0 
              ? country.spots[0].image 
              : country.image;

            return (
              <MotionWrapper
                key={country.id}
                type="fadeInUp"
              >
                <Link 
                  href={`/europe/${country.id}`}
                  className={`group flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch bg-white rounded-[1.5rem] overflow-hidden shadow-lg shadow-slate-200/40 border border-white hover:border-[#F2EFE9] hover:shadow-xl transition-all duration-500 block`}
                >
                  {/* 圖片區塊 (35%) */}
                  <div className="w-full md:w-[35%] relative min-h-[220px] md:min-h-full overflow-hidden bg-slate-50">
                    <Image
                      src={displayImage}
                      alt={country.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>

                  {/* 文字內容區塊 (65%) */}
                  <div className="w-full md:w-[65%] p-6 md:p-8 flex flex-col justify-center space-y-3">
                    <div className="space-y-1">
                      <span className="text-[#C4A484] text-[10px] font-bold tracking-[0.2em] uppercase block">
                        {country.subtitle}
                      </span>
                      {/* ✅ 標題參考 data 的 title */}
                      <h2 className="text-xl md:text-2xl font-serif text-slate-800 italic group-hover:text-[#C4A484] transition-colors">
                        {country.title}
                      </h2>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-2 text-justify">
                      {country.description}
                    </p>

                    {/* ✅ Feature 套用 spot 裡面的 name */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {country.spots.map((spot, sIdx) => (
                        <span 
                          key={sIdx} 
                          className="text-[9px] font-bold tracking-wider text-slate-400 border border-slate-100 px-3 py-1 rounded-full bg-[#FDFCF9] group-hover:border-[#C4A484]/30 group-hover:text-[#C4A484] transition-colors"
                        >
                          # {spot.name}
                        </span>
                      ))}
                    </div>

                    {/* 視覺引導按鈕 */}
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 text-xs text-slate-800 font-serif italic border-b border-slate-200 pb-0.5 group-hover:text-[#C4A484] group-hover:border-[#C4A484] transition-all">
                        查看 {country.countryName} 詳情 <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </MotionWrapper>
            );
          })}
        </div>
      </main>
    </div>
  )
}