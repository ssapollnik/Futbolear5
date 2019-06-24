import homePartidos from './components/home.vue';
import newMatch from './components/newMatch.vue';
import detalles from './components/detalles.vue';

const routes = [
    { path: '/', component: homePartidos },
    { path: '/newMatch', component: newMatch },
    { path: '/detalles/:id', component: detalles }
];

export default routes;