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
          <div class="mt-10 uppercase text-md">description : รองเท้า Air Jordan 1 Mid ได้แรงบันดาลใจจาก AJ1 รุ่นแรก และเป็นการให้โอกาสแฟนของ Jordan เรโทรได้ตามรอยความยิ่งใหญ่ สีสันสดใสแต่งแต้มวัสดุคลาสสิกส่วนต่างๆ ให้สะอาดตา พร้อมเติมความสดใหม่บางอย่างลงในดีไซน์ที่คุ้นเคย</div>
          
        </div>
        <div class="m-8 h-preBox w-preBox">
          <div class="my-2 text-5xl font-bold ">
            Nike รองเท้าผู้ชาย Air Force 1 '07 LV8 Keep EM Fresh
          </div>
          <div class="my-4 text-2xl">THB 3,800.00</div>
          <div class="my-4 text-2xl">Brand : Nike</div>
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
          <div class="uppercase text-blueGray-600">DATE : 12-04-2019</div>
          <div class="h-24 mt-4 bg-white w-preBoX">
            <div class="h-12 pt-3 font-light text-center text-white uppercase rounded-lg bg-blueGray-800 w-preBox">add to basket</div>
            <div class="flex" >
            <router-link to="/apply/editproduct" class="h-12 pt-3 mt-2 mr-2 font-light text-center rounded-lg border-blueGray-800 w-edit border-1">EDIT</router-link>
            <div class="h-12 pt-3 mt-2 mb-0 font-light text-center rounded-lg border-blueGray-800 w-edit border-1">DELETE</div>
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

      // tasks: [
      //   {
      //     id: 123,
      //     title: "shose",
      //     type: "men",
      //     image:
      //       "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fb28a2df-c4a7-4c4e-a31e-10c00d6867d9/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-jordan-1-mid-BpARGV.png",
      //     done: false,
      //     price: 299,
      //   },
      // {
      //   id: 456,
      //   title: "Tenderheart",
      //   type: "ENFJ",
      //   image:
      //     "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b9bc37ba-c4e3-4fdd-b7c5-f62de33cbbe8/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-jordan-1-mid-BpARGV.png",
      //   done: false,
      //   price: 289,
      // },

      // {
      //   id: 101,
      //   title: "Bedtime Bear",
      //   type: "INFP",
      //   image:
      //     "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/47922912-39af-49e3-ac43-d11aac1ac7ba/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-jordan-1-mid-BpARGV.png",
      //   done: false,
      //   price: 289,
      // },
      // {
      //   id: 112,
      //   title: "Secrect Bear",
      //   type: "ISTJ",
      //   image:
      //     "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/343186b9-b3d6-4c7f-8072-875a825b10f3/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-air-jordan-1-mid-BpARGV.png",
      //   done: false,
      //   price: 350,
      // },

      // ],
    };
  },
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
