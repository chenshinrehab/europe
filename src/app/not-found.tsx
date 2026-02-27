import Link from 'next/link'

export default function NotFound() {
  return (

    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4">
      

      <h1 className="text-9xl font-black text-slate-100 mb-2 relative">
        404
        <span className="absolute inset-0 flex items-center justify-center text-4xl text-slate-900">
          Oops!
        </span>
      </h1>


      <h2 className="text-2xl font-bold text-slate-800 mb-4">
        抱歉，您尋找的頁面似乎迷路了。
      </h2>
      
      <p className="text-slate-500 mb-10 max-w-md leading-relaxed">
        您嘗試存取的網址可能已經更換、刪除，或者暫時無法使用。
      </p>

      <Link
        href="/"
        className="px-10 py-3.5 bg-slate-900 text-white rounded-full font-bold hover:bg-indigo-700 shadow-xl hover:shadow-indigo-100 transition-all active:scale-95"
      >
        返回首頁
      </Link>

      <div className="mt-16 w-12 h-1 bg-slate-100 rounded-full"></div>
    </div>
  )
}