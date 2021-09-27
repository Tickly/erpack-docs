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
      {
        title:'风格指南',
        children:[
          '/style-guide/CRUD-common',
          '/style-guide/business-component',
        ]
      },
      'FAQ',
    ]
  }
}