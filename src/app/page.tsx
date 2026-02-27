// src/app/page.tsx


export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-800 px-4 pt-8 pb-4">
      <main className="max-w-6xl mx-auto">
        
        {/* Section 1: 人物介紹 */}
        {/* 修改點：bg-white (純白背景), mt-0 (移除負邊距避免露出底部背景), 邊框改淡 */}
        <section className="bg-white rounded-2xl overflow-hidden border border-slate-100 flex flex-col md:flex-row relative z-10 shadow-sm mt-0">

        <div className="md:w-1/2 relative h-[500px] md:h-[600px] overflow-hidden">
             <img src="/images/海綿寶寶.jpg" className="absolute inset-0 w-full h-full object-cover" />
        </div>

          <div className="md:w-1/2 p-8 bg-white"> {/* 確保文字區塊也是純白 */}
            <h1 className="text-5xl font-bold text-slate-900 mb-2">海綿寶寶</h1>
            <p className="text-xl text-slate-500 mb-6">蟹堡王廚師</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-blue-600 font-bold flex items-center mb-2">
                  重要特徵
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  擁有強大的再生能力，身體破壞後能快速恢復。最大的挫折是考駕照永遠不會過。 
                </p>
              </div>
              <div>
                <h3 className="text-blue-600 font-bold flex items-center mb-2">
                  職業與愛好
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  在「蟹堡王」餐廳擔任廚師，做蟹堡技術高優。愛好是捕捉水母、吹泡泡和練習空手道。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 地點資訊 */}
        <section className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-3xl font-bold text-slate-900">房屋介紹</h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-8">

              <div className="lg:w-4/12 aspect-[9/16] bg-slate-50 rounded-xl overflow-hidden border border-slate-100">
                <iframe 
                  width="100%" height="100%" 
                  src="https://www.youtube.com/embed/eEFfBhW0tl0" 
                  title="診所介紹" frameBorder="0" allowFullScreen
                ></iframe>
              </div>

              {/* 文字資訊內容 */}
              <div className="lg:w-8/12 space-y-6">
                <h3 className="text-4xl font-bold text-slate-900">深海的大鳳梨</h3>
                
                <div className="grid md:grid-cols-2 gap-8 my-6">
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-5 border-l-4 border-blue-600 pl-3">特色</h3>
                    <ul className="space-y-4 text-slate-600 text-lg">
                      <li className="flex items-center">在深海裡面</li>
                      <li className="flex items-center">寵物有小蝸牛</li>
                      <li className="flex items-center">裡面住海綿寶寶</li>
                    </ul>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-slate-800 mb-5 border-l-4 border-pink-500 pl-3">訪客</h3>
                    <ul className="space-y-4 text-slate-600 text-lg">
                      <li className="flex items-center"> 派大星</li>
                      <li className="flex items-center"> 章魚哥</li>
                      <li className="flex items-center"> 謝老闆</li>
                      <li className="flex items-center"> 皮老闆</li>
                    </ul>
                  </div>
                </div>

                {/* 按鈕區塊 */}
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 transition-colors mt-auto">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 text-slate-800 text-lg font-medium">
                            <p>太平洋深海300米處</p>
                        </div>
                        <div className="flex items-center gap-3 text-slate-800 text-lg font-medium">
                            <a href="tel:+886-2-888-8888" className="tracking-wide text-xl font-bold hover:text-blue-600 transition-colors">
                              (02) 888-8888
                            </a>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 w-full md:w-auto flex-shrink-0">
                        <a href="https://www.spongebobmovie.tw/home/" target="_blank" rel="noopener noreferrer" className="w-full md:w-72 text-center px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium flex items-center justify-center gap-2">
                            海綿寶寶的家
                        </a>
                        <a href="https://maps.app.goo.gl/G7dpZz2N4wiEwVRcA" target="_blank" rel="noopener noreferrer" className="w-full md:w-72 text-center px-5 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg transition-all font-medium flex items-center justify-center hover:bg-slate-50 gap-2">
                             Google 地圖
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}