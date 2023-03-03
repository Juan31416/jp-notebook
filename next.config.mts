import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './src/theme.config.ts',
  staticImage: true,
  latex: true,
  flexsearch: {
    codeblocks: false
  }
})

export default withNextra({
  reactStrictMode: true
})