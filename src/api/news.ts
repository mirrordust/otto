import ParagraphBlock from '@/components/news/ParagraphBlock.vue'
import ImageBlock from '@/components/news/ImageBlock.vue'
import Header2Block from '@/components/news/Header2Block.vue'

interface IParagraph {
  type: 'paragraph'
  content: {
    text: string
  }
}

interface IImage {
  type: 'image'
  content: {
    url: string
    caption: string
  }
}

interface IHeader1 {
  type: 'header1'
  content: {
    text: string
  }
}

type IBlock = IParagraph | IImage | IHeader1

export interface INewsItem {
  id: number
  title: string
  date: string
  blocks: IBlock[]
}

const news: INewsItem[] = [
  {
    id: 1,
    title: 'Croucher Foundation Director David Foster Visits HKUST for Climate Research Exchange',
    date: '2025-05-23',
    blocks: [
      {
        type: 'paragraph',
        content: {
          text: 'The Hong Kong University of Science and Technology (HKUST) recently welcomed Mr. David Foster, Director of the Croucher Foundation, to campus for a visit about the current research landscape of HKUST in climate and environmental studies.',
        },
      },
      {
        type: 'paragraph',
        content: {
          text: 'During the visit, Mr. Foster met with HKUST VPRDO Professor Cheng and affiliated members of the Otto Poon Centre for Climate Resilience and Sustainability (CCRS) at HKUST, including Professor Lu, Professor Fung, and Professor Lau.',
        },
      },
      // { type: 'image', urls: ['img1.jpg', 'img2.jpg'], layout: 'grid' },
      {
        type: 'image',
        content: {
          url: '/images/news/visit_photo.jpg',
          caption:
            'During the visit, Mr. David Foster (second from the right) met with VPRD Professor Tim K. Cheng (center), as well as Professor Mengqian Lu (far right), Director of the Otto Poon Centre for Climate Resilience and Sustainability (CCRS), and affiliated members Professor Jimmy Fung (far left) and Professor Alexis Lau (second from the left).',
        },
      },
      {
        type: 'paragraph',
        content: {
          text: 'The visit provided a valuable opportunity for mutual exchange on advancing science and innovation in the environmental and sustainable development domain, while strengthening collaborative ties between HKUST and the Croucher Foundation.',
        },
      },
      {
        type: 'paragraph',
        content: {
          text: 'The Croucher Foundation has long been dedicated to promoting scientific research in Hong Kong and has actively supported climate and environmental research initiatives, including the upcoming Climate, Weather, and Water Forum 2025 (CWWF2025) at HKUST.',
        },
      },
      {
        type: 'header1',
        content: {
          text: 'About the Croucher Foundation',
        },
      },
      {
        type: 'paragraph',
        content: {
          text: 'Established in 1979, the Croucher Foundation is a private foundation based in Hong Kong dedicated to the promotion of excellence in natural sciences, technology, and medicine. It provides support for scientific research and education in Hong Kong through fellowships, studentships, and research grants. The Foundation plays a pivotal role in nurturing future scientific leaders and advancing knowledge in critical scientific fields.',
        },
      },
    ],
  },
]

export const getNews = () => {
  return news
}

export const getNewsById = (id: number) => {
  const target = news.find((item) => item.id === id)
  return target || null
}

const componentMap = {
  paragraph: ParagraphBlock,
  image: ImageBlock,
  header1: Header2Block,
}

type ComponentType = keyof typeof componentMap

export const getComponentByType = (type: ComponentType) => {
  return componentMap[type]
}
