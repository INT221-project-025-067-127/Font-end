<template>
  <div class="">
    
    <div class="flex px-20 pt-48 pb-24">
      <div class="w-full px-4 lg:w-4/12"> 
      <cake/>
    </div>
    <div class="w-full px-4 lg:w-4/12">    
      <pluem />
    </div>
    <div class="w-full px-4 lg:w-4/12">   
      <pizza />
    </div>
    </div>
     
  </div>
</template>
<script>
// import MapExample from "@/components/Maps/MapExample.vue";
import cake from "@/components/Cards/025Card.vue";
import pluem from "@/components/Cards/067Card.vue";
import pizza from "@/components/Cards/127Card.vue";
export default {
  components: {
   cake,pluem,pizza
  },
};
</script>
