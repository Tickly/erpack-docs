<script>
export default {
  data() {
    return {
      limit: 3,
    };
  },
  computed: {
    columns() {
      return [
        "#",
        {
          type: "action",
          limit: this.limit,
          buttons: [
            {
              text: "查看",
              visible({ id }) {
                return id > 1;
              },
            },
            { text: "编辑" },
            {
              text: "删除",
              confirm: "确定删除？",
              click() {
                console.log("已删除");
              },
            },
            {
              text: "启用",
              confirm: "确定启用？",
              click() {
                console.log("已启用");
              },
            },
            { text: "禁用" },
          ],
        },
      ];
    },
  },
  render(h) {
    const source = [{ id: 1 }, { id: 2 }, { id: 3 }];

    return (
      <div>
        <erp-form layout="inline">
          <erp-form-item label="按钮数量">
            <a-input-number vModel={this.limit} />
          </erp-form-item>
        </erp-form>
        <erp-table row-key="id" columns={this.columns} data-source={source} />
      </div>
    );
  },
};
</script>