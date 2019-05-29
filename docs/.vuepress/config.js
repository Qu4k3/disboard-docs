module.exports = {
    title: 'Disboard.team Docs',
    description: 'Disboard documentation. Covers everything related to the disboard project, from the web and API reference to the coding and commands from the bot.',
    base: "/",
    themeConfig: {
        logo: 'https://cdn.discordapp.com/attachments/503303753705848838/561619188687568916/jibril_square.jpg',
        repo: 'Qu4k3/disboard-docs',
        repoLabel: 'Github',
        docsRepo: 'Qu4k3/disboard-docs',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: false,
        editLinkText: 'Hacer una modificación',
        nav: [
            { text: 'Docs', link: '/' },
            { text: 'API', link: '/api.html' },
            { text: 'Website', link: '/web.html' },
            { text: 'Bot', link: '/bot.html' },
          ],
        sidebar: {
            '/': [
                '',
                'api',
                'web',
                'bot'
            ]
        },
        displayAllHeaders: true,
        lastUpdated: 'Last Updated'
    },
    head: [
        ['link', { rel: "icon", href: "/favicon.ico" }]
      ]
  }
