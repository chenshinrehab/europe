// src/data/a.ts

export interface aMetadata {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  features?: string[];
  lastModified?: string;
  tags?: string[];
}

export interface aProgram extends aMetadata {
  contentHtml?: string;
  whyChooseUs?: string[];
  programBenefits?: string[];
  images?: { src: string; alt: string }[];
  qrCode?: string;
  benefitsTitle?: string;
  benefitsIconClass?: string;
  qaList?: { question: string; answer: string }[];
}

export const aPrograms: aProgram[] = [
  {
    slug: 'a',
    title: '派大星',
    subtitle: '海星',
    description: '海綿寶寶的朋友',
    image: '/images/a/派大星.jpg',
    features: ['便宜', '好用', '好吃'],
    contentHtml: `
      <p>派大星是一隻體型圓胖、呈珊瑚粉紅色的海星，居住在<strong>比奇堡海底城市</strong>的一塊岩石下，是海綿寶寶最好的朋友。
      他最顯著的性格特徵為懶散與低智商，但偶爾也會展現出出人意表的智慧型。派大星沒有固定工作，自稱是「無所事事藝術」的專家。
      該角色廣受評論界與粉絲好評，並被製作成多種《海綿寶寶》相關商品，包括集換卡、電子遊戲、絨毛玩偶及漫畫書等。他亦為改編自該系列的三部電影及舞台音樂劇中的重要角色。</p>
           <div className="md:w-1/2 relative h-[500px] md:h-[600px] overflow-hidden">
             <img src="/images/a/派大星.jpg"  />
        </div>
      `,
    whyChooseUs: [
      '特色1',
      '特色2',
      '特色3'
    ],
    programBenefits: [
      '優點1',
      '優點2',
      '優點3'
    ],
  }
];