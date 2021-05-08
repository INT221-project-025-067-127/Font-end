<template>
   <div class="mx-auto mt-32 text-black max-w-auto justify-items-center">
    <div class="justify-center w-auto h-auto m-24 bg-white rounded">
      <div class="flex justify-center ">
        <div class="m-8 h-preview w-preview">
          <img :src="nike1" class="h-preBox2 w-preview" />
          <!-- <div class="flex mt-3 h-smallPre w-preview">
            <img :src="nike1" class="mr-smallPre w-smallPre h-smallPre " />
            <img :src="nike1" class="mr-smallPre w-smallPre h-smallPre" />
            <img :src="nike1" class="w-smallPre h-smallPre" />
          </div> -->
          <div class="mt-10 uppercase text-md">DESCRIPTION : {{products.description}}</div>
          
        </div>
        <div class="m-8 h-preBox w-preBox">
          <div class="my-2 text-5xl font-bold ">
            {{products.name}}
          </div>
          <div class="my-4 text-2xl">PRICE : {{products.price}}</div>
          <div  class="my-4 text-2xl" >Brand : {{products.brand}}</div>
          <div class="grid h-20 grid-cols-3 my-2 text-center w-preBox " >
            <div class="pt-1 font-light rounded-md border-1 h-size w-size border-blueGray-600">EU : 35.5</div>
            <div class="pt-1 font-light rounded-md border-1 h-size w-size border-blueGray-600"> EU : 36</div>
            <div class="pt-1 font-light rounded-md border-1 h-size w-size border-blueGray-600">EU : 37</div>
            <div class="pt-1 font-light rounded-md border-1 h-size w-size border-blueGray-600">EU : 38</div>
            <div class="pt-1 font-light rounded-md border-1 h-size w-size border-blueGray-600">EU : 39</div>
            <div class="pt-1 font-light rounded-md border-1 h-size w-size border-blueGray-600">EU : 40</div>
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
            <div  @click="updateProduct"  class="h-12 pt-3 mt-2 mb-0 font-light text-center rounded-lg border-blueGray-800 w-edit border-1">UPDATE</div>
            </div>
            <div class="flex" >
            <router-link to="/apply/editproduct" class="h-12 pt-3 mt-2 mr-2 font-light text-center rounded-lg border-blueGray-800 w-edit border-1">EDIT</router-link>
            <div @click="deleteProduct()"    class="h-12 pt-3 mt-2 mb-0 font-light text-center text-white rounded-lg bg-blueGray-800 w-edit border-1">DELETE</div>
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
      productId :this.$route.params.id, 
     products: [],

    };
  },
  methods:{
    getView(){
      axios.get("http://localhost:5000/products")
      .then((res) => res.data)
      .then(data => data.forEach(
        // console.log(data.id)
        val => {
               if(val.id == this.productId){              
                   this.products = val;
                   console.log(this.products.brand.name)
               }
           } 
      ))
     
    },
    deleteProduct(){
      axios.delete("http://localhost:5000/products/"+this.productId)
      this.$router.push("/productlay/products")
     
    },
    updateProduct(){
       this.$router.push("/apply/editproduct/"+this.productId)
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

.product{
  /* margin : 5rem; */
  /* height: auto; */
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

}
</style>
