<script>
export default {
  render() {
    return (
      <div>
        <erp-button type="primary">primary</erp-button>
        <erp-button type="success">success</erp-button>
        <erp-button type="danger">danger</erp-button>
      </div>
    );
  },
};
</script>
<style>
.ant-btn + .ant-btn {
  margin-left: 1em;
}
</style>