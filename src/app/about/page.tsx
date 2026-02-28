'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaQuoteLeft } from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'

export default function ServiceDirectoryPage() {
  const servicePrograms = [
    {
      slug: 'concept',
      title: '服務理念',
      subtitle: 'Philosophy',
      description: '把瑣事留給我們，把風景留給自己。我們不只是駕駛，更是您旅途中的生活品味家。',
      image: '/images/service/concept.webp',
      features: ['職人精神', '細節至上'],
    },
    {
      slug: 'fleet',
      title: '嚴選車隊介紹',
      subtitle: 'Elite Fleet',
      description: '全線採用賓士V-Class 商務8人座 ，搭配合規保險與資深華語司機與導遊。',
      image: '/images/service/Elite Fleet.webp',
      features: ['賓士車系', '合法安全'],
    },
    {
      slug: 'reviews',
      title: '旅客評價分享',
      subtitle: 'Reviews',
      description: '聽聽走過歐洲各國的旅客，如何評價這段不被打擾、充滿溫度的訂製旅程。',
      image: '/images/service/people.webp',
      features: ['真實口碑', '五星滿意'],
    }
  ]

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-slate-900 font-sans pb-20">
      <main className="max-w-4xl mx-auto px-6 py-10 md:py-14">
        
        {/* --- 頁面標頭 --- */}
        <MotionWrapper type="fadeInUp" className="text-center mb-10 space-y-2">
          <FaQuoteLeft className="text-[#C4A484] opacity-20 mx-auto" size={30} />
          <h1 className="text-3xl md:text-4xl font-serif text-slate-800 italic">關於服務</h1>
          <div className="w-12 h-[1px] bg-[#C4A484] mx-auto mt-4"></div>
        </MotionWrapper>

        {/* --- 項目列表：全卡片可點擊版 --- */}
        <div className="grid grid-cols-1 gap-6">
          {servicePrograms.map((program, idx) => (
            <MotionWrapper
              key={program.slug}
              type="fadeInUp"
            >
              <Link 
                href={`/about/${program.slug}`}
                className={`group flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch bg-white rounded-[1.5rem] overflow-hidden shadow-lg shadow-slate-200/40 border border-white hover:border-[#F2EFE9] hover:shadow-xl transition-all duration-500 block`}
              >
                {/* 圖片區塊 (35%) */}
                <div className="w-full md:w-[35%] relative min-h-[220px] md:min-h-full overflow-hidden bg-slate-50">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                {/* 文字內容區塊 (65%) */}
                <div className="w-full md:w-[65%] p-6 md:p-8 flex flex-col justify-center space-y-3">
                  <div className="space-y-1">
                    <span className="text-[#C4A484] text-[10px] font-bold tracking-[0.2em] uppercase block">
                      {program.subtitle}
                    </span>
                    <h2 className="text-xl md:text-2xl font-serif text-slate-800 italic group-hover:text-[#C4A484] transition-colors">
                      {program.title}
                    </h2>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-2">
                    {program.description}
                  </p>

                  {/* 特色標籤 */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {program.features.map((feature, fIdx) => (
                      <span 
                        key={fIdx} 
                        className="text-[9px] font-bold tracking-wider text-slate-400 border border-slate-100 px-3 py-1 rounded-full bg-[#FDFCF9]"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* 視覺引導按鈕 (現在僅作裝飾) */}
                  <div className="pt-2">
                    <div className="inline-flex items-center gap-2 text-xs text-slate-800 font-serif italic border-b border-slate-200 pb-0.5 group-hover:text-[#C4A484] group-hover:border-[#C4A484] transition-all">
                      進入查看 <FaArrowRight size={10} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </MotionWrapper>
          ))}
        </div>

      </main>
    </div>
  )
}