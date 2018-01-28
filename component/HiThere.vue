<template>
  <div>
    <h4>{{ message }}</h4>

    <el-table :data="tableData">
      <el-table-column prop="prop" label="Prop name"></el-table-column>
      <el-table-column prop="value" label="Value"></el-table-column>
      <el-table-column prop="type" label="typeof"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    props: [
      'prop1',
      'prop2',
      'prop3',
      'longPropName'
    ],
    data() {
      return {
        message: 'Hello Vue-custom-element!'
      };
    },
    computed: {
      tableData() {
        return [{
          prop: 'prop1',
          value: this.prop1,
          type: typeof this.prop1
        }, {
          prop: 'prop2',
          value: this.prop2,
          type: typeof this.prop2
        }, {
          prop: 'prop3',
          value: this.prop3,
          type: typeof this.prop3
        }, {
          prop: 'long-prop-name',
          value: this.longPropName,
          type: typeof this.longPropName
        }];
      }
    },
    created() {
      console.info('demo-basic created()');
    }
  }
</script>