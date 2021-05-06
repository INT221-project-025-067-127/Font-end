<template>
  <footer class="relative z-40 bg-white">
    <div class="container px-8 pt-16 mx-auto">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full px-4 lg:w-6/12">
          <h4 class="text-3xl font-semibold">Social Media!</h4>
          <h5 class="mt-0 mb-2 text-lg text-blueGray-800">
            Link for contact us.
          </h5>
          <div class="mt-6 mb-6 lg:mb-0">
            <button
              class="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-400 align-center focus:outline-none"
              type="button"
            >
              <i class="fab fa-twitter"></i>
            </button>
            <button
              class="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-lightBlue-600 align-center focus:outline-none"
              type="button"
            >
              <i class="fab fa-facebook-square"></i>
            </button>
            <button
              class="items-center justify-center w-10 h-10 mr-2 font-normal text-pink-400 bg-white rounded-full shadow-lg outline-none align-center focus:outline-none"
              type="button"
            >
              <i class="fab fa-dribbble"></i>
            </button>
            <button
              class="items-center justify-center w-10 h-10 mr-2 font-normal bg-white rounded-full shadow-lg outline-none text-blueGray-800 align-center focus:outline-none"
              type="button"
            >
              <i class="fab fa-github"></i>
            </button>
          </div>
        </div>
        <div class="w-full px-4 lg:w-6/12">
          <div class="flex flex-wrap mb-6 items-top">
            <div class="w-full px-4 ml-auto lg:w-4/12">
              <span
                class="block mb-2 text-sm font-semibold uppercase text-blueGray-500"
              >
                Useful Links
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="#"
                  >
                    Popular
                  </a>
                </li>
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="#"
                  >
                    Men
                  </a>
                </li>
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="#"
                  >
                    Women
                  </a>
                </li>
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="https://www.creative-tim.com/bootstrap-themes/free?ref=vn-footer"
                  >
                    kids
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full px-4 lg:w-4/12">
              <span
                class="block mb-2 text-sm font-semibold uppercase text-blueGray-500"
              >
                Furher Info
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="#"
                  >
                    store map
                  </a>
                </li>
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="#"
                  >
                    ...
                  </a>
                </li>
                
                <li>
                  <a
                    class="block pb-2 text-sm font-semibold text-blueGray-600 hover:text-blueGray-800"
                    href="#"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div
        class="flex flex-wrap items-center justify-center md:justify-between"
      >
        <div class="w-full px-4 mx-auto text-center md:w-4/12">
          <div class="py-1 text-sm font-semibold text-blueGray-500">
           Thank for watching.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
