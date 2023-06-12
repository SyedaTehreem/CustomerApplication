import { createRouter, createWebHistory } from 'vue-router';


import FormComponent from './components/AddCustomer.vue';
import CustomerList from './components/CustomerList.vue';

import EditCustomer from './components/EditCustomer.vue';



const routes = [
    { path: '/', component: CustomerList }, // Add this route for the root path
    { path: '/add', component: FormComponent },
    { path: '/customers', component: CustomerList },
    { path: '/edit/:id', name: 'edit-customer', component: EditCustomer, props: true },
     { path: '/delete/:id', name: 'delete-customer' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
