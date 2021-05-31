/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios' 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sort : "",
    arrForSort: [],
    search : "",
    slySearch: "sly",
    hufSearch: "huf",
    raveSearch: "rave",
    grySearch: "gry",
    students: [],
    arraySly: [],
    arrayHuf: [],
    arrayGrif: [],
    arrayRave: [],
    studentNumberSly : 0,
    studentNumberHuf : 0,
    studentNumberGrif : 0,
    studentNumberRave : 0,
    cardObject: {name: "character"},
    cardArray : []
  },
  methods: {
  },
  mutations:{
    sortArr(state, array) {
      this.state.arrForSort = []
      array.forEach((element) => {
        this.state.arrForSort.push(element.name);
      });
      if(this.state.sort === "ByName") {
        this.state.arrForSort.sort()
        console.log("estoy aca")

      }
      else if(this.state.sort === "ByLastName") {
        this.state.arrForSort.sort((a, b) => b.split(' ')[1].localeCompare(a.split(' ')[1]));
        console.log("estoy aqui")
      }
      else {
        return
      }
    },
    changeSortMethod(state, sort) {
      this.state.sort = sort
    },
    printStudents(state) {
      axios.get('http://hp-api.herokuapp.com/api/characters')
      .then(response => {
        this.state.students = response.data
      })
      .catch( e => console.log(e))
    },
    printSly(state) {
      axios.get('http://hp-api.herokuapp.com/api/characters/house/slytherin')
      .then(response => {
        this.state.arraySly = response.data
        this.state.studentNumberSly = this.state.arraySly.length;
        this.commit("sortArr", response.data)
        //if (this.sort)
      })
      .catch( e => console.log(e))
    },
    printHuf(state) {
      axios.get('http://hp-api.herokuapp.com/api/characters/house/hufflepuff')
      .then(response => {
        this.state.arrayHuf = response.data
        this.state.studentNumberHuf = this.state.arrayHuf.length;
        this.commit("sortArr", response.data)
      })
      .catch( e => console.log(e))
    },
    printRave(state) {
      axios.get('http://hp-api.herokuapp.com/api/characters/house/ravenclaw')
      .then(response => {
        this.state.arrayRave = response.data
        this.state.studentNumberRave = this.state.arrayRave.length;
        this.commit("sortArr", response.data)
      })
      .catch( e => console.log(e))
    },
    printGrif(state) {
      axios.get('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
      .then(response => {
        this.state.arrayGrif = response.data
        this.state.studentNumberGrif = this.state.arrayGrif.length;
        this.commit("sortArr", response.data)
      })
      .catch( e => console.log(e))
    },
    arrSearch(state, studentName) {
      axios.get('http://hp-api.herokuapp.com/api/characters')
      .then(response => {
        console.log(studentName)
        this.state.students = response.data
        console.log(response.data)
        this.state.cardArray = this.state.students.filter(student => studentName === student.name)
        this.state.cardObject = this.state.cardArray[0]
      })
      .catch( e => console.log(e))
    },
    mutateSearch(state, query) {
      this.state.search = query
    }
  },
  actions:{
    ObtenerEstudiantes: function ({commit}) {
      commit('printStudents')
    }
  }
})
