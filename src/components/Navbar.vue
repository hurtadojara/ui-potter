<template>
  <div class=Navbar>
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="#">HOGWARTS</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <span v-if="expanded" class="text-white bg-dark">Thanks Dumbledore</span>
          <span v-else class="text-white bg-dark">Ask To Dumbledore</span>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <div>
      <span class="text-white bg-dark"> Ask for a student </span>
      <br/>
      <br/>
      <div>
        <b-form-input v-model="text" placeholder="Enter student name EX : Harry Potter" class="text-white bg-dark"
        @keyup.enter="arrSearch(text)">
        </b-form-input>
      </div>

    </div>
      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
  export default {
          computed:{
    ...mapState(['students', 'arraySly', 'arrayHuf', 'arrayGrif',
    'arrayRave', 'studentNumberSly', 'studentNumberHuf', 'studentNumberRave',
     'studentNumberGrif', 'cardArray', 'cardObject', 'slySearch', 'hufSearch',
    'raveSearch', 'grySearch', 'search'])
      },
    data() {
      return {
        text: '',
        status: 'original'
      }
    },
    methods: {
      //metodo sombrilla
      prepareListRender(query) {
        console.log(query)
        this.mutateSearch(query)
      },
      ...mapMutations(['printStudents', 'printSly', 'printHuf', 'printGrif', 'printRave', 'arrSearch', 'mutateSearch']),
    }
  }
</script>

<style lang="scss">
.Navbar div{
  font-family: MyHelvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e9edf1;
}

</style>