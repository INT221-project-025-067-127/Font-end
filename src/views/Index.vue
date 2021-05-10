<template>
  <div>
    <index-navbar />
    //HOME1
    <section
      class="relative flex items-center h-screen pt-16 mx-auto header max-h-860-px"
    >
      <div class="container flex flex-wrap items-center mx-auto">
        <div class="w-full px-4 ">
          <div class="pt-32 sm:pt-0">
            <h2 class="text-4xl font-semibold text-blueGray-600">
              KaiRongTao - Shop for shose lover
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              This is website for buying and salling shose. You will see many
              shoses in this. You can edit delete and add the shose to cart.
              hope you enjoy it!.
            </p>
            <div class="mt-12">
              <router-link to="/productlay/products"
               class="px-6 py-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none ralative get-started focus:outline-none bg-blueGray-800 active:bg-emerald-600 hover:shadow-lg md:w-6/12"
              >
                Get Started
              </router-link>
              <router-link to="/apply/login"
              
                class="px-6 py-4 mb-1 ml-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-black rounded shadow outline-none github-star focus:outline-none active:bg-blueGray-600 hover:shadow-lg md:mt-4"
               
              >
                Login
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <img
        class="relative right-0 w-10/12 pt-16 b-auto sm:w-6/12 sm:mt-0 max-h-860-px "
        src="https://www.nicekicks.com/files/2019/02/nike-air-yeezy-2-red-october-1.jpg"
        alt="..."
      />
    </section>
    <!-- <section class="relative pb-40 mx-auto mt-48 md:mt-40 bg-blueGray-100 "> -->
     //brand
    <section class="container pb-20 mx-auto overflow-hidden">
      <div
        class="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20"
        style=""
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="fill-current text-blueGray-100"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <!-- HOME3 -->
      <div class="container mx-auto overflow-hidden pb-15">
        <div class="flex flex-wrap items-center">
          <div class="w-full px-12 mt-48 ml-auto mr-auto md:w-4/12 md:px-4">
            <span class="material-icons">flag</span>
            <h3 class="mb-2 text-3xl font-semibold leading-normal uppercase">
              The Gold - Profit Maximization
            </h3>
            <p
              class="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-800"
            >
              According to economist Milton Friedman, the main purpose of a
              business is to maximize profits for its owners, and in the case of
              a publicly-traded company, the stockholders are its owners. Others
              contend that a business’s principal purpose is to serve the
              interests of a larger group of stakeholders, including employees,
              customers, and even society as a whole. Philosophers often assert
              that businesses should abide by some legal and social regulations.
              Anu Aga, ex-chairperson of Thermax Limited, once said, “We survive
              by breathing but we can’t say we live to breathe. Likewise, making
              money is very important for a business to survive, but money alone
              cannot be the reason for business to exist. ”
            </p>
            <!-- button buttom -->
            <div class="block pb-6">
              
              <span
                class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0"
              >
                money
              </span>
              <span
                class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0"
              >
                sccessful
              </span>
              <span
                class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0"
              >
                loving
              </span>
              <span
                class="inline-block px-2 py-1 mt-2 mr-2 text-xs font-semibold uppercase bg-white rounded-full text-blueGray-500 last:mr-0"
              >
                shose
              </span>
            </div>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vn-index"
              target="_blank"
              class="font-bold transition-all duration-150 ease-linear text-blueGray-700 hover:text-blueGray-500"
            >
              View All
              <i class="ml-1 leading-relaxed fa fa-angle-double-right"></i>
            </a>
          </div>
          <!-- Home2 :picture -->
          <div class="w-full px-12 mt-48 ml-auto mr-auto md:w-4/12 md:px-4">
            <div
              class="relative flex flex-col w-full h-auto min-w-0 mt-48 mb-6 md:my-6 sm:my-5 lg:my-6 home2"
            >
              <img
                alt="..."
                :src="adidas1"
                class="absolute w-full align-middle rounded shadow-lg ad1 max-w-100-px left-145-px -top-29-px z-3 md:w-6/12"
              />
              <img
                alt="..."
                :src="adidas2"
                class="absolute w-full align-middle rounded-lg shadow-lg ad2 max-w-210-px left-260-px -top-160-px md:w-6/12"
              />
              <img
                alt="..."
                :src="shose1"
                class="absolute w-full align-middle rounded-lg shadow-lg ad3 max-w-180-px left-40-px -top-225-px z-2"
              />
              <img
                alt="..."
                :src="nike1"
                class="absolute w-full align-middle rounded-lg shadow-2xl ad4 max-w-200-px -left-50-px top-25-px"
              />
          
              <img
                alt="..."
                :src="nike3"
                class="absolute w-full align-middle rounded shadow-xl ad5 max-w-120-px left-195-px top-95-px"
              />
            </div>
          </div>
        </div>
        <!-- HOME3 -->
        <div class="flex flex-wrap items-center pt-32">
          <div class="w-full px-4 ml-auto mr-auto mt-28 md:w-6/12">
            <div class="relative flex flex-wrap justify-center">
              <div class="w-full px-4 my-4 lg:w-6/12">
                <a href="https://www.nike.com/th/?cp=62130418954_search_%7cth%7cCore+Brand+-+GN+-+Pure+-+XCategory+-+Nike+Thailand+-+TM+-+General+-+EN_EN+-+Exact%7cGOOGLE%7cnike&gclid=Cj0KCQjwvr6EBhDOARIsAPpqUPGN-iAJsKwDoD6IsxQ6aa-R8mHcujoVdRNoexwtJc6iffPX3oOjLYYaAhgrEALw_wcB&gclsrc=aw.ds" target="_blank">
                  <div class="p-3 text-center bg-black rounded-full shadow-lg">
                    <img
                      alt="..."
                      class="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                      src="https://c.static-nike.com/a/images/w_1920,c_limit/bzl2wmsfh7kgdkufrrjq/image.jpg"
                    />
                    <!-- <p class="mt-4 text-lg font-semibold text-white">
                      1
                    </p> -->
                  </div>
                </a>

                <!-- vans -->
                <a
                  href="https://www.vans.com/"
                  target="_blank"
                >
                  <div
                    class="p-3 mt-3 text-center rounded-full shadow-lg bg-blueGray-800"
                  >
                    <img
                      alt="..."
                      class="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                      src="https://images-na.ssl-images-amazon.com/images/I/61LM8N6AS8L._AC_SL1500_.jpg"
                    />
                  </div>
                </a>
                <!-- adidad -->
                <a href="https://www.adidas.co.th/en/search?cm_mmc=AdieSEM_Google-_-adidas-SEAPAC-eCom-PPC-B-Brand-Other-Exact-TH_EN-SEAPAC-eCom-Paid_Search-_-adidas-Brand-Core-Brand-_-adidas-_-dv%3AeCom&cm_mmc1=TH&cm_mmc2=e&gclid=Cj0KCQjwvr6EBhDOARIsAPpqUPGd9hpILJpshfAjy-ruJ38bqoU2YFLuc5ieYc6bHKZ8bOugvXNQw_MaAmleEALw_wcB&gclsrc=aw.ds" target="_blank">
                  <div
                    class="p-3 mt-3 text-center bg-black rounded-full shadow-lg"
                  >
                    <img
                      alt="..."
                      class="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                      src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg"
                    />
                  </div>
                </a>
              </div>
              <div class="w-full px-4 my-4 lg:w-6/12 lg:mt-16">
                <!-- fila -->
                <a href="https://www.fila.com/" target="_blank">
                  <div
                    class="p-3 mt-3 text-center rounded-full shadow-lg bg-blueGray-800"
                  >
                    <img
                      alt="..."
                      class="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                      src="https://doa.robinson.co.th/media/aw_sbb/brand/Fila-Symbol.png"
                    />
                  </div>
                </a>
                <!-- puma -->
                <a href="https://www.revolve.com/puma-shoes/br/3a7739/?gclid=Cj0KCQjwvr6EBhDOARIsAPpqUPGsTGdTS1Q7etMiuAAZeOS95weztff-ZKtaSYmRLwrPfHZYl9WzA3oaAjDjEALw_wcB&gclsrc=aw.ds" target="_blank">
                  <div
                    class="p-3 mt-3 text-center bg-black rounded-full shadow-lg"
                  >
                    <img
                      alt="..."
                      class="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                      src="https://pbs.twimg.com/profile_images/1285924375263350785/iIcjSljv_400x400.jpg"
                    />
                  </div>
                </a>

                <!-- convers -->
                <a href="https://www.revolve.com/converse-shoes/br/379259/?gclid=Cj0KCQjwvr6EBhDOARIsAPpqUPGZGv-ggEok5bmVPLVamd6ZCU9PYJrW6552xupFd8gdFpZue25y56kaAlITEALw_wcB&gclsrc=aw.ds" target="_blank">
                  <div
                    class="p-3 mt-3 text-center rounded-full shadow-lg bg-blueGray-800"
                  >
                    <img
                      alt="..."
                      class="w-16 max-w-full p-2 mx-auto bg-white rounded-full shadow-md"
                      src="https://i.pinimg.com/originals/82/47/37/82473738c0e36e463be9de989ace02df.jpg"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div class="w-full px-12 mx-auto mt-0 ml-auto md:w-4/12 md:px-4">
            <div
              class="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-blueGray-500"
            >
              <span class="mt-1 text-black material-icons">
                favorite
              </span>
            </div>
            <h3 class="mb-2 text-3xl font-semibold leading-normal">
              the Brands that we have.
            </h3>
            <p
              class="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-600"
            >
              We also collect almost every brand and collection in every years
              for our customers. You know them well and we hope you enjoy to
              visit our website.
            </p>
            <p
              class="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-600"
            >
              You can click the button on the left side to visit products in
              each brand.
            </p>

            <a
              href="#"
              target="_blank"
              class="font-bold transition-all duration-150 ease-linear text-blueGray-700 hover:text-blueGray-500"
            >
              View all
              <i class="ml-1 leading-relaxed fa fa-angle-double-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
     
    <section class="py-20 overflow-hidden bg-blueGray-600 ">
      <div class="container pb-64 mx-auto">
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-12 ml-auto mr-auto md:w-5/12 md:px-4 md:mt-64">
            <div
              class="inline-flex items-center justify-center w-16 h-16 p-3 mb-6 text-center bg-white rounded-full shadow-lg text-blueGray-500"
            >
              <i class="text-xl fas fa-code-branch"></i>
            </div>
            <h3 class="mb-2 text-3xl font-semibold leading-normal text-white">
              Open Source
            </h3>
            <p
              class="mt-4 mb-4 text-lg font-light leading-relaxed text-blueGray-400"
            >
              our git organization
            </p>
            <p
              class="mt-0 mb-4 text-lg font-light leading-relaxed text-blueGray-400"
            >
              Get it free on Github and please help us spread the news with a
              Star!
            </p>
            <!-- link git  -->
            <a
            
              href="#"
              target="_blank"
              class="inline-block px-6 py-4 mt-4 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none github-star focus:outline-none bg-blueGray-700 active:bg-blueGray-600 hover:shadow-lg"
            >
              Github Star
            </a>
          </div>

          <div class="relative w-full px-4 mt-32 ml-auto mr-auto md:w-4/12">
            <i
              class="absolute left-auto fab fa-github text-blueGray-700 text-55 -top-150-px -right-100 opacity-80"
            ></i>
          </div>
        </div>
      </div>
    </section>
   
    <section class="relative pt-32 bg-black">
      <div
        class="absolute top-0 left-0 right-0 bottom-auto w-full h-20 -mt-20"
        style="transform: translateZ(0);"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            class="fill-current text-blueGray-200"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

  
    </section>
    <!-- </section > -->
    <!-- footer -->
    <footer-component />
  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";

// import patternVue from "@/assets/img/pattern_vue.png";
import adidas1 from "@/assets/img/adidas1.jpeg";
import adidas2 from "@/assets/img/adidas2.jpeg";
import shose1 from "@/assets/img/shose1.jpeg";
import nike1 from "@/assets/img/nike1.jpeg";
import nike2 from "@/assets/img/nike2.jpeg";
import nike3 from "@/assets/img/nike3.jpeg";


export default {
  data() {
    return {
      adidas1,
      adidas2,
      shose1,
      nike1,
      nike2,
      nike3,
     
     
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
};
</script>
<style scoped>
/* 640px:sm :moblie */
@media screen and (max-width: 640px) {
  .home2{
    overflow: hidden;
  }
}
/* md:teblet */
@media screen and (max-width: 766px) {
  .home2{
    overflow: hidden;
  }
 
}
/* lg */
@media screen and (max-width: 1024px) {
  .home2{
   margin-right: 2rem;
  
  }
  .ad1{
   width: 50%;
  }
  .ad5{
    width: 50%;
    }
}
</style>
