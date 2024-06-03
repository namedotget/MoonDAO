import {
  BuildingLibraryIcon,
  FolderIcon,
  PlusIcon,
  RocketLaunchIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline'

export const navigation = [
  {
    name: 'Join MoonDAO',
    href: '/join',
    icon: PlusIcon,
  },
  {
    name: 'Info',
    icon: FolderIcon,
    href: '/info',
    children: [
      { name: 'News', href: '/news' },
      { name: 'About', href: '/about' },
      {
        name: 'Constitution',
        href: 'https://docs.moondao.com/Governance/Constitution',
      },
      { name: 'Events', href: '/events' },
      { name: 'Analytics', href: '/analytics' },
    ],
  },
  {
    name: 'Directory',
    href: '/directory?type=all',
    icon: Squares2X2Icon,
    children: [
      {
        name: 'Entities',
        href: '/directory?type=entities',
      },
      {
        name: 'Citizens',
        href: '/directory?type=citizens',
      },
    ],
  },
  {
    name: 'Governance',
    icon: BuildingLibraryIcon,
    href: '/governance',
    children: [
      { name: 'Tokens' },
      {
        name: 'Get $MOONEY',
        href: 'https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x20d4DB1946859E2Adb0e5ACC2eac58047aD41395&chain=mainnet',
      },
      { name: 'Lock $MOONEY', href: '/lock' },
      { name: 'Proposals' },
      {
        name: 'Submit Proposal',
        href: 'https://discord.com/channels/914720248140279868/1027658256706961509',
      },
      {
        name: 'Vote',
        href: 'https://snapshot.org/#/tomoondao.eth',
      },
    ],
  },
  {
    name: 'Marketplace',
    icon: RocketLaunchIcon,
    href: '/marketplace',
    children: [
      { name: 'Ticket to Space 🚀', href: '/sweepstakes' },
      { name: 'Zero Gravity', href: '/zero-gravity' },
      { name: 'LifeShip', href: '/lifeship' },
      // {
      //   name: 'MoonDAO Shields',
      //   href: '/marketplace/collection/0xE71f58663f80b61f5D127D9DE9d554ca66dED5f1',
      //   dynamicHref: '/marketplace/collection/[contractAddress]',
      // },
    ],
  },
]
