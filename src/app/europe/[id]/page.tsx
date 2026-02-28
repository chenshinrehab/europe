'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams, notFound } from 'next/navigation'
import { FaQuoteLeft, FaCalendarCheck } from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'
import { europeCountries } from '@/data/europe'
// 💡 引入 Script 組件來放置 Schema
import Script from 'next/script'

export default function CountryDetailPage() {
  const params = useParams();
  const id = typeof params?.id === 'string' ? params.id : '';
  const country = europeCountries[id];

  if (!id || !country) return notFound();

  // 取得該國家的景點列表
  const spots = country.spots;

  // 💡 建立結構化資料 (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": country.title,
    "description": country.description,
    "itemListElement": spots.map((spot, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TouristAttraction",
        "name": spot.name,
        "description": spot.description,
        "image": spot.image,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": country.countryName
        }
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-slate-900 font-sans pb-24">
      {/* 💡 插入 JSON-LD Schema */}
      <Script
        id="country-spots-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        
        {/* --- 頁面標頭 (H1 讀取自 title) --- */}
        <MotionWrapper type="fadeInUp" className="text-center mb-16 space-y-3">
          <h1 className="text-3xl md:text-5xl font-serif text-slate-800 italic font-bold tracking-wide">
            {country.title}
          </h1>
          <div className="w-16 h-[1px] bg-[#C4A484] mx-auto mt-6"></div>
          <p className="text-slate-500 text-sm md:text-base mt-6 font-medium tracking-widest uppercase">
            {country.subtitle}
          </p>
        </MotionWrapper>

        {/* --- 景點內容區塊 (這裏會跑出該國家的多個景點) --- */}
        <div className="space-y-16 md:space-y-24">
          {spots.map((spot, idx) => (
            <MotionWrapper key={spot.id} type="fadeInUp">
              <div 
                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}
              >
                {/* 景點圖片 */}
                <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-[8px] md:border-[12px] border-white bg-slate-50">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 景點文字 */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:px-4">
                  <h2 className="text-2xl md:text-4xl font-serif text-slate-800 italic font-bold leading-tight">
                    {spot.name}
                  </h2>
                  <p className="text-slate-600 text-[16px] md:text-[17px] leading-[2.2] font-normal text-justify">
                    {spot.description}
                  </p>
                  <div className="w-12 h-[1px] bg-slate-200"></div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

        {/* 底部 CTA */}
        <MotionWrapper type="fadeInUp" className="mt-20 text-center border-t border-slate-100 pt-10">
          <h3 className="text-2xl font-serif text-slate-800 italic mb-4 font-bold">預定您的 {country.countryName} 旅程</h3>
          <Link 
            href="/booking" 
            className="inline-flex items-center gap-3 px-10 py-4 bg-slate-800 text-white rounded-full text-[12px] font-bold tracking-[0.2em] hover:bg-[#C4A484] transition-all shadow-xl uppercase active:scale-95"
          >
            <FaCalendarCheck size={14} /> 立即諮詢
          </Link>
        </MotionWrapper>

      </main>
    </div>
  )
}