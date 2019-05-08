<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="#"><b>图书馆</b>登录</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>
      <form action="/login" method="post">
        <div class="form-group has-feedback">
          <input type="text" name="userName" class="form-control" placeholder="name">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" name="password" class="form-control" placeholder="Password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <!--<div class="checkbox icheck">-->
            <!--<label>-->
            <!--<input type="checkbox"> Remember Me-->
            <!--</label>-->
            <!--</div>-->
            <!--<div class="form-group" >-->
            <select class="btn btn-warning" name="user_type">
              <option value="10">用户类型</option>
              <option value="0">学生</option>
              <option value="1">管理员</option>
            </select>
            <!--</div>-->
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat" >Sign In</button>
          </div>
        </div>
        <div class="col-lg-1" style="float: right;">

        </div>
      </form>
    </div>
    <!-- /.login-box-body -->
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
    }
  },
  mounted:function () {
    this.test();

  },


  methods: {
    test () {
      this.$axios.get('http://localhost:9090/test')
        .then((responce) => {
          console.log((responce.data))
          this.message = responce.data;
        }).catch(function (response) {
        console.log(response)
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
