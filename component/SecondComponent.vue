<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ prop1  }}, {{prop2}}, {{prop3}}</p>
  </div>
</template>

<script>
export default {
  name: 'SecondComponent',
  props: [
    'prop1',
    'prop2',
    'prop3'
  ],
  data () {
    return {
      msg: 'This is the second vue component wrapped by vue-custom-element'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #668bdb;
}
</style>
