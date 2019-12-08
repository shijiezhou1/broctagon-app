<template>
  <div class="loginItem">
    <h1>Login</h1>
    <md-field class="sd">
      <label>Username</label>
      <md-input class="inputItem" v-model="username"></md-input>
    </md-field>

    <md-field>
      <label>Password</label>
      <md-input class="inputItem" v-model="password"></md-input>
    </md-field>

    <md-button class="md-raised md-primary" v-on:click="login">Login</md-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.username != "" && this.password != "") {
        this.$router.push("market-place");
      } else {
        alert("Incorrect username and password!");
      }
    }
  }
};
</script>

<style lang="css" scoped>
.loginItem {
  margin: auto;
  width: 233px;
  height: 74px;
  vertical-align: middle;
}
.inputItem {
  border-bottom: 1px solid lightgrey !important;
}
</style>
