<template>
   <!-- <div class=""> -->
     
    <div class="justify-center p-2 m-24 mx-auto bg-white rounded-lg">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <!-- 1 -->
        <div class="m-8">
          <div class="text-4xl font-bold ">
            {{products.name}}
          </div>
          <!-- 'http://52.163.222.28/api/files/' + img -->
          <img :src="nike1" class="responsive" />
        </div>
        <!-- 2 -->
        <div class="w-auto h-auto mx-auto my-auto md:my-2">
          <div class="mt-2 text-2xl">PRICE : {{products.price}}</div>
          <div  class="mt-2 text-2xl" >Brand : {{ brand }}</div>
          <div   class="grid grid-cols-3 mt-2 text-center" >
            <!-- <div class="pt-1 font-light rounded-md border-1 h-size w-size border-blueGray-600">{{sizes.size}}</div> -->
            <div v-for="(size ,index) in dbSize" :key="index" class="mr-2 font-light rounded-md md:my-2 border-1 border-blueGray-600 "> {{size }}</div>
            
          </div>
        
          <div class="uppercase text-blueGray-600">DATE : {{products.releaseDate }}</div>
          <div class="mt-2">DESCRIPTION : {{products.description}}</div>
          
          <div class="w-full mx-auto mt-4">
           
            <div class="flex mt-2" >
            <router-link to="/apply/editproduct" class="p-2 mr-2 font-light text-center text-white uppercase rounded-lg border-1 bg-blueGray-800">add to cart</router-link>
            <div  @click="addProduct"  class="px-0 py-2 font-light text-center text-white uppercase rounded-lg border-1 bg-blueGray-800">ADD PRODUCT</div>
            </div>
            <div class="flex mt-2" >
            <div @click="updateProduct" class="px-6 py-2 mr-2 font-light text-center text-white uppercase rounded-lg border-1 bg-blueGray-800">UPDATE</div>
            <div @click="deleteProduct()"    class="px-6 py-2 font-light text-center text-white rounded-lg bg-blueGray-800 border-1">DELETE</div>
            </div>
          </div>
        </div>
        </div>
      </div>



    
  <!-- </div> -->
</template>

<script>
// import shose from "@/assets/img/adidas1.jpeg";
import nike1 from "@/assets/img/nike1.jpeg";
import nike2 from "@/assets/img/nike2.jpeg";
import nike3 from "@/assets/img/nike3.jpeg";
import axios from "axios";
export default {
  created() {
    this.getView();
  },
  // prop:['product'],
  data() {
    return {
      nike1,
      nike2,
      nike3,
      img:"",
      dbSize:[],
      dbColor:[],
      productId :this.$route.params.id, 
     products: [],
     brand:"",
     
     brandName: "",
     url:""

    };
  },
  methods:{
    getView(){
      axios.get("http://52.163.222.28/api/productInfo/"+this.productId)
      .then((res) => res.data)
      .then((data)=> {
        this.products = data;
        this.brand = data.brand.name
        this.img = data.images.imageName
        
        data.quantity.forEach((q) => {
            this.dbSize.push(q.size.size);
            this.dbColor.push(q.color.name);
            console.log(q)
            
          });
      });
     
         
      
   
     
     
    },
    deleteProduct(){
      this.$router.push("/productlay/products")
     
    },
    addProduct(){
       this.$router.push("/apply/addproduct")
    },
    updateProduct(){
      console.log(this.productId)
      this.$router.push("/apply/update/"+this.productId)
    }
  }
};
</script>
<style scoped>
@media (max-width:768) {
  .margin{
   margin:0 auto 0;
  }
}



</style>
