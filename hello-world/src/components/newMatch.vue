<template>
  <div id="newMatch" class="newMatch">
    <p>
    <label for="name">Nombre</label>
    <input
      id="name"
      v-model="partidoNuevo.nombre"
      type="text"
      name="name"
    >
  </p>

    <p>
    <label for="admin">Admin</label>
    <input
      id="admin"
      v-model="partidoNuevo.admin"
      type="text"
      name="admin"
    >
  </p>

    <p>
    <label for="fecha">Fecha</label>
    <input
      id="fecha"
      v-model="partidoNuevo.fecha"
      type="text"
      name="fecha"
    >
  </p>

  <p>
    <label for="hora">Hora</label>
    <input
      id="hora"
      v-model="partidoNuevo.hora"
      type="text"
      name="hora"
    >
  </p>

  <button @click.prevent="agregarPartido" class="btn btn-success">Crear</button>
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
    }}
  },
  methods: {
    agregarPartido() {
      const partido = {nombre: null, admin: null, fecha: null, hora: null}
      partido.nombre = this.partidoNuevo.nombre
      partido.admin = this.partidoNuevo.admin
      partido.fecha = this.partidoNuevo.fecha
      partido.hora = this.partidoNuevo.hora
      console.log(JSON.stringify(partido))
      this.partidos.push(partido)
      this.inicializarNuevoPartido()
      },
      
      inicializarNuevoPartido(){
        this.partidoNuevo.nombre = null
        this.partidoNuevo.estreno = null
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
