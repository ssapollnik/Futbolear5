import HelloWorld from './components/HelloWorld.vue';
import newMatch from './components/newMatch.vue';

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/newMatch', component: newMatch }
];

export default routes;