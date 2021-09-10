# Table 表格

## 基本用法
<table-basic-usage />
<<< @/docs/.vuepress/components/table/basic-usage.vue

## 单元格自动省略
<table-ellipsis-column />
<<< @/docs/.vuepress/components/table/ellipsis-column.vue


## columns
对列的配置进行了一层封装，更加的方便使用。

重新定义了列的概念，将列定义成了以下几种类型。

- serial 序号列
- text 常规的文本列
- date 日期列，可以快速设置日期格式。
- number 数字列，支持千分位分隔符

支持扩展列


<table-column />

<<< @/docs/.vuepress/components/table/column.vue