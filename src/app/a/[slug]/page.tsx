import { notFound } from 'next/navigation'
import Link from 'next/link'
import { aPrograms } from '@/data/a'

interface PageProps {
  params: Promise<{
    slug: string
  }>
}
export async function generateStaticParams() {
  return aPrograms.map((p) => ({
    slug: p.slug,
  }))
}

export default async function ADetailPage({ params }: PageProps) {
  const { slug } = await params
  const program = aPrograms.find((p) => p.slug === slug)
  
  if (!program) notFound()

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="max-w-4xl mx-auto px-4 py-12">
        
        {/* 返回列表 - */}
        <Link href="/a" className="text-indigo-600 hover:text-indigo-700 font-medium mb-10 inline-flex items-center group">
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span> 
          返回項目列表
        </Link>

        {/* 文章標題區 - */}
        <header className="mb-12 border-l-4 border-slate-900 pl-6 py-2">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-slate-900">
            {program.title}
          </h1>
          {program.subtitle && (
            <p className="text-xl text-indigo-900/70 font-medium">{program.subtitle}</p>
          )}
        </header>

        {/* 特色摘要方塊 - 強化邊框與背景層次 */}
        {(program.whyChooseUs || program.programBenefits) && (
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {program.whyChooseUs && (
              <div className="bg-white p-8 rounded-2xl border-2 border-slate-100 shadow-sm">
                <h2 className="text-lg font-bold mb-5 text-indigo-900 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  我們的特色
                </h2>
                <ul className="space-y-3 text-slate-600">
                  {program.whyChooseUs.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-indigo-400 mr-2 font-bold">✓</span>
                      <span dangerouslySetInnerHTML={{ __html: item }} className="leading-relaxed"></span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {program.programBenefits && (
              <div className="bg-slate-50/50 p-8 rounded-2xl border-2 border-slate-100 shadow-sm">
                <h2 className="text-lg font-bold mb-5 text-slate-800 flex items-center">
                  <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    商品優點
                </h2>
                <ul className="space-y-3 text-slate-600">
                  {program.programBenefits.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-slate-400 mr-2">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* 主文內容 - 增加段落間距與字體粗細變化 */}
        <article className="prose prose-slate prose-lg max-w-none mb-16 text-slate-700 leading-loose">
          {program.contentHtml ? (
            <div 
              className="[&_strong]:text-red-600 [&_strong]:font-bold"
              dangerouslySetInnerHTML={{ __html: program.contentHtml }} 
            />
          ) : (
            <p className="text-lg">{program.description}</p>
          )}
        </article>

        {/* 圖片展示 - 增加微陰影與邊框 */}
        {program.images && program.images.length > 0 && (
          <div className="space-y-10 mb-16">
            {program.images.map((img, idx) => (
              <div key={idx} className="border-4 border-slate-50 rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={img.src} 
                  className="w-full h-auto block hover:scale-[1.01] transition-transform duration-500" 
                />
              </div>
            ))}
          </div>
        )}


        {/* 頁尾動作 */}
        <div className="mt-20 pt-12 border-t border-slate-100 text-center">
          <Link
            href="/a"
            className="inline-block px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-indigo-700 shadow-xl hover:shadow-indigo-200 transition-all active:scale-95"
          >
            返回所有項目
          </Link>
        </div>
      </main>
    </div>
  )
}