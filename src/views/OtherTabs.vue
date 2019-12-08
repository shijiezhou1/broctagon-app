<template>
  <div class="otherItems">
    <Navlist />
    <md-list>
      <md-list-item>
        <md-icon>home</md-icon>
        <span class="md-list-item-text spanLink">Contact Us</span>
      </md-list-item>

      <md-list-item>
        <md-icon>info</md-icon>
        <span class="md-list-item-text spanLink">Location</span>
      </md-list-item>

      <md-list-item>
        <md-icon>build</md-icon>
        <span class="md-list-item-text spanLink">Settings</span>
      </md-list-item>

      <md-list-item>
        <md-icon>shield</md-icon>
        <span class="md-list-item-text spanLink">Order</span>
      </md-list-item>

      <md-list-item>
        <md-icon>book</md-icon>
        <span class="md-list-item-text spanLink">Help</span>
      </md-list-item>

      <md-list-item>
        <md-icon>backup</md-icon>
        <span class="md-list-item-text spanLink">Custome Report</span>
      </md-list-item>

      <md-list-item>
        <md-icon>class</md-icon>
        <span class="md-list-item-text spanLink">Feedback</span>
      </md-list-item>

      <md-list-item>
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text spanLink">Dashboard</span>
      </md-list-item>

      <md-list-item>
        <md-icon>send</md-icon>
        <span class="md-list-item-text spanLink">Sent Mail</span>
      </md-list-item>

      <md-list-item>
        <md-icon>delete</md-icon>
        <span class="md-list-item-text spanLink">Trash</span>
      </md-list-item>

      <md-list-item>
        <md-icon>error</md-icon>
        <span class="md-list-item-text spanLink">Spam</span>
      </md-list-item>
    </md-list>
  </div>
</template>
<script>
import Navlist from "../components/navlist.vue";

export default {
  components: {
    Navlist
  }
};
</script>

<style lang="css" scoped>
.otherItems {
  margin: auto;
  width: 350px;
  height: 100px;
  vertical-align: middle;
}
.spanLink {
  cursor: pointer;
}
.spanLink:hover {
  color: blue;
}
</style>
