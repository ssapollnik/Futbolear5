import homePartidos from './components/home.vue';
import newMatch from './components/newMatch.vue';
import newPlayer from './components/newPlayer.vue';
import detalles from './components/detalles.vue';

const routes = [
    { path: '/', component: homePartidos },
    { path: '/newMatch', component: newMatch },
    { path: '/detalles/:id', component: detalles },
    { path: '/newPlayer', component: newPlayer }
];

export default routes;