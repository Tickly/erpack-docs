# 重新设计表格列的配置

> 思路参考自 [Yii GridView](https://www.yiiframework.com/doc/guide/2.0/zh-cn/output-data-widgets#grid-view)

## 背景

相信你肯定遇到过这样的需求

- 时间需要格式化展示，有的精确到天，有的精确到秒。
- 数字要有千分位分隔符，或者保留几位小数。

针对这些常见需求，为了简化写法，特地将列的配置进行了一次封装，省得每次去写`customRender`。

## 新的写法

<table-column />
<<< @/docs/.vuepress/components/table/column.vue

## SerialColumn 序号列

通常表格的开头都会放一个序号列表，来告诉你当前是多少行。可以直接写一个`#`快速展示。

```js
const columns = [
  // 直接写一个#，表示这是一个序号列
  "#",
  // 相当于下面这样的写法
  {
    type: "serial",
    // title 默认为“序号”，也可以重写。
    title: "顺序",
  },
];
```

## TextColumn 文本列

默认的列类型，将数据原样展示。

```js
const columns = [
  // 直接写字段名称
  "name",
  // 相当于下面这样的写法
  {
    // 可省略type，默认就是text
    // type: "text",
    dataIndex: "name",
  },
];
```

## DateColumn 时间列

一般时间都需要格式化展示，相比于写`customRender`，还是直接指定`format`更方便。

使用[moment.js](https://momentjs.com/docs/#/displaying/format/)作为时间格式化工具。

```js
const columns = [
  {
    // 指定该列为日期列
    type: "date",
    dataIndex: "created_at",
    // 可以快速设置时间格式，格式化使用 moment.js
    format: "YYYY-MM-DD",
  },
];
```

## NumberColumn 数字列

数字的展示，最常见的就是千分位分割了，不然数值比较大的时候，很难一眼看个大概。

使用[numeral.js](http://numeraljs.com/#format)作为数字格式化工具。

```js
const columns = [
  {
    // 指定该列为数字列
    type: "number",
    dataIndex: "balance",
    // 可以快速设置数字格式，格式化使用 numeral.js
    format: "0,0.00",
  },
];
```

## TagColumn 标签列

```js
const columns = [
  {
    type: "tag",
    dataIndex: "tags",
    // 如果字段的值是字符串，或者字符串数组，那么无需设置tags
    // 如果字段的值是对象，或者对象数组，那么需要设置tags
    // 传入字符串，表示属性名称，会把对象的该属性显示出来
    text: "label",
    // 传入函数
    text: (tag) => tag.label,
    // 标签的颜色
    // 传入字符串，所有的标签将使用此颜色
    // 传入函数，可以根据当前标签的文本，返回不同的颜色。
    color: "red",
    color: (tag) => {
      return tag.length > 5 ? "red" : "blue";
    },
  },
];
```

### 示例

<table-tag-column />
<<< @/docs/.vuepress/components/table/tag-column.vue

## ActionColumn 操作列

> 参考菜单 操作列



## 扩展自定义列类型

当你发现，项目中有好几个地方，同样的列写了相同的`customRender`，这时候你就得考虑一下自己扩展一个列类型了。
