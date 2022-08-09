const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',

})

module.exports = withNextra({
  // distDir: "dist/pc"
  assetPrefix: "/purpleheart-front-end-docs", //加前缀
  basePath: "/purpleheart-front-end-docs", //node
})
