<template>
  <div class="hello">

    <button @click="newMatch" class="btn btn-success">Create match</button>
    <router-link to="./newMatch.html" tag="button">foo</router-link>

    <ul v-for="partido in partidos" :key="partido.admin">
      <li>Nofegweferwmbre: {{partido.nombre}}</li>
      <li>Admin: {{partido.admin}}</li>
      <li>Fecha: {{partido.fecha}}</li>
      <li>Hora: {{partido.hora}}</li>
      <li>Jugadores: {{partido.jugadores}}</li>
      <button @click="auth" class="btn btn-success">Add</button>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){return {
    partidos: [
    {
      "nombre": "Partido de Seba",
      "admin": "sebacapo36@msn.com.ar",
      "fecha": "22/05/2019",
      "hora": '20:00',
      "jugadores": []  
    },
    {
        "nombre": "Partido de Max",
        "admin": "maxcapo10@msn.com.ar",
        "fecha": "27/05/2019",
        "hora": '21:00',
        "jugadores": []        
    }
  ]

  }}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
