<template>
  <div class=" wrapper">
    <div class="title ">
      ADD PRODUCT
    </div>
    <div class="form">
      <div class="inputfield">
        <label>ID</label>
        <input type="text" class="input" v-model="params.id" />
      </div>
      <div class="inputfield">
        <label>name</label>
        <input type="text" class="input" v-model="params.name" />
      </div>
      <div class="inputfield">
        <label>brands</label>
        <input type="text" class="input" v-model="brands" />
      </div>
      <!-- price -->
      <div class="inputfield">
        <label>price</label>
        <input type="text" class="input" v-model="params.price" />
      </div>
      <!-- date -->
      <div class="inputfield">
        <label>date</label>
        <input type="date" class="input" v-model="params.date" />
      </div>
      <!-- color -->
      <div class="inputfield">
        <label>Color</label>
        <select
          name="colors"
          id=""
          multiple
          v-model="colors"
          class="rounded-md border-blueGray-400"
          @click="mapColorSize"
        >
          <option
            class="border-gray-500 input"
            v-for="(color, index) in getColor"
            :key="index"
            :value="color.name"
            >{{ color.name }}</option
          >
        </select>
      <!-- </div> -->

      <!-- size -->
      <!-- <div class="flex inputfield"> -->
        <label>Size</label>
        <select
          id=""
          multiple
          v-model="sizes"
          class="rounded-md border-blueGray-400"
          @click="mapColorSize"
        >
          <option
            class=""
            v-for="(size, index) in getSize"
            :key="index"
            :value="size.size"
            >{{ size.size }}</option
          >
        </select>
      </div>
      <!-- amount -->
      <div class="flex flex-wrap mt-2 inputfield ">
        <div
          v-for="(item, index) in quantity"
          :key="index"
          class="grid grid-cols-2 mt-2"
        >
          <label for="index"
            >{{ item.color.name }} : {{ item.size.size }}</label
          >
          <input
            v-model="item.amount"
            name="index"
            type="number"
            class="w-12 h-8 m-4 text-center border border-blueGray-300"
          />
        </div>
      </div>
      <div class="inputfield">
        <label>Description</label>
        <textarea class="textarea" v-model="params.description"></textarea>
      </div>
      <!-- image -->
       <div class="inputfield">
        <label for="avatar">Choose a profile picture:</label>
       
        <input
          type="file" 
          class="text-blueGray-800"
          name="img"
          accept="image/png, image/jpeg"
          @input="inputFile"
        />
     
      </div>
      <div class="inputfield">
        <input type="submit" value="Add Product" class="btn" @click="submitForm"/>
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
  // created() {
  //   this.getView();
  // },

  data() {
    return {
      nike1,
      nike2,
      nike3,
      //api para
      products: [],
      getSize: [],
      getColor: [],
      // v-model
      colors: [],
      sizes: [],
      quantity: [],
      brands: null,
      image: null,
      // imgName:"",
      params: {
        id: "",
        name: "",
        price: null,
        date: "",
        description: "",
      },
    };
  },
  mounted() {
    this.getView();
  },
  methods: {
    inputFile(event){
      this.image = event.target.files[0];
      console.log(this.image);
    },
    logColor() {
      console.log(this.colors);
    },

    getView() {
      axios
        .get("http://52.163.222.28/api/sizes")
        .then((res) => res.data)
        .then((data) => (this.getSize = data));
      axios
        .get("http://52.163.222.28/api/colors")
        .then((data) => data.data)
        .then((res) => (this.getColor = res));
    },
    mapColorSize() {
      this.quantity = [];
      this.colors.forEach((color) => {
        this.sizes.forEach((size) => {
          this.quantity.push({
            color: { name: color },
            size: { size: size },
            amount: 0,
          });
        });
      });
    },

    submitForm() {
      console.log(this.quantity);
      let form = new FormData();
      let data = {
         id: this.params.id,
        name: this.params.name,
        price: this.params.price,
        releaseDate: this.params.date,
        description: this.params.description,
        brand: {
          name: this.brands,
        },
        quantity: this.quantity,
      }
      // console.log(data)
      console.log(this.image)
      let jsonData = JSON.stringify(data)
      let blob = new Blob([jsonData],{
        type: "application/json"
      })
      form.append("product", blob)
      form.append("files", this.image);
      
      axios.post("http://52.163.222.28/api/productInfo", form, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    });
    this.$route.push("/productlay/products")
    },
  },
  updated() {
    // console.log(this.sizes);
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
body {
  background: #808080;
  padding: 0 10px;
}
.wrapper {
  max-width: 500px;
  width: 100%;
  background: #fff;
  margin: 80px auto;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.125);
  padding: 30px;
}

