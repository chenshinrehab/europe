// src/data/about.ts

export const aboutData: Record<string, any> = {
  concept: {
    title: "服務理念",
    subtitle: "Our Philosophy",
    description: "把歐洲的浪漫留給自己，將旅途的瑣碎交給我們",
    image: "/images/about/concept.webp",
    // 修正點：使用反引號 ` 包裹 HTML 字串，確保 TS 不會報錯
    content: [
    `
<h2 style="margin-bottom: 30px; font-size: 1.75rem; color: #334155;">重新定義您的歐洲自由行</h2>

<p style="line-height: 2.1; margin-bottom: 24px;">
  想要深度體驗歐洲的魅力，卻又不想被傳統旅行團的緊湊行程綁架？自由行絕對是最好的選擇，但<span style="color: #e67e22; font-weight: bold;">「交通」往往是決定旅程品質的最關鍵因素</span>。
</p>

<p style="line-height: 2.1; margin-bottom: 30px;">
  在大眾運輸與租車自駕之間，我們為您提供第三種、也是最完美的解答 —— <span style="color: #2980b9; font-weight: bold;">專屬在地華人包車服務</span>。我們聽見了旅人的心聲，致力於解決歐洲旅遊中最真實的痛點：
</p>

<hr style="margin: 40px 0; border: 0; border-top: 1px solid #f1f5f9;" />

<div style="margin-bottom: 40px;">
  <p style="line-height: 2.1; margin-bottom: 12px;"><b style="font-size: 1.2rem; color: #1e293b;">● 告別舟車勞頓與行李夢魘</b></p>
  <p style="line-height: 2.1;">不需要再為了轉車疲於奔命，也不用在擁擠的車站顧及大包小包。我們提供<span style="color: #27ae60; font-weight: bold;">點到點的直達服務</span>，讓每一次移動都成為優雅的休息與充電。</p>
</div>

<div style="margin-bottom: 40px;">
  <p style="line-height: 2.1; margin-bottom: 12px;"><b style="font-size: 1.2rem; color: #1e293b;">● 零溝通障礙的在地專業嚮導</b></p>
  <p style="line-height: 2.1;">團隊由<span style="color: #2980b9; font-weight: bold;">長年旅居歐洲的華人</span>組成，不僅語言相通，更深諳當地路況與交通法規。我們帶您避開擁擠的人潮與觀光陷阱，走進真正的歐洲日常。</p>
</div>

<div style="margin-bottom: 40px;">
  <p style="line-height: 2.1; margin-bottom: 12px;"><b style="font-size: 1.2rem; color: #1e293b;">● 絕對的財物與行車安全保障</b></p>
  <p style="line-height: 2.1;">歐洲自駕最讓人不安的<span style="color: #c0392b; font-weight: bold;">破窗失竊風險</span>與複雜的禁行區罰單，在我們的守護下將不復存在。專車全天候待命，讓您徹底遠離迷路焦慮與治安憂慮。</p>
</div>

<div style="margin-bottom: 40px;">
  <p style="line-height: 2.1; margin-bottom: 12px;"><b style="font-size: 1.2rem; color: #1e293b;">● 完美釋放假期的鬆弛感</b></p>
  <p style="line-height: 2.1;">不論是壯麗的海岸線還是歷史悠久的古城，您只需負責享受美景。晚餐時刻，您可以<span style="color: #8e44ad; font-weight: bold;">安心享受當地的微醺美酒</span>，因為我們會在那裡守候，平穩地將您送回下榻飯店。</p>
</div>

<hr style="margin: 40px 0; border: 0; border-top: 1px solid #f1f5f9;" />

<p style="text-align: center; font-style: italic; line-height: 2.1; margin-top: 40px; color: #475569;">
  我們不僅僅是司機，更是您在歐洲的<b>專屬旅伴</b>。<br/>
  從出發到回程，為您打造一趟<span style="color: #2980b9; font-weight: bold;">沒有疲累、只有回憶的質感之旅</span>。
</p>

<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; margin: 60px 0;">
  <div style="position: relative; width: 100%; border-radius: 2rem; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border: 12px solid white;">
    <img 
      src="/images/service/concept.webp" 
      alt="專業中文司機與導遊團隊" 
      style="width: 100%; height: auto; display: block; object-fit: cover;"
    />
  </div>
  <p style="color: #C4A484; font-family: serif; font-style: italic; font-size: 1.125rem; letter-spacing: 0.05em; text-align: center; margin: 0;">
    專業中文司機與導遊團隊
  </p>
</div>

`
    ],
    features: ["職人精神", "細節至上", "慢旅藝術"],
    seoTitle: "服務理念 | 歐洲漫行歐洲包車",
    seoDesc: "深入了解 歐洲漫行的服務理念，提供您最專業的歐洲客製化包車旅遊服務。"
  },
  fleet: {
    title: "嚴選車隊介紹",
    subtitle: "Elite Fleet",
    description: "全線採用賓士V-Class 商務8人座 ，確保長途旅程寧靜舒適。",
    image: "/images/service/Elite Fleet.webp",
    content: [`
      <h2 style="margin-bottom: 30px; font-size: 1.75rem; color: #334155;">頂級車隊與專業司導</h2>

      <p style="line-height: 2.1; margin-bottom: 24px;">
        一段完美的旅程，從踏入車廂的那一刻開始。我們致力於提供超乎預期的乘車體驗，全車隊皆採用頂級的 <span style="color: #2980b9; font-weight: bold;">Mercedes-Benz V-Class</span> 系列，或同等級之豪華商務車款。
      </p>
      
      <p style="line-height: 2.1; margin-bottom: 30px;">
        每輛車均配備獨立恆溫空調、與高品質隔音設備，確保您在跨國長途移動中，依然能享受如頭等艙般的放鬆感。所有車輛皆具備 <span style="color: #27ae60; font-weight: bold;">歐洲合規營業登記</span>，由經驗豐富的專業華人司導為您掌舵。
      </p>
      
      <hr style="margin: 40px 0; border: 0; border-top: 1px solid #f1f5f9;" />
      
      <div style="background-color: #f8fafc; padding: 30px; border-radius: 1.5rem; margin-bottom: 40px; border: 1px solid #e2e8f0;">
        <p style="line-height: 2.1; margin-bottom: 16px;"><b style="font-size: 1.25rem; color: #1e293b;">【車型規格與承載建議】</b></p>
        
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2.1; color: #475569;">
          <li style="margin-bottom: 10px;">
            <b style="color: #334155;">● 推薦車型：</b>Benz 賓士 V-Class (商務 8-9 人座) 或其他品牌同級商務車
          </li>
          <li style="margin-bottom: 10px;">
            <b style="color: #334155;">● 乘坐人數：</b>最多可承載 <span style="color: #e67e22; font-weight: bold;">7 位旅客 + 1 位司機</span>
          </li>
          <li style="margin-bottom: 10px;">
            <b style="color: #334155;">● 行李容量：</b>滿載 7 位旅客時，可放置 <span style="color: #e67e22; font-weight: bold;">7 個大行李箱</span>
          </li>
          <li style="margin-bottom: 10px; font-size: 0.95rem; color: #64748b; font-style: italic;">
            ＊若帶有高爾夫球具、滑雪板等大型運動器材，請務必先私訊確認空間。
          </li>
          <li style="font-size: 0.9rem; color: #94a3b8; margin-top: 10px;">
            ＊如需具備 NCC 執照之專屬 V-Class 車款，請另行來信詢問。
          </li>
        </ul>
      </div>
      
<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; margin: 60px 0;">
  <div style="width: 100%; aspect-ratio: 16 / 9; border-radius: 2rem; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border: 12px solid white; background: white;">
    <iframe 
      src="https://www.youtube.com/embed/ANNBDkEy_SU" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen
      style="width: 100%; height: 100%;"
    ></iframe>
  </div>
  <p style="color: #C4A484; font-family: serif; font-style: italic; font-size: 1.125rem; letter-spacing: 0.05em; text-align: center; margin: 0;">
    公司車隊影片
  </p>
</div>


      <div style="display: flex; flex-direction: column; align-items: center; gap: 24px; margin: 60px 0;">
        <div style="position: relative; width: 100%; border-radius: 2rem; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border: 12px solid white;">
          <img 
            src="/images/service/car/1.webp" 
            alt="超大置物空間" 
            style="width: 100%; height: auto; display: block; object-fit: cover;"
          />
        </div>
        <p style="color: #C4A484; font-family: serif; font-style: italic; font-size: 1.125rem; letter-spacing: 0.05em; text-align: center; margin: 0;">
          超大置物空間
        </p>
      </div>

      
      <div style="display: flex; flex-direction: column; align-items: center; gap: 24px; margin: 60px 0;">
        <div style="position: relative; width: 100%; border-radius: 2rem; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border: 12px solid white;">
          <img 
            src="/images/service/car/2.webp" 
            alt="寬敞舒適乘坐空間" 
            style="width: 100%; height: auto; display: block; object-fit: cover;"
          />
        </div>
        <p style="color: #C4A484; font-family: serif; font-style: italic; font-size: 1.125rem; letter-spacing: 0.05em; text-align: center; margin: 0;">
          寬敞舒適乘坐空間
        </p>
      </div>

      
      <div style="display: flex; flex-direction: column; align-items: center; gap: 24px; margin: 60px 0;">
        <div style="position: relative; width: 100%; border-radius: 2rem; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border: 12px solid white;">
          <img 
            src="/images/service/car/3.webp" 
            alt="寬敞舒適乘坐空間" 
            style="width: 100%; height: auto; display: block; object-fit: cover;"
          />
        </div>
        <p style="color: #C4A484; font-family: serif; font-style: italic; font-size: 1.125rem; letter-spacing: 0.05em; text-align: center; margin: 0;">
          寬敞舒適乘坐空間
        </p>
      </div>

      
      <div style="display: flex; flex-direction: column; align-items: center; gap: 24px; margin: 60px 0;">
        <div style="position: relative; width: 100%; border-radius: 2rem; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border: 12px solid white;">
          <img 
            src="/images/service/car/4.webp" 
            alt="Mercedes-Benz V-Class頂級商務車" 
            style="width: 100%; height: auto; display: block; object-fit: cover;"
          />
        </div>
        <p style="color: #C4A484; font-family: serif; font-style: italic; font-size: 1.125rem; letter-spacing: 0.05em; text-align: center; margin: 0;">
          Mercedes-Benz V-Class頂級商務車
        </p>
      </div>

            <div style="display: flex; flex-direction: column; align-items: center; gap: 24px; margin: 60px 0;">
        <div style="position: relative; width: 100%; border-radius: 2rem; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border: 12px solid white;">
          <img 
            src="/images/service/car/5.webp" 
            alt="Mercedes-Benz V-Class頂級商務車" 
            style="width: 100%; height: auto; display: block; object-fit: cover;"
          />
        </div>
        <p style="color: #C4A484; font-family: serif; font-style: italic; font-size: 1.125rem; letter-spacing: 0.05em; text-align: center; margin: 0;">
          Mercedes-Benz V-Class頂級商務車
        </p>
      </div>

            <div style="display: flex; flex-direction: column; align-items: center; gap: 24px; margin: 60px 0;">
        <div style="position: relative; width: 100%; border-radius: 2rem; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); border: 12px solid white;">
          <img 
            src="/images/service/car/6.webp" 
            alt="Mercedes-Benz V-Class頂級商務車隊" 
            style="width: 100%; height: auto; display: block; object-fit: cover;"
          />
        </div>
        <p style="color: #C4A484; font-family: serif; font-style: italic; font-size: 1.125rem; letter-spacing: 0.05em; text-align: center; margin: 0;">
          Mercedes-Benz V-Class頂級商務車隊
        </p>
      </div>

      <p style="text-align: center; font-style: italic; line-height: 2.1; margin-top: 40px; color: #475569;">
        我們深知細節決定旅程的質感。<br/>
        從豪華的座椅到專業的服務，只為成就您在歐洲的<span style="color: #2980b9; font-weight: bold;">每一段尊榮移動</span>。
      </p>`
    ],
    features: ["賓士 V-Class",  "合規安全"],
    seoTitle: "嚴選豪華車隊 | 歐洲漫行歐洲旅遊",
    seoDesc: "探索歐洲漫行豪華車隊，全線賓士商務車，提供最安全舒適的歐洲跨國接送。"
  },
  reviews: {
    title: "旅客評價分享",
    subtitle: "Guest Reviews",
    description: "聽聽走過歐洲各國的旅客，如何評價這段不被打擾、充滿溫度的訂製旅程。",
    image: "/images/service/people.webp",
    content: [
"『這是我體驗過最棒的家族旅行！司導開車超穩，還帶我們去私房景點喝咖啡。』 — 林小姐",
  "『帶長輩出國最怕累，這次選擇 Elegant Europe 真的做對了，無微不至的照顧。』 — 陳先生",
  "『在南法遇到罷工，幸好司導靈機一動切換備用行程，讓旅程依然完美。』 — 張太太",
  
  "『去義大利多洛米蒂健行是我們的夢想，但那裡的山路十八彎，自己開車真的太考驗心臟。還好有專業司導，開車又穩又安全。我們爬完山雙腿發軟，一上車就能安穩地閉眼休息，徹底釋放體力消耗，這才是真正的度假啊！』 — 王先生",
  
  "『這次義大利自助差點變驚魂記！在佛羅倫斯入住飯店時遇到訂房系統出錯，差點沒房間住。幸好司導大哥超給力，立刻上前用流利的義大利文幫我們跟櫃檯交涉，順利解決危機！有在地人帶著，安全感真的爆棚。』 — 李太太",
  
  "『帶著小孩和長輩去義大利，最怕就是在威尼斯和羅馬的石板路上拖大行李。包車直接點到點接送，幫我們省下了超多體力與找路的時間。司導還推薦了沒有觀光客的在地餐酒館，回憶滿分！』 — 趙小姐",
  
  "『原本以為包車只是解決交通，沒想到是買到了無價的「鬆弛感」。在托斯卡尼的酒莊微醺後，不用擔心酒駕或找車，直接舒舒服服地睡回飯店，服務貼心又專業。』 — 吳先生"
    ],
    features: ["真實口碑", "五星滿意", "家族旅遊首選"],
    seoTitle: "旅客真實評價 | 歐洲漫行歐洲旅遊",
    seoDesc: "看看旅客對 E歐洲漫行服務的真實分享，為您的歐洲假期選擇最安心的夥伴。"
  }
};