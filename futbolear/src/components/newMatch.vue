<template>
  <div id="newMatch" class="newMatch">
    <div>
      <div style="margin-right: 10px">
    <label for="name">Nombre</label>
      </div>
      <div>
    <input
      id="name"
      v-model="partidoNuevo.nombre"
      type="text"
      name="name"
    >
      </div>
  </div>

<div>
      <div style="margin-right: 10px">
        <label for="admin">Admin</label>
      </div>
      <div>
    <input
      id="admin"
      v-model="partidoNuevo.admin"
      type="text"
      name="admin"
    >  </div>
  </div>

    <div>
      <div style="margin-right: 10px">
    <label for="fecha">Fecha</label>
      </div>
      <div>
    <input
      id="fecha"
      v-model="partidoNuevo.fecha"
      type="text"
      name="fecha"
    >  </div>
  </div>

  <div>
      <div style="margin-right: 10px">
      <label for="hora">Hora</label>
      </div>
      <div>
    <input
      id="hora"
      v-model="partidoNuevo.hora"
      type="text"
      name="hora"
    >  </div>
  </div>

<div style="margin-top: 10px">
  <button @click.prevent="agregarPartido" class="btn btn-success">Crear</button></div>
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
      partidos: [],
      partidoNuevo: {
        nombre: null,
        admin: null,
        fecha: null,
        hora: null
      },
      //url: "https://demo8070547.mockable.io/add"
      url: "https://my-json-server.typicode.com/ssapollnik/Futbolear5/posts"
    }
  },
  methods: {
    /*agregarPartido() {
      const partido = {nombre: null, admin: null, fecha: null, hora: null}
      partido.nombre = this.partidoNuevo.nombre
      partido.admin = this.partidoNuevo.admin
      partido.fecha = this.partidoNuevo.fecha
      partido.hora = this.partidoNuevo.hora
      console.log(JSON.stringify(partido))
      this.partidos.push(partido)
      this.inicializarNuevoPartido()
    },
    */
    agregarPartido() {
      this.axios.post(this.url, this.partidoNuevo).then(response => {
        console.log(response);
        let nuevoPartido = response.data;
        this.partidos.push(nuevoPartido);
        this.inicializarNuevoPartido();
      });
    }, 
      
    inicializarNuevoPartido(){
      this.partidoNuevo.nombre = null
      this.partidoNuevo.admin = null
      this.partidoNuevo.fecha = null
      this.partidoNuevo.hora = null
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
