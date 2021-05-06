<template>
   
   <section class="grid h-auto grid-cols-3 px-4 mx-auto mt-16 ml-12 product max-w-auto justify-items-center lg:flex-wrap">

   

     
      <div
        v-for="(task, index) in tasks"
        :key="task.title"
        class="flex-wrap items-center p-5 px-2 mx-auto my-6 my-auto overflow-hidden bg-white rounded shadow-lg gallery "
      >
        <div class="rounded shadow-xl ">
          <!--  picture -->
          <div>
            <router-link to="#"
              v-on:click="callProduct(index)"
              class="d"
            >
              <img v-bind:src="task.image" class=" h-product w-product justify-items-start hover:text-blueGrey-800 focus:outline-none" />
             </router-link>
              <div class="text-xl font-light text-left" >{{task.name}}</div>
              <div class="text-sm font-light text-left">{{task.brand}}</div>
              <div class="text-sm font-light text-left">{{task.types}}</div>
              <div class="text-sm font-light text-left">{{task.price}}</div>
              <div class="text-sm font-light text-left text-blueGray-400">{{task.releaseDateate}}</div>
            
          </div>

          <!-- click like -->
          <div class="flex p-2 w-product" >
            <div class="w-1 h-1 rounded-full bg-blueGray-800 ml-smallColor"></div>
            <div class="w-1 h-1 rounded-full ml-01 bg-blueGray-800"></div>
             <div class="w-1 h-1 rounded-full ml-01 bg-blueGray-800"></div>
              <div class="w-1 h-1 rounded-full ml-01 bg-blueGray-800"></div>
          </div>
        </div>
      </div>
    <!-- </div> -->
  <!-- </div> -->


    </section>
    <!-- </div> -->
  
  
</template>

<script>
// import CardSettings from "@/components/Cards/CardSettings.vue";
import axios from 'axios';

export default {

  // },
  data() {
    return {
      tasks: [
  
        {
          id: null,
          name: "",
          type: "",
          image:
            "",
          brand:"",
          price: null,
          releaseDate:""
        },
        
      ],
      
      products: [],
    };
  },
  medthod:{
      callProduct(){
         try{
        const res = axios.get("http://localhost:5000/products");
        console.log(res.data)
      }catch{
        console.log("err")
      }
      
      }
  }}
</script>
<style scoped>
@media screen and (max-width: 1024px) {

.product{
  /* margin : 5rem; */
  margin-left: 18rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.gallery{
  margin:4rem;
}
}
@media screen and (max-width: 768px) {

.product{
  margin-left: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  
}
.gallery{
  margin:4rem;
}

}
@media screen and (max-width: 480px) {

.product{
  margin : 5rem;
  /* height: auto; */
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

}
</style>
