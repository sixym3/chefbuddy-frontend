// components/Settings.vue
<template>
  <div>
    <h1>Settings</h1>
    <p>Adjust application preferences.</p>
    <v-switch label="Adjust Font Size" v-model="adjustFontSize"></v-switch>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      adjustFontSize: false,
    };
  },
};
</script>
