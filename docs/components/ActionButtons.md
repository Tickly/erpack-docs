# ActionButtons 操作按钮

## ActionButtons 参数

| 参数         | 类型      | 默认值 | 说明                                                                                          |
| ------------ | --------- | ------ | --------------------------------------------------------------------------------------------- |
| buttons      | `Array`   | []     | 按钮列表，详细配置见下文                                                                      |
| limit        | `Number`  | 0      | 定义一个数字，表示当超过几个按钮后，将剩余的按钮放到【更多】下拉菜单中。设置为 0 表示全部展示 |
| show-divider | `Boolean` | true   | 是否在按钮之间显示分割线                                                                      |

## Button 配置

| 参数    | 类型               | 默认值 | 说明                                                                                |
| ------- | ------------------ | ------ | ----------------------------------------------------------------------------------- |
| text    | `string`           | -      | 按钮文本                                                                            |
| click   | `Function`         | -      | 点击事件                                                                            |
| visible | `Boolean|Function` | -      | 控制按钮是否可见的回调，返回 true 即表示按钮可见。                                  |
| confirm | `string`           | -      | 确认提示，如果设置了该值，点击按钮会弹出一个确认框，点击确定之后才会触发 click 事件 |

## 示例
::: code-example action-buttons/demo.vue
:::
