# 风格指南

## Render First

常规单文件组件很难去复用，推荐全部使用渲染函数去完成组件的编写。

## 复用场景

拿下拉组件来举例，可能有点啰嗦。


比如我们用户管理模块，在`查询页面`，有角色，部门的查询项，都是下拉组件，下拉选项都是从接口获取的数据。

那么常规写法就是在页面写两个变量`roleOptions`,`deptOptions`，然后再写两个调用接口获取数据并赋值到对应变量的方法。最后在模板代码中遍历出来。

```vue
<template>
  <div>
    <a-select v-model="searchForm.role">
      <a-select-option v-for="item in roleOptions" :value="item.value">
        {{ item.text }}
      </a-select-option>
    </a-select>
    <a-select v-model="searchForm.dept">
      <a-select-option v-for="item in deptOptions" :value="item.value">
        {{ item.text }}
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchForm: {
        role: "",
        dept: "",
      },
      roleOptions: [],
      deptOptions: [],
    };
  },
  created() {
    this.getRoles();
    this.getDepts();
  },
  methods: {
    async getRoles() {
      this.roleOptions = await ajax("xxx");
    },
    async getDepts() {
      this.deptOptions = await ajax("xxx");
    },
  },
};
</script>
```

---

好的，开发完`查询页面`，我们要开发`新增页面`了。  
那这个页面同样的，也有角色下拉，部门下拉。难道你要把`查询页面`的代码抄过来吗？

这时候你开始考虑到要封装组件了，把这两个下拉封装成组件，页面上直接拿来用。

---
于是，你可能会新建一个`RoleSelect.vue`的文件，然后写出如下代码。

```vue
<template>
  <a-select :value="value" @change="handleChange">
    <a-select-option v-for="item in options" :value="item.value">
      {{ item.text }}
    </a-select-option>
  </a-select>
</template>
<script>
export default {
  name: "RoleSelect",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: String,
  },
  data() {
    return {
      options: [],
    };
  },
  async created() {
    this.options = await ajax("xxx");
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e);
    },
  },
};
</script>
```

> 代码手写的未经测试，写个大概意思就好。

---

写完一个组件之后，就可以把`查询页面`的代码修改一下啦。

```vue
<template>
  <div>
    <role-select v-model="searchForm.role" />
    <a-select v-model="searchForm.dept">
      <a-select-option v-for="item in deptOptions" :value="item.value">
        {{ item.text }}
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
import RoleSelect from "@/components/RoleSelect";
export default {
  components: { RoleSelect },
  data() {
    return {
      searchForm: {
        role: "",
        dept: "",
      },
      deptOptions: [],
    };
  },
  created() {
    this.getDepts();
  },
  methods: {
    async getDepts() {
      this.deptOptions = await ajax("xxx");
    },
  },
};
</script>
```

同样的，部门下拉也走一遍流程。

`DeptSelect.vue`

```vue
<template>
  <a-select :value="value" @change="handleChange">
    <a-select-option v-for="item in options" :value="item.value">
      {{ item.text }}
    </a-select-option>
  </a-select>
</template>
<script>
export default {
  name: "DeptSelect",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    value: String,
  },
  data() {
    return {
      options: [],
    };
  },
  async created() {
    this.options = await ajax("xxx");
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e);
    },
  },
};
</script>
```

然后你的`查询页面`变得更简单清晰了。

```vue
<template>
  <div>
    <role-select v-model="searchForm.role" />
    <dept-select v-model="searchForm.dept" />
  </div>
</template>
<script>
import RoleSelect from "@/components/RoleSelect";
import DeptSelect from "@/components/DeptSelect";
export default {
  components: { RoleSelect, DeptSelect },
  data() {
    return {
      searchForm: {
        role: "",
        dept: "",
      },
    };
  },
};
</script>
```

然后`新增页面`里，也无需去构造下拉选项这些与业务流程无关的逻辑了，组件内部自己实现了，拿来就用。


---

到这一步的时候，也许你会发现，封装的这两个下拉组件，逻辑几乎一毛一样，区别可能就在获取数据的接口不同。   
那有没有什么办法，再封装一下呢？如果以后还有类似的组件需要封装，能不能更加快速的就写出来一个了呢？

>编了半天发现编不出来一个原因为什么一定要用渲染函数。