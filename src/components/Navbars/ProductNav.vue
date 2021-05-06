<template>
    
  <!-- Navbar -->
  <nav
    class="absolute right-0 z-10 flex items-center w-full p-4 bg-transparent top-3 md:flex-row md:flex-nowrap md:justify-start"
  >
    <div
      class="flex flex-wrap items-center justify-end w-full px-4 mx-autp md:flex-nowrap md:px-10"
    >

      <ul class="flex list-none md:flex-row md:flex item-center ">
        <user-dropdown />
        <user />
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import UserDropdown from "@/components/Dropdowns/IndexDropdown.vue";
import User from "@/components/Dropdowns/ProflieDropdown.vue";
export default {
  components: {
    UserDropdown,
    User
  },
};
</script>