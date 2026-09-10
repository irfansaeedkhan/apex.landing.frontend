export type teamDataType = {
  id: number
  name: string
  role: string
  image: string
  country_code: string
  list: string[]
}

export const teamData: teamDataType[] = [
  {
    id: 0,
    name: 'Mattia Ingenito',
    role: 'Blockchain Tech Lead',
    image: '/images/mattia.webp',
    country_code: 'IT',
    list: [
      'Decentralised Metaverse Expert',
      'Live content creator for Binance AMA and X space',
      'Public Relations Manager for web3',
      'Architect of the Blockchain, Smart Contracts have no secrets for him',
    ],
  },
  {
    id: 1,
    name: 'Lorenzo Campo',
    role: 'Chief Marketing Officer',
    image: '/images/lorenzo-campo.webp',
    country_code: 'IT',
    list: [
      'Lorenzo Campo is a Blockchain and NFTs Expert, with a deep knowledge of Online Marketing.',
      'Expert in Tokenomics and Vesting contract management',
      'Analyst of compliance protocols within whitepapers',
      'Head of the R&D department for new technologies',
    ],
  },
  {
    id: 2,
    name: 'Marco Riccardi',
    role: 'Chief Vision Officer',
    image: '/images/marco-riccardi.webp',
    country_code: 'IT',
    list: [
      'Top 25 Networker in Europe',
      'Trainer and communication expert',
      'He guides web3 companies to achieve leadership through a clear vision',
    ],
  },
  {
    id: 3,
    name: 'Andrea Vento',
    role: 'Advisor for Tourism in the Metaverse',
    image: '/images/andrea-venti.webp',
    country_code: 'IT',
    list: [
      'Andrea Vento is CEO and Founder of Andrea Vento Viaggi',
      'Travel agency and tour operator',
      'With over 10 years of experience in the art of creating unforgettable travel experiences.',
    ],
  },
]
