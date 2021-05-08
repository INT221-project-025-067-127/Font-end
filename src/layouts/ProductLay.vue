
<template>
 <div>
   <nav-bar class="z-50 top-10-px" />
    <sidebar class="z-50"/>
    <main class="">
      <section class="absolute top-0 w-full h-auto bg-repeat pt-auto bg-blueGray-800 bg-full"
          :style="`background-image: url('https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/methode/2020/09/05/0151ef7e-edb5-11ea-8288-5c49f42eee5c_image_hires_193040.jpg?itok=ydapHfnB&v=1599344561');`"
        >
        <!-- <div class="justify-center justify-items-center">{{btnText}}</div> -->
        <router-view />
        <footer-admin class="relative z-60" />
      </section>
    </main>
    
  </div>
</template>
<script>
import NavBar from "@/components/Navbars/ProductNav.vue";
import Sidebar from "@/components/Navbars/BrandSide.vue";
import FooterAdmin from "@/components/Footers/Footer.vue";
export default {
  // props:['btnText'],
  name: "admin-layout",
  components: {
    NavBar,
    Sidebar,
    FooterAdmin,
  },
  data(){
    return {
      products: [],
      
   
    };
  },
  methods:{
    // callProduct(sent){
      
      // this.products = sent;
      // console.log(this.products)
      // { name: 'ViewProduct', params: { id: sent.id } }
      //  this.$router.push({ name: 'ViewProduct', params: { id: sent.id } })
      // this.$emit("showProduct",this.product)
    // }
  }
};
</script>