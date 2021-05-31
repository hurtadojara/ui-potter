<template>
  <div id="app">
    <Navbar/>
    <tableInfo/>
    <studentsNav/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import TableInfo from './components/TableInfo.vue'
import StudentsNav from './components/studentsNav.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    TableInfo,
    StudentsNav
  }
  }
</script>

<style lang="scss">
@font-face {
  font-family: "MyPotter";
  src: local("Parry Hotter"),
  local("Parry Hotter Bold"),
  url(./assets/ParryHotter.ttf);
  font-weight: bold;
}

#app {
  font-family: MyPotter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #010407;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  }
  html, body {
    height: 100%;
    margin: 0;
  }
  body {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
