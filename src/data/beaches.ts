export interface Beach {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  vibe: string[];
  sandQuality: number; // 1-5
  hasSnorkeling: boolean;
  slug?: string;
}

export const beachesData: Beach[] = [
  {
    id: 'patong',
    name: 'Patong Beach',
    description: 'The most famous and lively beach in Phuket, known for its vibrant nightlife, water sports, and endless shopping.',
    imageUrl: '/images/beach-patong.png',
    vibe: ['Party', 'Lively', 'Crowded'],
    sandQuality: 3,
    hasSnorkeling: false,
    slug: 'patong-beach-guide',
  },
  {
    id: 'kata',
    name: 'Kata Beach',
    description: 'A beautiful crescent of white sand, popular with families and surfers, offering a great balance of amenities and scenery.',
    imageUrl: '/images/beach-kata.png',
    vibe: ['Family', 'Surfing', 'Relaxed'],
    sandQuality: 4,
    hasSnorkeling: true,
    slug: 'kata-beach-guide',
  },
  {
    id: 'bang-tao',
    name: 'Bang Tao Beach',
    description: 'One of the longest beaches on the island, home to the luxury Laguna Phuket complex and upscale beach clubs.',
    imageUrl: '/images/beach-bang-tao.png',
    vibe: ['Luxury', 'Quiet', 'Spacious'],
    sandQuality: 4,
    hasSnorkeling: false,
    slug: 'bang-tao-beach-guide',
  },
  {
    id: 'nai-harn',
    name: 'Nai Harn Beach',
    description: 'A local favorite in the south, nestled between green hills and offering clear waters perfect for swimming.',
    imageUrl: '/images/beach-nai-harn.png',
    vibe: ['Quiet', 'Local', 'Scenic'],
    sandQuality: 5,
    hasSnorkeling: true,
    slug: 'nai-harn-beach-guide',
  },
  {
    id: 'surin',
    name: 'Surin Beach',
    description: 'Known for its crystal clear turquoise waters and naturally beautiful setting, once a hub for high-end beach clubs.',
    imageUrl: '/images/beach-surin.png',
    vibe: ['Luxury', 'Sunset', 'Natural'],
    sandQuality: 5,
    hasSnorkeling: true,
    slug: 'surin-beach-guide',
  },
  {
    id: 'mai-khao',
    name: 'Mai Khao Beach',
    description: 'The longest beach in Phuket, part of a national park, where you can walk for miles in near-complete solitude.',
    imageUrl: '/images/beach-mai-khao.png',
    vibe: ['Quiet', 'Isolated', 'Nature'],
    sandQuality: 3,
    hasSnorkeling: false,
    slug: 'mai-khao-beach-guide',
  },
];
