<template>
  <div>
    <div>
      <md-button class="md-primary" v-on:click="marketPage">Home</md-button>
      <md-button class="md-accent" v-on:click="accountPage">Account</md-button>
      <md-button class="md-accent" v-on:click="otherPage">Other Tabs</md-button>
      <md-badge class="md-primary" md-content="12">
        <md-avatar>
          <img src="https://placeimg.com/40/40/people/1" alt="Avatar" />
        </md-avatar>
      </md-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: "Regular",
  methods: {
    marketPage() {
      this.$router.push("market-place");
    },
    accountPage() {
      this.$router.push("account");
    },
    otherPage() {
      this.$router.push("othertabs");
    }
  }
};
</script>
