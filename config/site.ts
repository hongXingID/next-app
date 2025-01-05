export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: '小桃分享社',
  description: '分享生活、分享攻略、分享美好',
  navItems: [
    {
      label: '主页',
      href: '/',
    },
    {
      label: '线报',
      href: '/news',
    },
    {
      label: '搜索',
      href: '/search',
    },
  ],
  navMenuItems: [
    {
      label: '主页',
      href: '/',
    },
    {
      label: '搜索',
      href: '/search',
    },
  ],
  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
  ICP: {
    label: '粤ICP备2023129648号-2',
    url: 'https://beian.miit.gov.cn/',
  },
};
