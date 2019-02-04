<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/JavaScript.png">
    <IntroJS msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import IntroJS from "./components/IntroJS.vue";

export default {
  name: "app",
  components: {
    IntroJS
  }
};
</script>

<style>
#app {
  font-family: "Rubik", sans-serif;
  color: #35495e;
  font-weight: 400;
  max-width: 1100px;
  margin: 0 auto;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 400;
}

p {
  line-height: 1.8;
}

img {
  width: 100px;
  max-width: 100%;
  display: block;
  margin: 0 auto;
  border-radius: 4px;
}

#footer {
  text-align: center;
}
</style>
