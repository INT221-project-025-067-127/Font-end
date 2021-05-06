<template>
  <div
    class="relative flex flex-col w-full min-w-0 mt-16 mb-6 break-words bg-white rounded-lg shadow-xl"
  >
    <div class="px-6">
      <div class="flex flex-wrap justify-center">
        
          <div class="relative flex justify-center w-auto h-16 px-4 ">
            <img
              alt="..."
              :src="team2"
              class="absolute w-auto -m-16 -ml-20 align-middle border-none rounded-full shadow-xl h-proflie lg:-ml-16 max-w-150-px"
            />
          </div>
        
      </div>

        <div class="w-full px-4 mt-20 text-center">
        
            <div class="flex justify-center p-3 py-4 pt-8 text-center lg:mr-4 lg:pt-4">
              <span
                class="block text-xl font-bold tracking-wide uppercase text-blueGray-600"
              >
                62130500067
              </span>
              <!-- <span class="text-sm text-blueGray-400">Comments</span> -->
            </div>
         
        </div>
      <div class="mt-2 text-center">
        <h3
          class="mb-2 text-xl font-semibold leading-normal text-blueGray-700"
        >
          Pitchanon Wongkhamlu
        </h3>
        <div
          class="mt-4 mb-2 text-sm font-bold leading-normal uppercase text-blueGray-400"
        >
          
          <span class=" material-icons text-blueGray-400">face</span>
          DEVOP,DATA BASE
        </div>
        <div class="mt-10 mb-2 text-blueGray-600">
          <i class="mr-2 text-lg fas fa-briefcase text-blueGray-400"></i>
          INFORMATION TECHNOLOGY
        </div>
        <div class="mb-2 text-blueGray-600">
          <i class="mr-2 text-lg fas fa-university text-blueGray-400"></i>
          King Mongkut's University of Technology Thonburi
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import team2 from "@/assets/img/pit.jpg";

export default {
  data() {
    return {
      team2,
    };
  },
};
</script>
