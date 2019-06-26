<template>
  <div id="newMatch" class="newMatch">
    <div>
      <div style="margin-right: 10px">
    <label for="name">Nombre</label>
      </div>
      <div>
    <input
      id="name"
      v-model="jugadorNuevo.nombre"
      type="text"
      name="name"
    >
      </div>
  </div>

<div>
      <div style="margin-right: 10px">
    <label for="fecha">Apellido</label>
      </div>
      <div>
    <input
      id="fecha"
      v-model="jugadorNuevo.apellido"
      type="text"
      name="apellido"
    >  </div>
  </div>

<div>
      <div style="margin-right: 10px">
        <label for="admin">Admin</label>
      </div>
      <div>
    <input
      id="admin"
      v-model="jugadorNuevo.mail"
      type="text"
      name="mail"
    >  </div>
  </div>

<div style="margin-top: 10px">
  <button @click.prevent="agregarPartido" class="btn btn-success">Crear jugador</button></div>
  </div>
</template>

<script>
export default {
name: 'newMatch',
  props: {
    msg: String
  },
  data() {
    return {
      jugadores: [],
      jugadorNuevo: {
        nombre: null,
        apellido: null,
        mail: null
      },
      //url: "https://demo8070547.mockable.io/add"
      url: "https://my-json-server.typicode.com/ssapollnik/Futbolear5/posts"
    }
  },
  methods: {
    agregarJugador() {
      this.axios.post(this.url, this.jugadorNuevo).then(response => {
        console.log(response);
        let nuevoJugador = response.data;
        this.jugadores.push(nuevoJugador);
        this.inicializarNuevoPartido();
      });
    }, 
      
    inicializarNuevoJugador(){
      this.jugadorNuevo.nombre = null
      this.jugadorNuevo.apellido = null
      this.jugadorNuevo.mail = null
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
