<template>
  <section
    class="grid h-auto grid-cols-3 px-4 mx-auto mt-16 ml-12 product max-w-auto justify-items-center lg:flex-wrap"
  >
 
    <div
       v-for="(product,index) in products"
      :key="index"
      class="flex-wrap items-center p-5 px-2 mx-auto my-4 overflow-hidden bg-white rounded shadow-lg gallery "
    >
      <div class="rounded shadow-xl ">
        <!--  picture -->
        <div>
          <button  @click="callProduct(index)" >
          <!--  to="/admin/viewproduct/prd001"-->
            <!-- :to="{ name: 'ViewProduct', params: { id: product[index].id } }"  -->
            <!-- v-bind:src="" -->
            <img
              class=" h-product w-product justify-items-start hover:text-blueGrey-800 focus:outline-none"
              :src="'http://52.163.222.28/api/files/' + product.images[0].imageName"
            />
          </button>
          <div id="name" class="text-xl font-light text-left">{{ product.name }}</div>
          <div id="brand" class="text-sm font-light text-left">{{ product.brand.name}}</div>
          <div class="text-sm font-light text-left">{{ product.price }}</div>
          <div class="text-sm font-light text-left text-blueGray-400">
            {{ product.releaseDate }}
          </div>
        </div>

        <!-- click like -->
        <div class="flex p-2 w-product">
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
import axios from "axios";
// axios.load;
export default {
  created() {
    this.getProducts();
  },
  // },
  data() {
    return {
      products: [],
      sent:[]
   
    };
  },
  methods: {
    getProducts() {
      axios.get("http://52.163.222.28/api/productsInfo")
      .then((res) => res.data)
      .then(data => {
        this.products = data;
      })
     
    },
    callProduct(index){
      // const sent = this.products[index]
      console.log(this.products[index].productId)
      this.$router.push("/admin/viewproduct/"+this.products[index].productId)
      
    }
  }
}
</script>
<style scoped>
@media screen and (max-width: 1024px) {
  .product {
    /* margin : 5rem; */
    margin-left: 18rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .gallery {
    margin: 4rem;
  }
}
@media screen and (max-width: 768px) {
  .product {
    margin-left: 1rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .gallery {
    margin: 4rem;
  }
}
@media screen and (max-width: 480px) {
  .product {
    margin: 5rem;
    /* height: auto; */
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
</style>