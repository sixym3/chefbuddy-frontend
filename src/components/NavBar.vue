// components/NavBar.vue
<template>
  <v-app-bar app color="grey lighten-4" flat>
    <v-toolbar-title class="primary--text font-weight-bold">
      <v-icon left>mdi-chef-hat</v-icon>
      Meal Planner
    </v-toolbar-title>
    <v-spacer></v-spacer>
    
    <!-- Desktop Navigation -->
    <div class="d-none d-md-flex">
      <v-btn
        v-for="(item, index) in navItems"
        :key="index"
        :to="item.route"
        text
        class="mx-2"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.name }}
      </v-btn>
    </div>

    <!-- Mobile Menu Icon -->
    <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer"></v-app-bar-nav-icon>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app temporary right>
      <v-list>
        <v-list-item
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.route"
          router
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      navItems: [
        { name: 'Recipe Search', route: '/recipe-search', icon: 'mdi-magnify' },
        { name: 'My Recipes', route: '/my-recipes', icon: 'mdi-book-open-variant' },
        { name: 'Meal Calendar', route: '/meal-calendar', icon: 'mdi-calendar' },
        { name: 'Shopping List', route: '/shopping-list', icon: 'mdi-cart' },
        { name: 'Pantry', route: '/pantry', icon: 'mdi-food-variant' },
        { name: 'Settings', route: '/settings', icon: 'mdi-cog' },
      ],
    };
  },
};
</script>