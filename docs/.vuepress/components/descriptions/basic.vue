<script>
export default {
  data () {
    return {
      form: {
        username: 'Zhou Maomao',
        telephone: '1810000000',
        live: 'Hangzhou, Zhejiang',
        remark: 'empty',
        address: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
      }
    }
  },
  render () {
    const { form } = this

    return <div>
      <a-descriptions title="你好" bordered>
        <a-descriptions-item label="UserName">{form.username}</a-descriptions-item>
        <a-descriptions-item label="Telephone">{form.telephone}</a-descriptions-item>
        <a-descriptions-item label="Live">{form.live}</a-descriptions-item>
        <a-descriptions-item label="Remark">{form.remark}</a-descriptions-item>
        <a-descriptions-item label="Address">{form.address}</a-descriptions-item>
      </a-descriptions>

      <erp-descriptions
        title="你好"
        bordered
        form={form}
        items={[
          { prop: 'username', label: 'UserName' },
          { prop: 'telephone', label: 'Telephone' },
          { prop: 'live', label: 'Live' },
          { prop: 'remark', label: 'Remark' },
          { prop: 'address', label: 'Address' },
        ]}
      />


    </div>
  }
}
</script>