'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa6'
import { FaCalendarCheck } from 'react-icons/fa6'
import MotionWrapper from '@/components/MotionWrapper'

export default function ServicesPage() {
  const services = [

    {
      id: 'transparent-pricing',
      title: '透明合理的價格',
      subtitle: 'Transparent Pricing',
      description: '價格包含全歐境內停車費、過路費及司機小費，每天只要 650 歐元。絕無隱藏費用，且支援台灣在地收款，讓您預定流程更安心、更有保障。',
      image: '/images/car/9.webp', // 請替換為您的對應圖片路徑
      features: ['全包式報價', '台灣帳戶收款', '無隱藏加價'],
    },
    {
      id: 'travel-planning',
      title: '完整的旅遊規劃',
      subtitle: 'Custom Travel Planning',
      description: '我們協助您安排所有行程建議與客製化路線規劃。您只需負責訂好機票與旅館，帶著一顆快樂的心前來，剩下的繁瑣交通與路線交給我們處理。',
      image: '/images/car/7.webp', // 請替換為您的對應圖片路徑
      features: ['客製化路線', '在地華人安排', '行程優化建議'],
    },

    {
      id: 'luxury-vclass-fleet',
      title: '高階休旅車接送',
      subtitle: 'Premium V-Class Service',
      description: '我們堅持全線採用賓士 V-Class 豪華商務 8 人座車型。專為長途旅行設計，具備卓越的隔音表現與人體工學皮椅，確保每一段歐洲跨國旅程都能在寧靜且寬敞舒適的環境中度過。',
      image: '/images/car/5.webp', // 建議使用一張側身流線型賓士 V-Class 的照片
      features: ['賓士 V-Class 全線採用', '寬敞 8 人座空間', '長途座艙寧靜優化'],
    },

    {
      id: 'chinese-guide',
      title: '專業中文司機',
      subtitle: 'Chinese Speaking Guide',
      description: '由旅居歐洲多年的在地華人服務，溝通零障礙。不僅是司機，更是您在歐洲的管家，日常需求或緊急狀況皆能即時提供協助，讓異國旅程充滿親切感。',
      image: '/images/car/6.webp', // 請替換為您的對應圖片路徑
      features: ['在地華人司導', '溝通零障礙', '日常生活協助'],
    },

    {
      id: 'airport-transfer',
      title: '專屬機場接送',
      subtitle: 'Airport Transfer',
      description: '從您抵達歐洲的那一刻起，體驗無縫接軌的尊榮服務。專業司機聯絡，協助搬運大件行李，讓您在長途飛行後能立刻在豪華座艙中放鬆休息。',
      image: '/images/car/1.webp',
      features: [ '大件行李協助', '航班即時追蹤','立即聯絡'],
    },
    {
      id: 'single-day-tour',
      title: '單日客製包車',
      subtitle: 'One-Day Tour',
      description: '不想被固定行程綁架？為您量身打造專屬的一日城市深度遊。無論是遙遠的五漁村、羅馬的歷史巡禮，還是郊區的酒莊品酩，時間與路線皆由您做主。',
      image: '/images/car/2.webp',
      features: ['行程彈性自由', '私房景點推薦', '專屬華語司機導遊'],
    },
    {
      id: 'multi-day-tour',
      title: '多日跨國漫旅',
      subtitle: 'Multi-Day Journey',
      description: '跨越國境的史詩級公路旅行。從阿爾卑斯山的壯麗雪景到蔚藍海岸的陽光，免去拖拉行李趕火車的疲憊，我們帶您舒適優雅地穿梭在歐洲各國的美景之間。',
      image: '/images/car/3.webp',
      features: ['免搬行李換乘', '跨國路線熟稔', '深度沉浸體驗'],
    },
    {
      id: 'wedding-photography',
      title: '海外婚紗攝影隨行',
      subtitle: 'Wedding Escort',
      description: '將歐洲的浪漫定格為永恆。我們提供寬敞舒適的商務車款，方便新人更衣與化妝，並配合攝影團隊機動調整拍攝路線，讓您的婚紗拍攝過程輕鬆且完美。',
      image: '/images/car/4.webp',
      features: ['寬敞更衣空間', '配合機動拍攝', '新人專屬照顧'],
    }
  ]

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-slate-900 font-sans pb-24">
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-16">
        
        {/* --- 頁面標頭 --- */}
        <MotionWrapper type="fadeInUp" className="text-center mb-16 space-y-3">
          <FaQuoteLeft className="text-[#C4A484] opacity-20 mx-auto" size={32} />
          <h1 className="text-3xl md:text-5xl font-serif text-slate-800 italic font-bold tracking-wide">
            為什麼歐洲包車要選我們?
          </h1>
          <div className="w-16 h-[1px] bg-[#C4A484] mx-auto mt-6"></div>
          <p className="text-slate-500 text-sm md:text-base mt-6 font-medium tracking-widest uppercase">
            Our Premium Services
          </p>
        </MotionWrapper>

        {/* --- 服務內容區塊 (純展示，不具備跳轉功能) --- */}
        <div className="space-y-12 md:space-y-20">
          {services.map((service, idx) => (
            <MotionWrapper
              key={service.id}
              type="fadeInUp"
            >
              <div 
                className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
              >
                {/* 圖片區塊 (佔 50%) */}
                <div className="w-full md:w-1/2 relative aspect-[4/3] md:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200/50 border-[8px] md:border-[12px] border-white bg-slate-50">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* 文字內容區塊 (佔 50%) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 md:px-4">
                  <div className="space-y-2">
                    <span className="text-[#C4A484] text-[11px] font-bold tracking-[0.25em] uppercase block">
                      {service.subtitle}
                    </span>
                    <h2 className="text-2xl md:text-4xl font-serif text-slate-800 italic font-bold leading-tight">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-slate-600 text-[16px] md:text-[17px] leading-[2.2] font-normal text-justify">
                    {service.description}
                  </p>


                  {/* 特色標籤 */}
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
                    {service.features.map((feature, fIdx) => (
                      <span 
                        key={fIdx} 
                        className="text-[11px] font-bold tracking-widest text-slate-500 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm"
                      >
                        # {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>

          {/* 底部 CTA 諮詢區 */}
          <MotionWrapper type="fadeInUp" className="mt-16 text-center border-t border-slate-100 pt-10">
            <h3 className="text-2xl font-serif text-slate-800 italic mb-4 font-bold">預定您的優雅行程</h3>
            <p className="text-slate-500 text-sm mb-8 font-medium italic">專屬司導、頂級車隊、為您量身打造每一哩路。</p>
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