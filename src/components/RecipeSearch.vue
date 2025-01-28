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
import axios from 'axios';

export default {
  components: {
    
  },
  data() {
    return {
      recipeUrl: '',
    };
  },
  methods: {
    async submitRecipe() {
      console.log('Submitting recipe:', this.recipeUrl);
      if (!this.recipeUrl) {
        alert('Please enter a recipe URL.');
        return;
      }

      try {
        const response = await axios.post('http://localhost:3000/api/recipes/scrape', {
          url: this.recipeUrl,
        });

        console.log('Recipe added successfully:', response.data);
      } catch (error) {
        console.error('Error adding recipe:', error.response?.data || error.message);
        alert('Failed to add recipe. Please try again.');
      }
    },
  },
};
</script>