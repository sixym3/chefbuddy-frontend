// router.js - Configure routes
import { createRouter, createWebHistory } from 'vue-router';
import RecipeSearch from '/src/components/RecipeSearch.vue';
import MyRecipes from '/src/components/MyRecipes.vue';
import MealCalendar from '/src/components/MealCalendar.vue';
import ShoppingList from '/src/components/ShoppingList.vue';
import Pantry from '/src/components/Pantry.vue';
import Settings from '/src/components/Settings.vue';

const routes = [
  { path: '/', redirect: '/recipe-search' },
  { path: '/recipe-search', component: RecipeSearch },
  { path: '/my-recipes', component: MyRecipes },
  { path: '/meal-calendar', component: MealCalendar },
  { path: '/shopping-list', component: ShoppingList },
  { path: '/pantry', component: Pantry },
  { path: '/settings', component: Settings },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;