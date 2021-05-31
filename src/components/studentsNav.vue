<template>
  <div class=Navbar>
    <b-navbar toggleable type="dark" variant="dark">
      <b-navbar-brand href="#">Magic Houses</b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse2">
        <template #default="{ expanded }">
          <span v-if="expanded" class="text-white bg-dark">Thanks Dumbledore</span>
          <span v-else class="text-white bg-dark">Ask To Dumbledore</span>
        </template>
      </b-navbar-toggle>


      <b-collapse id="navbar-toggle-collapse2" is-nav>
        <div class="divMayorClases">
        <div href="#" id="Gryffindor">Gryffindor
          <img id="Grif" src="../assets/Grif.png"/>
            <button class="btn btn-danger" @click="printGrif(); prepareListRender(grySearch);"> students </button>
          <h5> students : {{studentNumberGrif}} </h5>
        </div>


        <div href="#" id="Slytherin">‏‏‎ ‎‏‏‎ ‎Slytherin‎‏
          <img id="Sly" src="../assets/Sly.png"/>
              <button class="btn btn-success" @click="printSly(); prepareListRender(slySearch)"> students </button>
          <h5> students : {{studentNumberSly}} </h5>


        </div>
        <div href="#" id="Hufflepuff">Hufflepuff
          <img id="Huf" src="../assets/Huf.png"/>
            <button class="btn btn-warning" @click="printHuf(); prepareListRender(hufSearch)"> students </button>
          <h5> students : {{studentNumberHuf}} </h5>
        </div>


        <div href="#" id="Ravenclaw">Ravenclaw
          <img id="Rave" src="../assets/Rave.png"/>
              <button class="btn btn-secondary" @click="printRave(); prepareListRender(raveSearch);"> students </button>
          <h5> students : {{studentNumberRave}} </h5>
        </div>


        </div>
        <b-navbar-nav class="ml-auto">
          <div>
            <b-form-checkbox
              id="checkbox-w"
              v-model="status"
              name="checkbox-2"
              value="ByName"
              unchecked-value="no"
              class="text-white bg-dark"
              @change="prepareSort(status)"
              >
              ByName
            </b-form-checkbox>
            <b-form-checkbox
              id="checkbox-3"
              v-model="status"
              name="checkbox-3"
              value="ByLastName"
              unchecked-value="yes"
              class="text-white bg-dark"
              @change="prepareSort(status)"
              >
                ByLastname
            </b-form-checkbox>
    <div class="text-white bg-dark">State: <strong>{{ status }}</strong></div>
  </div>


      </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex'


  export default {
    data() {
    return {
      text: '',
      status: 'original'
      }
    },
  computed:{
    ...mapState(['students', 'arraySly', 'arrayHuf', 'arrayGrif',
    'arrayRave', 'studentNumberSly', 'studentNumberHuf', 'studentNumberRave',
     'studentNumberGrif', 'cardArray', 'cardObject', 'slySearch', 'hufSearch',
    'raveSearch', 'grySearch', 'search', 'sort'])
  },
  methods: {
    ...mapMutations(['printStudents', 'printSly', 'printHuf', 'printGrif', 'printRave', 'prepareListRender',
     'mutateSearch', 'changeSortMethod']),
    ...mapActions(['obtenerEstudiantes']),
      prepareListRender(query) {
        this.mutateSearch(query)
      },
      prepareSort(sort) {
        this.changeSortMethod(sort)
        console.log(sort)
      }
  }
}

</script>

<style lang="scss">
.divMayorClases {
  align-items: flex-end
}

#mySidenav div:hover {
  left: 0; /* On mouse-over, make the elements appear as they should */
}

/* The Slytherin link: 20px from the top with div green background */
#Slytherin {
  top: 181px;
  background-color: #085a00;
  
}
#Sly {
    max-width: 5%;
    height: auto;
    position: float;
    right: 150px;
    border: 3px solid green;
}


#Hufflepuff {
  top: 307px;
  background-color: #a4c008; /* Blue */
}
#Huf {
    max-width: 5%;
    height: auto;
    position: float;
    right: 150px;
    border: 3px solid rgb(211, 207, 5);
}

#Gryffindor {
  top: 55px;
  background-color: #f44336; /* Red */
}
#Grif {
    max-width: 5%;
    height: auto;
    position: float;
    right: 150px;
    border: 3px solid rgb(212, 8, 8);
}

#Ravenclaw {
  top: 433px;
  background-color: rgb(52, 2, 92)
}
#Rave {
    max-width: 5%;
    height: auto;
    position: float;
    right: 150px;
    border: 3px solid rgb(48, 5, 83);
}
</style>