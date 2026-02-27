'use client'

import React from 'react'
import Link from 'next/link'
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  const navItems = [
    { name: '派大星', path: '/a' },
    { name: '小呱', path: '/b' },
    { name: '蟹堡王', path: '/c' },
    { name: '美味蟹堡', path: '/d' },
  ]

  return (
    <footer className="bg-white text-slate-900 border-t border-slate-100 pt-10 pb-8 mt-auto">
      <div className="container mx-auto px-4">

        {/* Part 1: 快速導覽 (保留您原始圖片排版樣式)*/}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-6 tracking-wide">
            快速導覽
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2 max-w-6xl mx-auto">
        {/* 第 1 格*/}
            <Link href="/a" className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-400 transition-all">
              <div className="h-24 md:h-32 bg-slate-50 relative">
                <img src="/images/footer/派大星.jpg" className="w-full h-full object-cover"  />
              </div>
              <div className="py-3 text-center border-t border-slate-100">
                <span className="text-slate-800 font-bold text-sm md:text-base">派大星</span>
              </div>
            </Link>
  

        {/* 第 2 格 */}
        <Link href="/b" className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-400 transition-all">
          <div className="h-24 md:h-32 bg-slate-50 relative">
            <img src="/images/footer/大鳳梨.jpg" className="w-full h-full object-cover"  />
          </div>
          <div className="py-3 text-center border-t border-slate-100">
            <span className="text-slate-800 font-bold text-sm md:text-base">小呱</span>
          </div>
        </Link>

        {/* 第 3 格 */}
        <Link href="/c" className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-400 transition-all">
          <div className="h-24 md:h-32 bg-slate-50 relative">
            <img src="/images/footer/海綿寶寶.jpg" className="w-full h-full object-cover"  />
          </div>
          <div className="py-3 text-center border-t border-slate-100">
            <span className="text-slate-800 font-bold text-sm md:text-base">蟹堡王</span>
          </div>
        </Link>

        {/* 第 4 格 */}
        <Link href="/d" className="group flex flex-col border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-slate-400 transition-all">
          <div className="h-24 md:h-32 bg-slate-50 relative">
            <img src="/images/footer/海綿寶寶.jpg" className="w-full h-full object-cover"  />
          </div>
          <div className="py-3 text-center border-t border-slate-100">
            <span className="text-slate-800 font-bold text-sm md:text-base">美味蟹堡</span>
          </div>
        </Link>

      </div>   
    </div>

        {/*    Part 2: 店家資訊區塊 */}
        <div className="flex flex-col items-center text-center space-y-6 pt-8 border-t border-slate-50">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">海綿寶寶</h3>
                {/* 電話 */}
            <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-slate-700">
              <FaPhoneAlt className="text-slate-400" /> 
              <span className="font-mono text-2xl font-extrabold">(02) 888-8888</span>
            </div>
              
              {/* 地址 */}
              <div className="flex items-center gap-2 text-slate-600">
                <HiLocationMarker className="text-slate-400" />
                <span className="text-lg">太平洋深海300米處</span>
              </div>
            </div>
          </div>

          {/* 預約按鈕 */}
          <Link 
            href="/booking" 
            className="px-10 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 shadow-lg active:scale-95 transition-all"
          >
            立即預約掛號
          </Link>

          {/* 版權與聲明 */}
          <div className="pt-4">
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              © {new Date().getFullYear()} 海綿寶寶 專業廚師 All Rights Reserved.<br />
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}