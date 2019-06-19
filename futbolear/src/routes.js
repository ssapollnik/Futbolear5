import homePartidos from './components/home.vue';
import newMatch from './components/newMatch.vue';

const routes = [
    { path: '/', component: homePartidos },
    { path: '/newMatch', component: newMatch }
];

export default routes;