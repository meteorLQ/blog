const { getPosts, generatePaginationPages } = require('./theme/serverUtils')

async function config() {
    const pageSize = 10
    await generatePaginationPages(pageSize)
    return {
        title: '时刻准备着',
        base:'/blog',
        description: 'vitepress,blog,blog-theme',
        themeConfig: {
            posts: await getPosts(),
            pageSize: pageSize,
            website: 'https://github.com/shadowLQ/blog', //copyright link
            comment: {
                repo: 'shadowLQ/blog',
                themes: 'github-light',
                issueTerm: 'pathname'
            },
            nav: [
                { text: '主页', link: '/' },
                { text: '归档', link: '/pages/archives' },
                { text: '分类', link: '/pages/tags' },
                { text: '关于', link: '/pages/about' }
                // { text: 'Airene', link: 'http://airene.net' }  -- External link test
            ]
        },
        srcExclude: ['README.md'] // exclude the README.md , needn't to compiler
        /*
        vite: {
            build: { minify: false }
        },
        optimizeDeps: {
            keepNames: true
        }
        */
    }
}

module.exports = config()