.wrapper .title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 25px;
  color: #818181;
  text-transform: uppercase;
  text-align: center;
}

.wrapper .form {
  width: 100%;
}

.wrapper .form .inputfield {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.wrapper .form .inputfield label {
  width: 100px;
  color: #757575;
  margin-right: 0px;
  font-size: 14px;
}

.wrapper .form .inputfield .input,
.wrapper .form .inputfield .textarea {
  width: 100%;
  outline: none;
  border: 1px solid #d5dbd9;
  font-size: 15px;
  padding: 8px 5px;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.wrapper .form .inputfield .textarea {
  width: 100%;
  height: 125px;
  resize: none;
}

.wrapper .form .inputfield .custom_select {
  position: relative;
  width: 100%;
  height: 37px;
}

.wrapper .form .inputfield .custom_select:before {
  content: "";
  position: absolute;
  top: 12px;
  right: 10px;
  border: 8px solid;
  border-color: #d5dbd9 transparent transparent transparent;
  pointer-events: none;
}

.wrapper .form .inputfield .custom_select select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  width: 100%;
  height: 100%;
  border: 0px;
  padding: 8px 10px;
  font-size: 15px;
  border: 1px solid #d5dbd9;
  border-radius: 3px;
}

.wrapper .form .inputfield .input:focus,
.wrapper .form .inputfield .textarea:focus,
.wrapper .form .inputfield .custom_select select:focus {
  border: 1px solid #b3b3b3;
}

.wrapper .form .inputfield p {
  font-size: 14px;
  color: #757575;
}
.wrapper .form .inputfield .check {
  width: 15px;
  height: 15px;
  position: relative;
  display: block;
  cursor: pointer;
}
.wrapper .form .inputfield .check input[type="checkbox"] {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.wrapper .form .inputfield .check .checkmark {
  width: 15px;
  height: 15px;
  border: 1px solid #000000;
  display: block;
  position: relative;
}
.wrapper .form .inputfield .check .checkmark:before {
  content: "";
  position: absolute;
  top: 1px;
  left: 2px;
  width: 5px;
  height: 2px;
  border: 2px solid;
  border-color: transparent transparent #fff #fff;
  transform: rotate(-45deg);
  display: none;
}
.wrapper .form .inputfield .check input[type="checkbox"]:checked ~ .checkmark {
  background: #252522;
}

.wrapper
  .form
  .inputfield
  .check
  input[type="checkbox"]:checked
  ~ .checkmark:before {
  display: block;
}

.wrapper .form .inputfield .btn {
  width: 100%;
  padding: 8px 10px;
  font-size: 15px;
  border: 0px;
  background: #000000;
  color: #fff;
  cursor: pointer;
  border-radius: 3px;
  outline: none;
}

.wrapper .form .inputfield .btn:hover {
  background: #000000;
}

.wrapper .form .inputfield:last-child {
  margin-bottom: 0;
}

@media (max-width: 420px) {
  .wrapper .form .inputfield {
    flex-direction: column;
    align-items: flex-start;
  }
  .wrapper .form .inputfield label {
    margin-bottom: 5px;
  }
  .wrapper .form .inputfield.terms {
    flex-direction: row;
  }
}
</style>
