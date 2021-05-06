<template>
  <nav
    class="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white shadow navbar-expand-lg"
  >
    <div
      class="container flex flex-wrap items-center justify-between px-4 mx-auto"
    >
      <div
        class="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start"
      >
        <router-link to="/">
          <a
            class="inline-block py-2 mr-4 text-sm font-bold leading-relaxed uppercase text-blueGray-700 whitespace-nowrap"
            href="#pablo"
          >
            KAIRONGTAO
          </a>
        </router-link>
        <button
          class="block px-3 py-1 text-xl leading-none bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
          type="button"
          v-on:click="setNavbarOpen"
        >
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div
        class="items-center flex-grow lg:flex"
        :class="[navbarOpen ? 'block' : 'hidden']"
        id="example-navbar-warning"
      >
        
        <ul class="flex flex-col list-none lg:flex-row lg:ml-auto">
          <li class="flex items-center">
            <index-dropdown />
          </li>
          <li class="flex items-center">
            <a
              class="flex items-center px-3 py-2 text-xs font-bold uppercase hover:text-blueGray-500 text-blueGray-700"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdemos.creative-tim.com%2Fvue-notus%2F%23%2F"
              target="_blank"
            >
              <i class="text-lg text-blueGray-800 fab fa-facebook leading-lg" />
              <span class="inline-block ml-2 lg:hidden">Share</span>
            </a>
          </li>

          <li class="flex items-center">
            <a
              class="flex items-center px-3 py-2 text-xs font-bold uppercase hover:text-blueGray-500 text-blueGray-700"
              href=""
              target="_blank"
            >
              <i class="text-lg text-blueGray-800 fab fa-twitter leading-lg" />
              <span class="inline-block ml-2 lg:hidden">Tweet</span>
            </a>
          </li>

          <li class="flex items-center">
            <a
              class="flex items-center px-3 py-2 text-xs font-bold uppercase hover:text-blueGray-500 text-blueGray-700"
              href="#"
              target="_blank"
            >
              <i class="text-lg text-blueGray-800 fab fa-github leading-lg" />
              <span class="inline-block ml-2 lg:hidden">Star</span>
            </a>
          </li>

          <router-link to="/apply/login" class="flex items-center">
            <button
              class="px-4 py-2 mt-2 mb-3 ml-3 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-black rounded shadow outline-none active:bg-blueGray-600 hover:shadow-lg focus:outline-none lg:mr-1 lg:mb-0"
              type="button"
            >
              login
            </button>
          </router-link>
           <router-link to="/basket" class="flex items-center mt-2 ml-1 text-center material-icons text-blueGray-800">shopping_bag</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";
// import User from "@/components/Dropdowns/ProflieDropdown.vue";
export default {
  data() {
    return {
      navbarOpen: false,
    };
  },
  methods: {
    setNavbarOpen: function() {
      this.navbarOpen = !this.navbarOpen;
     
    },
  },
  components: {
    IndexDropdown,
    // User
  },
};
</script>
<style scoped>
@media screen and (max-width: 640px) {
  .smallnav {
    overflow: flex;
  }
}
/* md:teblet */
@media screen and (max-width: 766px) {
  .smallnav {
    overflow: flex;
  }
}
/* lg */
@media screen and (max-width: 1024px) {
  /* .smallnav{
    overflow: flex;
  } */
}
</style>
