<template>
  <div>
    <navbar  class="" />/>
    <!-- <brand-side /> -->
    <main class="">
      <section class="absolute top-0 w-full h-auto bg-repeat pt-auto bg-blueGray-800 bg-full"
          :style="`background-image: url('https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/09/05/0151ef7e-edb5-11ea-8288-5c49f42eee5c_image_hires_193040.jpg?itok=ydapHfnB&v=1599344561');`"
        >
        <router-view />
        <footer-small relative  />
      </section>
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/Navbars/IndexNavbar.vue";
import FooterSmall from "@/components/Footers/Footer.vue";
// import BrandSide from "@/components/Navbars/BrandSide.vue";


export default {
 
  components: {
    Navbar,
    FooterSmall,
    // BrandSide
  },
};
</script>
