import { IProduct, IProductCat } from 'utils/types';

export const DUMMY_SHOES_CAT: IProductCat[] = [
  { id: 'hiking123', type: 'hiking' },
  { id: 'running123', type: 'running' },
  { id: 'trail123', type: 'trail' }
];

export const DUMMY_SHOES: IProduct[] = [
  {
    id: 1,
    category: 'hiking',
    name: 'x ultra 4 gtx',
    technology: 'gore-tex',
    price: 80,
    stock: 3,
    imagePath: '/shop/shoes/hiking/L41289600_0_GHO_X_ULTRA_4_GTX_W_Black-StoWea-Op.webp'
  },
  {
    id: 2,
    category: 'hiking',
    name: 'x ultra mid',
    technology: 'gore-tex',
    stock: 5,
    price: 100,
    imagePath: '/shop/shoes/hiking/L41295600_8dee45ca3f1391e2bf6e96f841965c26.webp'
  },
  {
    id: 3,
    category: 'hiking',
    name: 'quest 4',
    technology: 'gore-tex',
    price: 120,
    stock: 0,
    imagePath:
      '/shop/shoes/hiking/L41387000_0_GHO_QUEST_4_GTX_W_Slate_Trooper_Opal_Blue.webp'
  },
  {
    id: 4,
    category: 'running',
    name: 'spectur',
    price: 80,
    stock: 10,
    imagePath: '/shop/shoes/running/L41589300_0_GHO_SPECTUR_W_Ebony_Almond_Cream_Le.webp'
  },
  {
    id: 5,
    category: 'running',
    name: 's/lb phantasm cf',
    price: 85,
    stock: 9,
    imagePath: '/shop/shoes/running/L41557900_0_GHO_S_LAB_PHANTASM_CF_Racing_Racing.webp'
  },
  {
    id: 6,
    category: 'running',
    name: 'glide max sale',
    price: 70,
    stock: 0,
    imagePath: '/shop/shoes/running/L41768900_0_GHO_GLIDE_MAX_W_Wht_Almond_Cream_Te.webp'
  },
  {
    id: 7,
    category: 'trail',
    name: 's/lab pulsar soft ground',
    price: 90,
    stock: 19,
    imagePath:
      '/shop/shoes/trail/L47170900_0_GHO_S_LAB_PULSAR_2_SGQuiet_Shade_Magnet_Black.webp'
  },
  {
    id: 8,
    category: 'trail',
    name: 's/lab pulsar 2 fiery',
    price: 90,
    stock: 1,
    imagePath:
      '/shop/shoes/trail/L47220100_0_GHO_S_LAB_PULSAR_2Fiery_Red_Fiery_Red_White.webp'
  }
];
