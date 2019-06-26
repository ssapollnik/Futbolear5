<template>
  <div>

  <h1>Partidos</h1>

  <div id="lista">
    <ul v-for="partido in partidos" :key="partido.admin">
      <li>Nombre: {{partido.nombre}}</li>
      <li>Admin: {{partido.admin}}</li>
      <li>Fecha: {{partido.fecha}}</li>
      <li>Hora: {{partido.hora}}</li>
      <button class="btn btn-success" @click.prevent="getPartido(partido.id)"><router-link v-bind:to="'/detalles/' + partido.id"> Entrar</router-link></button>
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
      url: "https://my-json-server.typicode.com/ssapollnik/Futbolear5/get"
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
      this.partidoSeleccionado = partido;
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
