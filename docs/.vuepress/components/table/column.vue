<script>
export default {
  data () {
    return {
      columns: [
        '#',
        { dataIndex: 'name', title: '用户名' },
        { type: 'date', dataIndex: 'created_at', title: '创建时间' },
        { type: 'number', dataIndex: 'balance', title: '微信余额' },
      ],
      source: [
        { name: '张三', created_at: Date.now(), balance: 12345, },
        { name: '李四', created_at: Date.now(), balance: 1.03 },
      ]
    }
  },
  render () {
    return <erp-table
      rowKey="name"
      dataSource={this.source}
      columns={this.columns}
    />
  }
}
</script>