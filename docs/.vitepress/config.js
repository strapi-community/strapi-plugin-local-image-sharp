import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('../../package.json')

export default defineConfig({
  title: "Local Image Sharp",
  description: "Dynamically resize, format and optimize images based on url modifiers.",
  base: "/strapi-plugin-local-image-sharp/",
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/strapi-community/strapi-plugin-local-image-sharp' },
    ],
    editLink: {
      pattern: 'https://github.com/strapi-community/strapi-plugin-local-image-sharp/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    logo: {
      src: "/icon.png",
    },
    outline: [2,3],
    footer: {
      message: 'Made with ❤️ by <a href="https://github.com/strapi-community/">Strapi Community</a>'
    },
    nav: [
      {
        text: "Guide",
        link: "/guide/", 
        activeMatch: '/guide/',
      },
      {
        text: pkg.version,
        items: [
          {
            text: 'Changelog',
            link: 'https://github.com/strapi-community/strapi-plugin-local-image-sharp/blob/main/CHANGELOG.md'
          },
          {
            text: 'Strapi Community',
            link: 'https://github.com/strapi-community'
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          items: [
            { text: 'Quick Start Guide', link: '/guide/' },
            { text: 'Modifiers', link: '/guide/modifiers' },
          ]
        },
      ],
    }
  }
})
