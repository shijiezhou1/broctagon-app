<template>
  <div>
    <Navlist />
    <h2>Sale Items:</h2>
    <Listitem />
  </div>
</template>

<script>
import Listitem from "../components/listitem.vue";
import Navlist from "../components/navlist.vue";

export default {
  components: {
    Listitem,
    Navlist
  }
};
</script>
