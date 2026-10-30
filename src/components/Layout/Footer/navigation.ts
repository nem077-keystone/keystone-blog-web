import type { NavigationGroup, SocialLink } from '../shared/types'

const MAIN_SITE = 'https://keyst.one'

export const footerGroups: NavigationGroup[] = [
  {
    id: 'keystone',
    label: 'Keystone',
    items: [
      {
        id: 'nexus-apple',
        label: 'Keystone Nexus for iOS',
        href: 'https://apps.apple.com/app/keystone-nexus/id6742313403',
        target: '_blank',
      },
      {
        id: 'nexus-google',
        label: 'Keystone Nexus for Android',
        href: 'https://play.google.com/store/apps/details?id=com.keystone.wallet',
        target: '_blank',
      },
      {
        id: 'companion',
        label: 'Gen 2 companion app',
        href: `${MAIN_SITE}/contents/KeystoneMobile/keystone_v1.4.0_26.apk`,
        target: '_blank',
      },
      { id: 'btc-only', label: 'BTC-only firmware', href: `${MAIN_SITE}/btc-only` },
      { id: 'blog', label: 'Blog', href: '/' },
      { id: 'privacy-promises', label: 'Privacy promises', href: `${MAIN_SITE}/privacy-promises` },
      { id: 'support', label: 'Support', href: 'https://support.keyst.one', target: '_blank' },
      { id: 'roadmap', label: 'Roadmap', href: `${MAIN_SITE}/roadmap` },
      {
        id: 'suggest-assets',
        label: 'Suggest a wallet or asset',
        href: 'https://docs.google.com/forms/d/e/1FAIpQLSeaUn_GxkxNzNEeKx5s9CQFtB3YDW_Twmf0rARqeJVsUV2QlQ/viewform?usp=sf_link',
        target: '_blank',
      },
      { id: 'nft', label: 'NFT lock screen', href: `${MAIN_SITE}/nft` },
      { id: 'github', label: 'GitHub', href: 'https://github.com/KeystoneHQ', target: '_blank' },
      {
        id: 'ens-database',
        label: 'ENS database',
        href: 'https://github.com/KeystoneHQ/ENS-meta-repo/releases',
        target: '_blank',
      },
      {
        id: 'abi-pack',
        label: 'ABI pack',
        href: 'https://github.com/KeystoneHQ/Smart-Contract-Metadata-Registry/releases',
        target: '_blank',
      },
    ],
  },
  {
    id: 'legal',
    label: 'Legal',
    items: [
      { id: 'sales-terms', label: 'Sales Terms & Conditions', href: `${MAIN_SITE}/sales-terms-and-conditions` },
      { id: 'website-terms', label: 'Website Terms of Use', href: `${MAIN_SITE}/website-terms-of-use` },
      { id: 'app-terms', label: 'Keystone Terms of Use', href: `${MAIN_SITE}/keystone-terms-of-use` },
      { id: 'privacy-policy', label: 'Privacy Policy', href: `${MAIN_SITE}/privacy-policy` },
      { id: 'cookie-policy', label: 'Cookie Policy', href: `${MAIN_SITE}/cookie-policy` },
      { id: 'shipping-policy', label: 'Shipping Policy', href: `${MAIN_SITE}/shipping-policy` },
      { id: 'refund-policy', label: 'Refund Policy', href: `${MAIN_SITE}/refund-policy` },
    ],
  },
  {
    id: 'partnerships',
    label: 'Partnerships',
    items: [
      { id: 'resellers', label: 'Resellers', href: `${MAIN_SITE}/resellers` },
      { id: 'affiliates', label: 'Affiliates', href: `${MAIN_SITE}/affiliates` },
      { id: 'bounty', label: 'Bug bounty program', href: `${MAIN_SITE}/bug-bounty-program` },
      {
        id: 'media-kit',
        label: 'Media kit',
        href: 'https://drive.google.com/drive/folders/1MqffY73AbWE3ItSE6s_YP8SD7k1Gbz8r',
        target: '_blank',
      },
      { id: 'metamask', label: 'MetaMask', href: `${MAIN_SITE}/metamask` },
    ],
  },
]

export const socialLinks: SocialLink[] = [
  {
    id: 'discord',
    label: 'Discord',
    href: `${MAIN_SITE}/discord`,
    icon: '/layout/footer/social/discord.png',
    activeIcon: '/layout/footer/social/discord-active.png',
  },
  {
    id: 'x',
    label: 'X',
    href: 'https://twitter.com/KeystoneWallet',
    icon: '/layout/footer/social/x.png',
    activeIcon: '/layout/footer/social/x-active.png',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCaReIdawwYPPcyWGoNunF7g',
    icon: '/layout/footer/social/youtube.png',
    activeIcon: '/layout/footer/social/youtube-active.png',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    href: 'https://t.me/KeystoneWallet',
    icon: '/layout/footer/social/telegram.png',
    activeIcon: '/layout/footer/social/telegram-active.png',
  },
  {
    id: 'reddit',
    label: 'Reddit',
    href: 'https://www.reddit.com/r/KeystoneWallet/',
    icon: '/layout/footer/social/reddit.png',
    activeIcon: '/layout/footer/social/reddit-active.png',
  },
  {
    id: 'jike',
    label: 'Jike',
    href: 'https://web.okjike.com/u/370FC219-7DFC-4774-BC01-3AE19347D1E7',
    icon: '/layout/footer/social/jike.png',
    activeIcon: '/layout/footer/social/jike-active.png',
  },
  {
    id: 'warpcast',
    label: 'Warpcast',
    href: 'https://warpcast.com/keystonewallet',
    icon: '/layout/footer/social/warpcast.png',
    activeIcon: '/layout/footer/social/warpcast-active.png',
  },
  {
    id: 'primal',
    label: 'Primal',
    href: 'https://primal.net/p/npub16s4cnphx2k7ndmlt9qmurkdrrulcammg3jxnz0f9c7dhepqg38zqpp4p24',
    icon: '/layout/footer/social/primal.png',
    activeIcon: '/layout/footer/social/primal-active.png',
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/people/Keystone-Wallet/61558817937104/',
    icon: '/layout/footer/social/facebook.png',
    activeIcon: '/layout/footer/social/facebook-active.png',
  },
]

export const footerUtilityLinks = {
  shipping: `${MAIN_SITE}/shipping-regions`,
  tracking: 'https://shop.keyst.one/apps/17TRACK',
} as const

export const contactLinks = [
  { id: 'support', label: 'Support team', href: 'mailto:support@keyst.one' },
  { id: 'collaborations', label: 'Business collaborations', href: 'mailto:affiliate@keyst.one' },
  {
    id: 'ticket',
    label: 'Raise a ticket',
    href: 'https://keystonewallet.atlassian.net/servicedesk/customer/portal/1',
  },
] as const
