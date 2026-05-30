export interface BookData {
  title: string;
  cover: string;
  coverImage: string;
  textColor: string;
  pageCount: number;
}

const EXT_16 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_045156_4a79ba3c-ba56-4cd4-834b-d9728f56d1a4.png&w=1920&q=85';
const EXT_17 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_044451_68c948df-6c4c-45eb-974e-923486a41e41.png&w=1920&q=85';
const EXT_18 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_043853_b2f3c7c8-5d47-43bc-9ce4-2fa8d717e42b.png&w=1920&q=85';
const EXT_19 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_043838_240c7443-18d6-4d61-be4a-2d01e2dd65a6.png&w=1920&q=85';
const EXT_20 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_043832_62031210-1de3-47a6-ac3f-78eb84e99858.png&w=1920&q=85';
const EXT_21 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_043220_eb34b2f8-8a78-4b29-bbbc-d61e137aedad.png&w=1920&q=85';
const EXT_22 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_043212_ce1559e3-e0a6-48c8-887f-1331a8e989c5.png&w=1920&q=85';
const EXT_23 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_032638_9520b937-d7e8-4f6a-88ba-8bbd1e8ecbfe.png&w=1920&q=85';
const EXT_24 = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260528_043201_f749ce8e-72f6-46eb-8440-0f6bdbf2a782.png&w=1920&q=85';

export const BOOKS: BookData[] = [
  {
    title: 'Shadows of\nthe Archive',
    cover: 'linear-gradient(150deg, #2a1a0e 0%, #3d2517 100%)',
    coverImage: '/book-1.png',
    textColor: 'transparent',
    pageCount: 22,
  },
  {
    title: 'Cover 16',
    cover: 'linear-gradient(150deg, #2a3040 0%, #1a2030 100%)',
    coverImage: EXT_16,
    textColor: 'transparent',
    pageCount: 20,
  },
  {
    title: 'The Light\nWe Carry',
    cover: 'linear-gradient(150deg, #0e1a30 0%, #1a2a48 100%)',
    coverImage: '/book-10.png',
    textColor: 'transparent',
    pageCount: 19,
  },
  {
    title: 'Cover 17',
    cover: 'linear-gradient(150deg, #3a2a18 0%, #2a1a10 100%)',
    coverImage: EXT_17,
    textColor: 'transparent',
    pageCount: 24,
  },
  {
    title: 'The Bright\nBeyond',
    cover: 'linear-gradient(150deg, #0c1428 0%, #1a2040 100%)',
    coverImage: '/book-11.png',
    textColor: 'transparent',
    pageCount: 22,
  },
  {
    title: 'Cover 18',
    cover: 'linear-gradient(150deg, #1a2838 0%, #0e1828 100%)',
    coverImage: EXT_18,
    textColor: 'transparent',
    pageCount: 18,
  },
  {
    title: 'The Spaces\nBetween',
    cover: 'linear-gradient(150deg, #c8b8a0 0%, #a89878 100%)',
    coverImage: '/book-12.png',
    textColor: 'transparent',
    pageCount: 15,
  },
  {
    title: 'Cover 19',
    cover: 'linear-gradient(150deg, #28201a 0%, #1a1410 100%)',
    coverImage: EXT_19,
    textColor: 'transparent',
    pageCount: 26,
  },
  {
    title: 'Sunshine and\nSecond Chances',
    cover: 'linear-gradient(150deg, #f5e6b8 0%, #e8c870 100%)',
    coverImage: '/book-13.png',
    textColor: 'transparent',
    pageCount: 20,
  },
  {
    title: 'Cover 20',
    cover: 'linear-gradient(150deg, #2a3828 0%, #1a2818 100%)',
    coverImage: EXT_20,
    textColor: 'transparent',
    pageCount: 22,
  },
  {
    title: 'The Archive\nReturns',
    cover: 'linear-gradient(150deg, #2a1a0e 0%, #3d2517 100%)',
    coverImage: '/book-1.png',
    textColor: 'transparent',
    pageCount: 18,
  },
  {
    title: 'Cover 21',
    cover: 'linear-gradient(150deg, #382a20 0%, #281a12 100%)',
    coverImage: EXT_21,
    textColor: 'transparent',
    pageCount: 14,
  },
  {
    title: 'Beyond the\nHorizon',
    cover: 'linear-gradient(150deg, #0c1428 0%, #1a2040 100%)',
    coverImage: '/book-11.png',
    textColor: 'transparent',
    pageCount: 24,
  },
  {
    title: 'Cover 22',
    cover: 'linear-gradient(150deg, #1a2028 0%, #101820 100%)',
    coverImage: EXT_22,
    textColor: 'transparent',
    pageCount: 28,
  },
  {
    title: 'Letters from\nthe Shore',
    cover: 'linear-gradient(150deg, #c8b8a0 0%, #a89878 100%)',
    coverImage: '/book-12.png',
    textColor: 'transparent',
    pageCount: 16,
  },
  {
    title: 'Cover 23',
    cover: 'linear-gradient(150deg, #302818 0%, #201810 100%)',
    coverImage: EXT_23,
    textColor: 'transparent',
    pageCount: 16,
  },
  {
    title: 'The Midnight\nLantern',
    cover: 'linear-gradient(150deg, #0e1a30 0%, #1a2a48 100%)',
    coverImage: '/book-10.png',
    textColor: 'transparent',
    pageCount: 26,
  },
  {
    title: 'Cover 24',
    cover: 'linear-gradient(150deg, #20282e 0%, #141c22 100%)',
    coverImage: EXT_24,
    textColor: 'transparent',
    pageCount: 19,
  },
  {
    title: 'Golden\nAfternoons',
    cover: 'linear-gradient(150deg, #f5e6b8 0%, #e8c870 100%)',
    coverImage: '/book-13.png',
    textColor: 'transparent',
    pageCount: 20,
  },
  {
    title: 'Echoes of\nthe Deep',
    cover: 'linear-gradient(150deg, #2a1a0e 0%, #3d2517 100%)',
    coverImage: '/book-1.png',
    textColor: 'transparent',
    pageCount: 30,
  },
];
