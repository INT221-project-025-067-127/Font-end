<template>
  <div class="mx-auto mt-32 text-black max-w-auto justify-items-center ">
    <div class="justify-center w-auto h-auto m-24 bg-white rounded ">
      <form @submit.prevent="submitForm">
        <div class="flex justify-center">
          <div class="m-8 h-preview w-preview">
            <img :src="nike1" class="h-preBox2 w-preview" />
            <!-- <div class="flex mt-3 h-smallPre w-preview">
            <img :src="nike1" class="mr-smallPre w-smallPre h-smallPre " />
            <img :src="nike1" class="mr-smallPre w-smallPre h-smallPre" />
            <img :src="nike1" class="w-smallPre h-smallPre" />
          </div> -->

            <div class="h-12 mt-10 uppercase text-md">
              <label
                class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                htmlFor="grid-password"
              >
                Description
                   <button v-show="isShow.boxdes == false" @click="isShow.boxdes = !isShow.boxdes" class="w-10 h-auto mx-4 text-white bg-red-700 rounded-lg">edit</button>
              </label>
              
              <input v-show="isShow.boxdes"
                type="text"
                class="w-full h-12 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                placeholder="text"
              />
            </div>
          </div>
          <div class="mt-10 h-preBox w-preBox">
            <div class="my-2 ">
              <label
                for="name"
                class="block text-lg font-bold uppercase text-blueGray-800"
                htmlFor="grid-password"
              >
                NAME
                <button v-show="isShow.boxname == false" @click="isShow.boxname = !isShow.boxname" class="w-10 h-auto mx-4 text-white bg-red-700 rounded-lg">edit</button>
              </label>
              
              <input v-show="isShow.boxname"
                type="text"
                class="w-full h-12 px-3 py-3 text-sm uppercase transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                placeholder="Your name"
                v-model="name"
              />

              <label
                class="block text-lg font-bold uppercase text-blueGray-800"
                htmlFor="grid-password"
              >
                PRICE
                 <button v-show="isShow.boxprice == false" @click="isShow.boxprice = !isShow.boxprice" class="w-10 h-auto mx-4 text-white bg-red-700 rounded-lg">edit</button>
              </label>
              <input v-show="isShow.boxprice"
                type="text"
                class="w-full h-12 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                placeholder="PRICE"
                v-model="price"
              />

              <label 
                class="block text-lg font-bold uppercase text-blueGray-800"
                htmlFor="grid-password"
              >
                BRAND
                 <button v-show="isShow.boxbrand == false" @click="isShow.boxbrand = !isShow.boxbrand" class="w-10 h-auto mx-4 text-white bg-red-700 rounded-lg">edit</button>
              </label>
              <input v-show="isShow.boxbrand"
                type="text"
                class="w-full h-12 px-3 py-3 text-sm uppercase transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                placeholder="Brand"
                v-model="brand"
              />

              <label
                class="block text-lg font-bold uppercase text-blueGray-800"
                htmlFor="grid-password"
              >
                DATE
                 <button v-show="isShow.boxdate == false" @click="isShow.boxdate = !isShow.boxdate" class="w-10 h-auto mx-4 text-white bg-red-700 rounded-lg">edit</button>
              </label>
              <input v-show="isShow.boxdate"
                type="date"
                class="w-full h-12 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                placeholder="DATE"
                v-model="date"
              />
              <!-- <label
                class="block text-lg font-bold uppercase text-blueGray-800"
                htmlFor="grid-password"
              >
                AMOUNT
                 <button v-show="isShow.boxA == false" @click="isShow.boxA = !isShow.boxA" class="w-10 h-auto mx-4 text-white bg-red-700 rounded-lg">edit</button>
              </label>
              <input v-show="isShow.boxA"
                type="number"
                class="w-full h-12 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                placeholder="Amount"
                v-model="amount"
              />
              <label
                class="block text-lg font-bold uppercase text-blueGray-800"
                htmlFor="grid-password"
              >
                COLOR CODE
                 <button v-show="isShow.boxco == false" @click="isShow.boxco = !isShow.boxco" class="w-10 h-auto mx-4 text-white bg-red-700 rounded-lg">edit</button>
              </label>
              <input v-show="isShow.boxco"
                type="text"
                class="w-full h-12 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                placeholder="color code"
                v-model="color"
              /> -->
              <!-- <label
                class="block text-lg font-bold uppercase text-blueGray-800"
                htmlFor="grid-password"
              >
                Size
                 <button v-show="isShow.boxsize == false" @click="isShow.boxsize = !isShow.boxsize" class="w-10 h-auto mx-4 text-white bg-red-700 rounded-lg">edit</button>
              </label>
              <input v-show="isShow.boxsize"
                type="number"
                class="w-full h-12 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                placeholder="SIZE"
                v-model="size"
              /> -->
            </div>

            <!-- <div class="h-24 mt-4 bg-white w-preBoX"> -->

            <div class="flex mt-10">
              <button
                type="submit"
                value="submit"
                class="h-12 pt-3 mt-2 mr-2 font-light text-center rounded-lg border-blueGray-800 w-edit border-1"
              >
                UPDATE
              </button>
              <router-link to="/productlay/products"
                class="h-12 pt-3 mt-2 mb-0 font-light text-center text-white rounded-lg bg-blueGray-800 w-edit border-1"
              >
                CANCLE
              </router-link>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </form>
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
  
  
  data() {
    return {
      nike1,
      nike2,
      nike3,
      productId: this.$route.params.id,
    //   products:[],
      // id: "",
      name: "",
      price: null,
      brand: "",
      date: "",
      description: "",
      // amount: null,
      // color: "",
      // size: null,
      isShow :{
        boxname: false,boxprice:false,boxbrand:false,boxdate:false,boxA:false,boxdes:false,
        boxco:false,boxsize:false
        
    }
      
    };
  },
  methods: {
  
    submitForm(){
       if(this.name != null ){
        axios.patch("http://localhost:5000/products/"+this.productId,{ 
        name : this.name 
        
      });
      
       }
      if(this.price != null){
        axios.patch("http://localhost:5000/products/"+this.productId,{ 
        price : this.price
      });
      }
      if(this.date != null){
        axios.patch("http://localhost:5000/products/"+this.productId,{ 
        releaseDate : this.date
      });
      }
      if(this.brand != null){
        axios.patch("http://localhost:5000/products/"+this.productId,{ 
        brand : {
          name : this.brand,
        }
      });
      }
      window.location.reload
      // {
      //  
      // }
      
      
      
     
      } ,
      
      // )
      
    // }
  }
};
</script>