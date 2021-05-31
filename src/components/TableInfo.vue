<template>
<div class="parent">

  <div class="children-1 d-flex justify-content-center">
    <div class="mx-auto mt-4">
      <template v-if="search === slySearch">
        <ul v-for="student of arrForSort" :key="student.name" id="buttons"> 
          <button @click="select" :id="student" type="button" class="list-group-item list-group-item-action">{{student}}</button>
        </ul>
      </template>


      <template v-if="search === grySearch">
        <ul v-for="student of arrForSort" :key="student.name" id="buttons"> 
          <button @click="select" :id="student" type="button" class="list-group-item list-group-item-action">{{student}}</button>
        </ul>
      </template>


      <template v-if="search === hufSearch">
        <ul v-for="student of arrForSort" :key="student.name" id="buttons"> 
          <button @click="select" :id="student" type="button" class="list-group-item list-group-item-action">{{student}}</button>
        </ul>
      </template>

      
      <template v-if="search === raveSearch">
        <ul v-for="student of arrForSort" :key="student.name" id="buttons"> 
          <button @click="select" :id="student" type="button" class="list-group-item list-group-item-action">{{student}}</button>
        </ul>
      </template>
    </div>


  <div class="mt-5 mr-5 mb-5">
    <b-card
      no-body
      style="max-width: 20rem;"
    >
    <template #header>
      <h4 class="mb-0">{{cardObject.name}}</h4>
    </template>

    <b-card-body>
      <b-card-title>BLOOD</b-card-title>
      <b-card-title class="mb-2">{{cardObject.ancestry}}</b-card-title>
    </b-card-body>

      <b-card-footer>HOUSE {{cardObject.name}}</b-card-footer>
      <b-card-img :src="cardObject.image" alt="Image" bottom></b-card-img>
    </b-card>
</div>

  </div>
  
  <div class="children-2">
  </div>
</div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'


export default {
  computed:{
    ...mapState(['students', 'arraySly', 'arrayHuf', 'arrayGrif',
    'arrayRave', 'studentNumberSly', 'studentNumberHuf', 'studentNumberRave',
     'studentNumberGrif', 'cardArray', 'cardObject', 'slySearch', 'hufSearch',
    'raveSearch', 'grySearch', 'search', 'arrForSort'])
    // sort aca  
  },
  methods: {
        select: function(event) {
            this.arrSearch(event.currentTarget.id)
        },
    ...mapMutations(['printStudents', 'printSly', 'printHuf', 'printGrif', 'printRave', 'arrSearch']),
    ...mapActions(['obtenerEstudiantes'])
  }
}
</script>

<style>
.parent {
  height: 120%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.children-1 {
  width: 50%;
  background: rgb(0, 0, 0);

}

.children-2 {
  width: 50%;
  background: rgb(0, 0, 0);
  background-image: url("../assets/hogwartss.jpg");
  background-repeat: no-repeat;
  background-position: right;
}


</style>
