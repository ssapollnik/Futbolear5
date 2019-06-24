<template>
  <div>
  <!--
    <div id="tablaPartidos">
    <b-table striped hover :items="partidos">
    </b-table>
  </div>
  
    -->
  <div id="lista">
    <h1>Detalles del partido</h1>
    <ul v-for="partido in partidos" :key="partido.admin">
      <h2>Partido de {{partido.nombre}}</h2>
      <li>Admin: {{partido.admin}}</li>
      <li>Fecha: {{partido.fecha}}</li>
      <li>Hora: {{partido.hora}}</li>
      <li>Direccion: {{partido.direccion}}</li>
      <button @click.prevent="unirAPartido" class="btn btn-success">Unirme al partido</button>
    </ul>
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'futbolear',
  props: {
    msg: String
  },
  data(){
    return {
      partidos: [],
      partidoSeleccionado: null,
      url: "https://my-json-server.typicode.com/ssapollnik/Futbolear5/get?id=" + this.$route.params.id,
      urlPost: "https://my-json-server.typicode.com/ssapollnik/Futbolear5/posts"
    }
  },
  created() {
    this.axios.get(this.url).then(respuesta => {
      this.partidos = respuesta.data;
    });
  },
  methods: {
    async getPartido(partidoId) {
      let partido = await this.axios.get(`${this.url}/${partidoId}`);
      this.partidoSeleccionado = partido
    },

    unirAPartido() {
      this.axios.post(this.urlPost).then(response => {
        let nuevoJugador = response.data;
        console.log(nuevoJugador);
      });
    }

  } 
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
