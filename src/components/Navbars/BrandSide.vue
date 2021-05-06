<template>
  <nav
    class="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-64"
  >
    <div
      class="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap"
    >
      <!-- Toggler -->
      <button
        class="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
        type="button"
        v-on:click="toggleCollapseShow('bg-white m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <router-link
        class="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
        to="/"
      >
        KAIRONGTAO
      </router-link>
      <!-- User -->
      <ul class="flex flex-wrap items-center list-none md:hidden">
        <li class="relative inline-block">
          <index-dropdown />
        </li>
        <li class="relative inline-block">
          <user-dropdown />
        </li>
      </ul>
      <!-- Collapse -->
      <div
        class="absolute top-0 left-0 right-0 z-40 items-center flex-1 h-auto overflow-x-hidden overflow-y-auto rounded shadow md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="block pb-4 mb-4 border-b border-solid md:min-w-full md:hidden border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
                to="/"
              >
                KAIRONGTAO
              </router-link>
            </div>
            <div class="flex justify-end w-6/12">
              <button
                type="button"
                class="px-3 py-1 text-xl leading-none text-black bg-transparent border border-transparent border-solid rounded opacity-50 cursor-pointer md:hidden"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
     
        
        <!-- Navigation -->
<h6
          class="block pt-1 pb-4 text-sm no-underline uppercase font-ligth md:min-w-full text-blueGray-500"
        >
          Brand
        </h6>
        <ul class="flex flex-col list-none md:flex-col md:min-w-full">
          <li class="items-center">
            <router-link
              to="#"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-thin uppercase"
                :class="[
                  isActive
                    ? 'text-blueGray-700 hover:text-blueGray-300'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                
                NIKE
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              to="#"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-thin uppercase"
                :class="[
                  isActive
                    ? 'text-blueGray-700 hover:text-blueGray-300'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
               
                ADIDAS
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              to=""
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-thin uppercase"
                :class="[
                  isActive
                    ? 'text-blueGray-700 hover:text-blueGray-300'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                PUMA
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-thin uppercase"
                :class="[
                  isActive
                    ? 'text-blueGray-700 hover:text-blueGray-300'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                
                VANS
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link to="" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-thin uppercase"
                :class="[
                  isActive
                    ? 'text-blueGray-700 hover:text-blueGray-300'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                
                FILA
              </a>
            </router-link>
          </li>
          <li class="items-center">
            <router-link to="" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="block py-3 text-sm font-thin uppercase"
                :class="[
                  isActive
                    ? 'text-blueGray-700 hover:text-blueGray-300'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                
                CONVERSE
              </a>
            </router-link>
          </li>
        </ul>

        
       

      
      </div>
    </div>
  </nav>
</template>
); }

<script>
import IndexDropdown from "@/components/Dropdowns/IndexDropdown.vue";
import UserDropdown from "@/components/Dropdowns/ProflieDropdown.vue";
export default {
  data() {
    return {
      collapseShow: "hidden",
    };
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
  },
  components: {
    IndexDropdown,
    UserDropdown,
  },
};
</script>