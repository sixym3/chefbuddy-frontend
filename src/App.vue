<!-- App.vue -->
<template>
    <v-app>
      <v-row class="ma-0 justify-space-around">
        <v-col v-for="item in navItems" :key="item.route" cols="auto" class="text-center pa-2">
          <RouterLink :to="item.route">{{ item.name }}</RouterLink>
        </v-col>
      </v-row>
      <v-main>
        <router-view />
      </v-main>
    </v-app>
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
  