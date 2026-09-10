export const faqsData: Faq[] = [
  {
    id: 1,
    question: 'What is Apex Order?',
    answer:
      'Apex Order is an NFT Dao Project with the visionary mission to create a new world order completely on the blockchain, were all the holders of at least 1 of our pass can have access to the best environment, utilities and services in the real world. The core of our environment is personal growth & education and financial knowledge.',
  },
  {
    id: 2,
    question: 'How can I get an NFT Apex Pass?',
    answer:
      'The mint is not available at the moment and the only way you can have our NFTs is to purchase them from somebody of the community willing to sell it. You can find the collection on centher.io',
  },
  {
    id: 3,
    question: 'What advantages do I have by owning more than one NFT?',
    answer:
      'The more NFTs you have, the more power of vote you have in the DAO. Also owning more NFTs gives you the opportunity to receive early access to utilities and to updates',
  },
  {
    id: 4,
    question: 'What changes in the rarity of the NFT?',
    answer:
      'There are 3 tier: Common, Super Rare and Legendary. Each one has a different power of vote, Common (x1), Super Rare (x4) and Legendary (x8). Also the rarity can allow you early access to utilities, services and special treatments at events',
  },
  {
    id: 5,
    question: 'On which network are the NFTs?',
    answer: 'The Apex Order Pass are on BSC Network',
  },
]

export type Faq = {
  id: number
  question: string
  answer: string
}
