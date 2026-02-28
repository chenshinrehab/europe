// app/about/[slug]/page.tsx

import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaCalendarCheck } from 'react-icons/fa6'
import { aboutData } from '@/data/about' 
import MotionWrapper from '@/components/MotionWrapper'

// 1. 生成 SEO 標籤 (Metadata)
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const data = aboutData[params.slug];
  if (!data) return { title: 'Not Found' };

  return {
    title: data.seoTitle,
    description: data.seoDesc,
    alternates: {
      canonical: `https://yourdomain.com/about/${params.slug}`,
    },
    other: {
      "geo.region": "IT;AT;CH;DE;FR;ES", 
      "geo.placename": "Europe",
    }
  };
}

export default function AboutDetailPage({ params }: { params: { slug: string } }) {
  const data = aboutData[params.slug];
  
  if (!data) {
    notFound();
  }

  // Schema.org JSON-LD 定義
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency", 
    "name": "Elegant Europe 優雅歐洲包車",
    "image": "https://yourdomain.com/hero-image.jpg",
    "url": "https://yourdomain.com",
    "telephone": "+886-975-665-786",
    "priceRange": "TWD",
    "description": "專為台灣旅客量身打造的歐洲包車客製化旅行。",
    "sameAs": ["https://line.me/R/ti/p/@261RYSIY"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "jimmyforjob2@gmail.com",
      "availableLanguage": ["Chinese", "English"]
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-slate-900 font-sans pb-24 relative">
      {/* 注入 SEO JSON-LD */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

      <main className="max-w-4xl mx-auto px-6 pt-6 md:pt-10 relative">
        <article className="relative z-10">
          
          {/* 標題區塊：顯示 subtitle, title, description */}
          <MotionWrapper type="fadeInUp" className="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-slate-200/50 border border-white text-center">
            <span className="text-[#C4A484] text-[11px] md:text-xs font-extrabold tracking-[0.4em] uppercase block mb-4">
              {data.subtitle}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif text-slate-800 italic mb-6 leading-tight font-bold">
              {data.title}
            </h1>
<div className="w-20 h-[1px] bg-[#C4A484]/40 mx-auto mb-10"></div>
<h2 
  className="text-slate-600 text-lg md:text-xl font-medium max-w-5xl mx-auto italic tracking-[0.2em] px-8 text-center"
  style={{ lineHeight: '1.6', display: 'block' }}
>
  {data.description}
</h2>
          </MotionWrapper>

          {/* 核心內文區塊：這裡會解析您在 about.ts 中寫入的所有 HTML */}
          <div className="mt-12 px-4 md:px-12">
            <div className="space-y-8 text-slate-700 font-normal leading-[2.1] text-[17px] md:text-[18px]">
              {data.content.map((p: string, i: number) => (
                <div 
                  key={i} 
                  className="text-justify"
                  dangerouslySetInnerHTML={{ __html: p }} 
                />
              ))}
            </div>

            {/* 特色標籤群 */}
            <div className="flex flex-wrap justify-center gap-3 pt-12">
              {data.features.map((f: string, i: number) => (
                <span key={i} className="text-[11px] font-bold tracking-widest text-slate-500 border border-slate-200 px-5 py-2 rounded-full bg-white shadow-sm">
                  # {f}
                </span>
              ))}
            </div>
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

        </article>
      </main>
    </div>
  );
}