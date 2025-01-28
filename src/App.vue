<!-- App.vue -->
<template>
    <div>
      <div class="ma-0 justify-space-around">
        <div v-for="item in navItems" :key="item.route" cols="auto" class="text-left pa-2 d-inline-block">
          <RouterLink :to="item.route">{{ item.name }}</RouterLink>
        </div>
      </div>
      <div>
        <router-view />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        navItems: [
          { name: 'Recipe Search', route: '/recipe-search' },
          { name: 'My Recipes', route: '/my-recipes' },
          { name: 'Meal Calendar', route: '/meal-calendar' },
          { name: 'Shopping List', route: '/shopping-list' },
          { name: 'Pantry', route: '/pantry' },
          { name: 'Settings', route: '/settings' },
        ],
      };
    },
  };
  </script>
  