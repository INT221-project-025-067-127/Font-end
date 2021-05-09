<template>
   <div class=".wrapper">
    <div class="justify-center w-auto h-auto m-24 bg-white rounded">
      <div class="">
        <!-- 1 -->
        <div class="m-8 h-preview w-preview">
          <img :src="nike1" class="h-preBox2 w-preview" />
          <div class="mt-10 uppercase text-md">DESCRIPTION : {{products.description}}</div>
          
        </div>
        <!-- 2 -->
        <div class="m-8 h-preBox w-preBox">
          <div class="my-2 text-5xl font-bold ">
            {{products.name}}
          </div>
          <div class="my-4 text-2xl">PRICE : {{products.price}}</div>
          <div  class="my-4 text-2xl" >Brand : {{ brand }}</div>
          <div   class="grid h-20 grid-cols-3 my-2 text-center w-preBox " >
            <!-- <div class="pt-1 font-light rounded-md border-1 h-size w-size border-blueGray-600">{{sizes.size}}</div> -->
            <div v-for="(size ,index) in dbSize" :key="index" class="pt-1 font-light rounded-md border-1 h-size w-size border-blueGray-600"> {{size }}</div>
            
          </div>
          <div class="flex h-20 my-2 w-preBox" >
            <div class="mt-4 mr-3 rounded-full bg-emerald-800 h-color w-color"></div>
            <div class="mt-4 mr-3 bg-black rounded-full h-color w-color"></div>
            <div class="mt-4 mr-3 rounded-full bg-lightBlue-500 h-color w-color"></div>
            <div class="mt-4 mr-3 bg-purple-500 rounded-full h-color w-color"></div>
          </div>
          <div class="uppercase text-blueGray-600">DATE : {{products.releaseDate }}</div>
          <div class="h-24 mt-4 bg-white w-preBoX">
           
            <div class="flex" >
            <router-link to="/apply/editproduct" class="h-12 pt-3 mt-2 mr-2 font-light text-center text-white uppercase rounded-lg w-edit border-1 bg-blueGray-800">add to cart</router-link>
            <div  @click="addProduct"  class="h-12 pt-3 mt-2 mb-0 font-light text-center rounded-lg border-blueGray-800 w-edit border-1">ADD PRODUCT</div>
            </div>
            <div class="flex" >
            <div @click="updateProduct" class="h-12 pt-3 mt-2 mr-2 font-light text-center rounded-lg border-blueGray-800 w-edit border-1">UPDATE</div>
            <div @click="deleteProduct()"    class="h-12 pt-3 mt-2 mb-0 font-light text-center text-white rounded-lg bg-blueGray-800 w-edit border-1 ">DELETE</div>
            </div>
          </div>
        </div>
      </div>
    </div>


    
  </div>
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
      dbSize:[],
      dbColor:[],
      productId :this.$route.params.id, 
     products: [],
     brand:"",
     size:[
      
     ],
     brandName: "",

    };
  },
  methods:{
    getView(){
      axios.get("http://52.163.222.28:9000/api/productInfo/"+this.productId)
      .then((res) => res.data)
      .then((data)=> {
        this.products = data;
        this.brand = data.brand.name
        data.quantity.forEach((q) => {
            this.dbSize.push(q.size.size);
            this.dbColor.push(q.color.name);
            console.log(q)
            
          });
      });
      // .then(val => { console.log(val)
          // val.quantity.forEach((q) => {
          //   this.dbSize.push(q.size.size);
          //   this.dbColor.push(q.color.name);
          //   console.log(q)
            
          // });
         
      
   
     
     
    },
    deleteProduct(){
      axios.delete("http://52.163.222.28:9000/api/productInfo/"+this.productId)
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
@media screen and (max-width: 1024px) {
.product{
  /* margin : 5rem; */
  /* margin-left: 18rem; */
  /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
    /* grid-template-columns: repeat(1, minmax(0, 1fr)); */
    flex: 1 1 auto;
}
/* .gallery{
  margin:4rem;
} */
}
@media screen and (max-width: 768px) {

/* .product{ */
  /* margin-left: 1rem; */
  /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
  
/* } */
/* .gallery{
  margin:4rem;
} */

}
@media screen and (max-width: 480px) {

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
body {
  background: #808080;
  padding: 0 10px;
}
.wrapper {
  max-width: 500px;
  width: 100%;
  background: #fff;
  margin: 90px auto;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.125);
  padding: 30px;
}
}
</style>
