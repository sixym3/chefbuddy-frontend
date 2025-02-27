// components/RecipeSearch.vue
<template>
  <div>
    <h1>Recipe Search</h1>
    <p>Input a recipe URL to scrape and save it to your database.</p>
    <input type="text" v-model="recipeUrl" placeholder="Recipe URL" />
    <button @click="submitScrape">Submit</button>
    <h1>Recipe Synthesize</h1>
    <p>Input what kind of recipe you would like.</p>
    <input type="text" v-model="synthesizeInput" placeholder="Prompt" />
    <button @click="submitSynthesize">Submit</button>
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
      synthesizeInput: '',
    };
  },
  methods: {
    async submitScrape() {
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
    async submitSynthesize() {
      const prompt = this.synthesizeInput.trim();
      console.log('Submitting prompt for recipe synthesis:', prompt);
      
      if (!prompt) {
        alert('Please enter a valid prompt.');
        return;
      }

      try {
        // Add these headers to ensure JSON is being sent
        const config = {
          headers: {
            'Content-Type': 'application/json',
          }
        };

        // Log the exact payload we're sending
        const payload = { input: prompt };
        console.log('Sending payload:', payload);

        const response = await axios.post(
          'http://localhost:3000/api/recipes/synthesize', 
          payload,
          config
        );

        // Log the full response
        console.log('Full response:', response);
        
        alert('Recipe generated successfully!');
        this.synthesizeInput = ''; 
        console.log('Generated recipe:', response.data);
      } catch (error) {
        // More detailed error logging
        console.error('Full error object:', error);
        console.error('Response data:', error.response?.data);
        console.error('Response status:', error.response?.status);
        
        const errorMessage = error.response?.data?.message || error.message || 'Unknown error occurred';
        alert(`Failed to generate recipe: ${errorMessage}`);
      }
    },
  },
};
</script>