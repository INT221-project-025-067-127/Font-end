<template>
  <div>
    <span
          class="inline-flex items-center justify-center w-12 h-12 text-sm text-white rounded-full bg-blueGray-200"
          href="#pablo"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
        >
          <img
            alt="..."
            class="w-full align-middle border-none rounded-full shadow-lg"
            :src="image"
          />
        </span>
    <div
      ref="popoverDropdownRef"
      class="z-50 float-left py-2 text-base text-left list-none bg-white rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
     
      <router-link
        to="/productlay/products"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        Product
      </router-link>
     
      <router-link
        to="/admin/contact"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        Contact
      </router-link>
      
      <router-link
        to="/apply/login"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        Login
      </router-link>
      <router-link
        to="/apply/register"
        class="block w-full px-4 py-2 text-sm font-normal bg-transparent whitespace-nowrap text-blueGray-700"
      >
        Register
      </router-link>
      
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";
import image from "@/assets/img/cake.png";
export default {
  data() {
    return {
      dropdownPopoverShow: false,
      image
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
  },
};
</script>
