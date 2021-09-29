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
          {
            title: 'Table 表格',
            children: [
              '/components/table/column-type',
              '/components/table/demo',
            ]
          }
        ]
      },
      {
        title: '风格指南',
        children: [
          '/style-guide/CRUD-common',
          '/style-guide/business-component',
        ]
      },
      'FAQ',
    ]
  }
}