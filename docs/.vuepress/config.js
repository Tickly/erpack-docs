module.exports = {
  base: '/erpack-docs/',
  themeConfig: {
    sidebar: [
      '/',
      'Model',
      {
        title: '布局组件',
        children: [
          '/layout/grid',
          '/layout/flex',
        ]
      },
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
          },
          {
            title: 'Form 表单',
            children: [
              '/components/form/',
            ]
          },
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