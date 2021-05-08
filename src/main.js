import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

// layouts

import Admin from "@/layouts/Admin.vue";
import ProductLay from "@/layouts/ProductLay.vue";

// views for Admin layout

import products from "@/views/admin/products.vue";
import Contact from "@/views/admin/Contact.vue";

import ViewProduct from "@/views/admin/ViewProduct.vue";

// views for apply layout
import Login from "@/views/apply/Login.vue";
import Register from "@/views/apply/Register.vue";
import Edit from "@/views/apply/EditProduct.vue";

// views without layouts
import Index from "@/views/Index.vue";

//TESTING
import Basket from "@/components/Cards/Basket.vue";
// routes

const routes = [
  {
    // admin layout
    path: "/admin",
    redirect: "/admin/contact",
    component: Admin,
    children: [
      {
        path: "/admin/contact",
        component: Contact,
      },

      {
        path: "/apply/login",
        component: Login,
      },
      {
        path: "/apply/register",
        component: Register,
      },

      {
        path: "/basket",
        component: Basket,
      },
      {
        path: "/apply/editproduct:id",
        name: Edit,
        component: Edit,
      },
      {
        path: "/admin/viewproduct/:id",
        name: ViewProduct,
        // props: true,
        component: ViewProduct,
      },
    ],
  },
  {
    path: "/productlay",
    redirect: "/productlay",
    component: ProductLay,
    children: [
      {
        path: "/productlay/products",
        component: products,
      },
    ],
  },

  {
    path: "/",
    component: Index,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .mount("#app");
