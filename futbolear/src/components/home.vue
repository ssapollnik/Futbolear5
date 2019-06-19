<template>
  <div>
    <div id="tablaPartidos">
    <b-table striped hover :items="partidos">
    </b-table>
  </div>
  <div id="lista">
    <ul v-for="partido in partidos" :key="partido.admin">
      <li>Nombre: {{partido.nombre}}</li>
      <li>Admin: {{partido.admin}}</li>
      <li>Fecha: {{partido.fecha}}</li>
      <li>Hora: {{partido.hora}}</li>
      <button class="btn btn-success">Entrar</button>
    </ul>
  </div>
  </div>
</template>

<script>
//import PartidoService from "./services/partido.services";

export default {
  name: 'futbolear',
  props: {
    msg: String
  },
  data(){
    return {
      partidos: [],
      partidoSeleccionado: null,
      url: "https://demo8070547.mockable.io/partido"
    }
  },
  created() {
    this.axios.get(this.url).then(respuesta => {
      //console.log(respuesta);
      this.partidos = respuesta.data;
    });
  },
  methods: {
    async getPartido(partidoId) {
      let partido = await this.axios.get(`${this.url}/${partidoId}`);
      this.partidoSeleccionado = partido;
    },
    async eliminar(partidoId) {
      
      try {
        let response = await this.axios.delete(`${this.url}/${partidoId}`);
        //console.log(response);
        this.partidos.splice(this.partidos.indexOf(partido), 1);
      } catch (error) {
        this.showAlert = true;
        this.mensajeAlert = "No se pudo eliminar el partido";
      }
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
