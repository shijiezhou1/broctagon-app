<template>
  <div class="accountItem">
    <Navlist />
    <h1>User Profile:</h1>
    <md-field>
      <label>Name</label>
      <md-input class="inputItem" v-model="name"></md-input>
    </md-field>

    <md-field :class="messageClass">
      <label>Birthday</label>
      <md-input class="inputItem" v-model="birthday"></md-input>
    </md-field>

    <md-field>
      <label>Age</label>
      <md-input class="inputItem" v-model="age"></md-input>
    </md-field>

    <md-field>
      <label>Education</label>
      <md-input class="inputItem" v-model="education"></md-input>
    </md-field>

    <div class="textareaItem">
      <md-field>
        <label>About Me</label>
        <md-textarea v-model="aboutme" md-counter="120"></md-textarea>
      </md-field>
    </div>
  </div>
</template>

<script>
import Navlist from "../components/navlist.vue";
export default {
  components: {
    Navlist
  },
  name: "ErrorsMessages",
  data: () => ({
    name: "Alex",
    birthday: "1991-01-01",
    age: 40,
    education: "Bachelor Degree",
    aboutme:
      "Got a Ph.D. looking for dark matter, but not finding any. Now I code full-time. Je parle un peu français. dogs > cats"
  })
};
</script>

<style lang="css">
.accountItem {
  margin: auto;
  width: 350px;
  height: 100px;
  vertical-align: middle;
}
.inputItem {
  border-bottom: 1px solid lightgray !important;
}
.textareaItem {
  border: 1px solid lightgray !important;
}
</style>
