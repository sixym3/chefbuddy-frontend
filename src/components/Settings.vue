// components/Settings.vue
<template>
  <div>
    <h1>Settings</h1>
    <p>Adjust application preferences.</p>
    <v-switch label="Adjust Font Size" v-model="adjustFontSize"></v-switch>
  </div>
</template>

<script>

export default {
  components: {
    
  },
  data() {
    return {
      adjustFontSize: false,
    };
  },
};
</script>
