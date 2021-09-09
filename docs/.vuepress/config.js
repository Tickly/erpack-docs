module.exports = {
  base: '/erpack-docs/',
  themeConfig: {
    sidebar: [
      '/',
      'Model',
      {
        title: '组件',
        children: [
          '/components/Button',
          '/components/Descriptions',
          '/components/Table',
        ]
      },
      'FAQ',
    ]
  }
}