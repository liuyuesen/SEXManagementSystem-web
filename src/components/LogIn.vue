<template>
  <div id = 'div1'>
    <h1>登录系统</h1>
    <div id="div2">
      <h2>账户</h2>
      <input v-model="acc" placeholder="edit me"/>
    </div>
    <div id="div3">
      <h2>密码</h2>
      <input v-model="pass"/>
      <button @click="login()">
        提交
      </button>
      <p>{{message}}</p>
    </div>

  </div>
</template>

<!--<script src="vue.js"></script>-->
<!--<script src="vue-resource.js"></script>-->
<script >
export default {
  name: 'first',
  data() {
    return {
      message: '1',
      acc: '',
      pass: ''
    }
  },
  // mounted:function () {
  //   this.test();
  // },

  methods: {
    test () {
      this.$axios.get('http://localhost:9090/test')
        .then((responce) => {
          console.log((responce.data))
          this.message = responce.data;
        }).catch(function (error) {
        console.log(error)
      })
    },
    login () {
      var acc;
      this.$axios.post('http://localhost:9090/login',{
        id: this.acc,
        passwords:this.pass
      })
        .then((responce) => {
          console.log((responce.data))
          this.message = responce.data;
        }).catch(function (error) {
        console.log(error)
      })
    }



  }

};
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
  color: #42b983;
}

#div2{
    display: flex;
  justify-content: center;
  }
#div3{
  display: flex;
  justify-content: center;
}
</style>
