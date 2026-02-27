import React from 'react'
import Link from 'next/link'
import { aPrograms } from '@/data/a'

export default function APage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="max-w-5xl mx-auto px-4 py-12">
        
        {/* 簡單的頁面標題 */}
        <div className="mb-10 border-b border-slate-100 pb-6">
          <h1 className="text-3xl font-bold">海綿寶寶的朋友</h1>
        </div>

        {/* 項目列表 */}
        <div className="grid grid-cols-1 gap-6">
          {aPrograms.map((program) => (
            <Link
              key={program.slug}              href={`/a/${program.slug}`}
              className="group flex flex-col md:flex-row border border-slate-200 rounded-xl overflow-hidden hover:border-blue-500 transition-colors"
            >
              {/* 圖片區塊 */}
              <div className="w-full md:w-1/3 h-48 md:h-auto bg-slate-100">
                <img 
                  src={program.image} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 文字內容區塊 */}
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {program.title}
                </h2>

                <p className="text-slate-600 text-lg mb-4">
                  {program.description}
                </p>

                {/* 特色標籤 */}
                {program.features && program.features.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {program.features.map((feature, idx) => (
                      <span 
                        key={idx} 
                        className="text-sm bg-slate-50 text-slate-600 px-3 py-1 rounded border border-slate-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

      </main>
    </div>
  )
}