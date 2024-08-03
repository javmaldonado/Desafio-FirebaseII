import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import SignupView from "@/views/SignupView.vue";
import HomeView from "@/views/HomeView.vue";
import store from "@/store";

const routes = [

  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      isAuthRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


/* Protección de rutas => GUARDIAN */
router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.isAuthRequired)) {
    if (!store.state.loggedUser) {
      next("/"); //Te redirigo a la ruta raiz si no hay usuario logueado
    } else {
      next(); //Si en el estado global hay un usuario logueado, te envío a la ruta deseada
    }
  } else {
    next(); // si la ruta a la que voy, no tiene meta login, voy a esa ruta sin problemas
  }
});

export default router;