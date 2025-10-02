import { defineConfig } from 'vitepress'
import { xMain } from '../data/main'


export default defineConfig({
  title: xMain.siteName,
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: xMain.logoSrc }]],

  themeConfig: {
    siteTitle: xMain.siteName,
    logo: xMain.logoSrc,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'boke', link: '/repo/boke/00 简述' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
