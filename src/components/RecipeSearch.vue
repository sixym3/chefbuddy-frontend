// components/RecipeSearch.vue
<template>
  <div>
    <h1>Recipe Search</h1>
    <p>Input a recipe URL to scrape and save it to your database.</p>
    <input type="text" v-model="recipeUrl" placeholder="Recipe URL" />
    <button @click="submitRecipe">Submit</button>
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
      recipeUrl: '',
    };
  },
  methods: {
    submitRecipe() {
      console.log('Submitting recipe:', this.recipeUrl);
      // Add integration with backend API here
    },
  },
};
</script>