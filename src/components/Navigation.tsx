'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaCalendarCheck, 
  FaHome
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";

type NavItem = {
  name: string;
  path: string;
}

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/'
    return pathname?.startsWith(path)
  }

  const navItems: NavItem[] = [
    { name: '派大星', path: '/a' },
    { name: '小呱', path: '/b' },
    { name: '蟹堡王', path: '/c' },
    { name: '美味蟹堡', path: '/d' },
  ]

  return (
    /* 關鍵修改：使用 !bg-white 強制背景為白，移除 backdrop-blur 避免透出系統色 */
    <header className="sticky top-0 z-50 !bg-white border-b border-slate-200 shadow-sm">
      <div className="container mx-auto px-4">
        
        {/* 標題區塊 */}
        <div className="relative flex items-center justify-between py-2 md:py-4 min-h-[60px] md:min-h-[70px]">
          
          {/* 左側保留空間：手機版讓標題對齊，電腦版隱藏 */}
          <div className="flex-1 sm:hidden"></div>

          {/* 標題：絕對置中 */}
        <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center group z-10">
         <div className="text-xl md:text-2xl font-bold font-sans text-slate-900 leading-tight whitespace-nowrap">
               海綿寶寶
         </div>
          <p className="text-[10px] md:text-xs text-slate-500 tracking-wider leading-none mt-1 whitespace-nowrap">
             蟹堡王餐廳擔任廚師
          </p>
        </div>

          {/* 右側社交與按鈕區塊 */}
          <div className="flex-1 flex justify-end items-center gap-2 z-20">
              <Link 
                href="/booking"
                className="sm:hidden flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-full font-bold shadow-sm text-sm active:scale-95 transition-transform"
              >
                 <FaCalendarCheck size={14} /> 預約
              </Link>

              <div className="hidden sm:flex items-center gap-2">
                <Link href="/" title="回到首頁" 
                  className="w-9 h-9 rounded-full bg-white text-slate-600 border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                  <FaHome size={16} />
                </Link>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white text-slate-600 border border-slate-200 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all">
                  <FaFacebookF size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white text-slate-600 border border-slate-200 flex items-center justify-center hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white transition-all">
                  <FaInstagram size={16} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white text-slate-600 border border-slate-200 flex items-center justify-center hover:bg-[#FF0000] hover:text-white transition-all">
                  <FaYoutube size={16} />
                </a>
              </div>
          </div>
        </div>

        {/* 下方導覽選單 */}
        <nav className="w-full py-1.5 md:py-2 text-center border-t border-slate-50">
           <ul className="flex w-full overflow-x-auto justify-start md:justify-center gap-1.5 no-scrollbar px-1">
              {navItems.map((item) => (
                <li key={item.path} className="shrink-0">
                    <Link 
                      href={item.path} 
                      className={`
                        px-4 py-1.5 text-sm 
                        md:px-6 md:py-2 md:text-base 
                        rounded-full font-medium transition-all block whitespace-nowrap
                        ${isActive(item.path) 
                          ? 'text-blue-600 bg-blue-50' 
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}
                      `}
                    >
                      {item.name}
                    </Link>
                </li>
              ))}
              
              <li className="hidden sm:block">
                  <Link 
                    href="/booking" 
                    className="px-5 py-2 rounded-full text-base font-medium transition-all ml-2 flex items-center gap-1.5 bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                  >
                    <FaCalendarCheck size={16} /> 預約看診
                  </Link>
              </li>
           </ul>
        </nav>
      </div>
    </header>
  )
}