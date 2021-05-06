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
            <router-link to="/admin/viewproduct"
              v-on:click="showPreview(index)"
              class="d"
            >
              <img v-bind:src="task.image" class=" h-product w-product justify-items-start hover:text-blueGrey-800 focus:outline-none" />
             </router-link>
              <div class="text-xl font-light text-left ">Name</div>
              <div class="text-sm font-light text-left">Brand</div>
              <div class="text-sm font-light text-left">Types</div>
              <div class="text-sm font-light text-left">price</div>
              <div class="text-sm font-light text-left text-blueGray-400">Date</div>
            
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


// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  // name: "product",
  // components: {
  //   // HelloWorld,
  // },
  data() {
    return {
      tasks: [
        {
          id: 123,
          title: "shose",
          type: "men",
          image:
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb28a2df-c4a7-4c4e-a31e-10c00d6867d9/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-jordan-1-mid-BpARGV.png",
          done: false,
          price: 299,
        },
        {
          id: 456,
          title: "Tenderheart",
          type: "ENFJ",
          image:
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b9bc37ba-c4e3-4fdd-b7c5-f62de33cbbe8/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-jordan-1-mid-BpARGV.png",
          done: false,
          price: 289,
        },
        
        {
          id: 101,
          title: "Bedtime Bear",
          type: "INFP",
          image:
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/47922912-39af-49e3-ac43-d11aac1ac7ba/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-jordan-1-mid-BpARGV.png",
          done: false,
          price: 289,
        },
        {
          id: 112,
          title: "Secrect Bear",
          type: "ISTJ",
          image:
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/343186b9-b3d6-4c7f-8072-875a825b10f3/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-jordan-1-mid-BpARGV.png",
          done: false,
          price: 350,
        },
        {
          id: 131,
          title: "Cheer Bear",
          type: "INFJ",
          image:
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/68897be2-16d3-4b42-b365-dfbe0ee9258c/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-jordan-1-mid-B4QlG6.png",
          done: false,
          price: 359,
        },
        {
          id: 415,
          title: "Grams Bear",
          type: "ISFJ",
          image:
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/0826b95f-3306-46a1-95dd-5f9b4f614797/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%9C%E0%B8%B9%E0%B9%89-air-force-1-high-07-emb-NZvJXr.png",
          done: false,
          price: 399,
        },
        
      ],
      input: {
        isSearch: false,
        searchText: "",
      },
      preview: {
        // isShowPreview: false,
        previewSrc: " ",
      },
      products: [],
    };
    // pic:[{pic1:}]
  }
}
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
