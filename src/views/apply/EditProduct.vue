<template>
  <div class="mx-auto mt-32 text-black max-w-auto justify-items-center ">
    <div class="justify-center w-auto h-auto m-24 bg-white rounded ">
      <div class="flex justify-center">
        <div class="m-8 h-preview w-preview">
          <img :src="nike1" class="h-preBox2 w-preview" />
          <!-- <div class="flex mt-3 h-smallPre w-preview">
            <img :src="nike1" class="mr-smallPre w-smallPre h-smallPre " />
            <img :src="nike1" class="mr-smallPre w-smallPre h-smallPre" />
            <img :src="nike1" class="w-smallPre h-smallPre" />
          </div> -->
          <form class="h-12 mt-10 uppercase text-md">
            <label
                  class="block mb-2 text-xs font-bold uppercase text-blueGray-600"
                  htmlFor="grid-password"
                >
                  Description
                </label>
                <input
                  type="text"
                  class="w-full h-12 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                  placeholder="text"
                />
          </form>
          
        </div>
        <div class="mt-10 h-preBox w-preBox">
          <form class="my-2 ">
            <label
                  class="block text-lg font-bold uppercase text-blueGray-800"
                  htmlFor="grid-password"
                >
                  NAME
                </label>
                <input
                  type="text"
                  class="w-full h-12 px-3 py-3 text-sm uppercase transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                  placeholder="Your name"
                  
                />
          </form>
          <form class="my-2 ">
            <label
                  class="block text-lg font-bold uppercase text-blueGray-800"
                  htmlFor="grid-password"
                >
                  PRICE
                </label>
                <input
                  type="text"
                  class="w-full h-12 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                  placeholder="PRICE"
                />
          </form>
          <form class="my-2 ">
            <label
                  class="block text-lg font-bold uppercase text-blueGray-800"
                  htmlFor="grid-password"
                >
                  BRAND
                </label>
                <input
                  type="text"
                  class="w-full h-12 px-3 py-3 text-sm uppercase transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                  placeholder="Brand"
                />
          </form>
          <form class="my-2 ">
            <label
                  class="block text-lg font-bold uppercase text-blueGray-800"
                  htmlFor="grid-password"
                >
                  DATE
                </label>
                <input
                  type="date"
                  class="w-full h-12 px-3 py-3 text-sm transition-all duration-150 ease-linear bg-white border-gray-300 rounded shadow resize-y border-1 placeholder-blueGray-300 text-blueGray-800 focus:outline-none focus:ring"
                  placeholder="DATE"
                />
          </form>
         
         
          <!-- <div class="h-24 mt-4 bg-white w-preBoX"> -->
           
            <div class="flex mt-16" >
            <div class="h-12 pt-3 mt-2 mr-2 font-light text-center rounded-lg border-blueGray-800 w-edit border-1">UPDATE</div>
            <div class="h-12 pt-3 mt-2 mb-0 font-light text-center text-white rounded-lg bg-blueGray-800 w-edit border-1">CANCLE</div>
            </div>
          <!-- </div> -->
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
export default {
  // name: "shose",
  // components: {
  //   shose
  // }
  data() {
    return {
      nike1,
      nike2,
      nike3,
    };
  },
};
</script>