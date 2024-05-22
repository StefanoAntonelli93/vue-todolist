'use strict';

console.log('ok');

const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Toboolist with vue!',
      toDo: [
        {
            text: 'Quarterly Newsletter',
            done: true,
        },
        {
            text: 'Recruting blog post',
            done: true,
        },
        {
            text: 'Mobile app launch',
            done: true,
        },
        {
            text: ' Interview John H.',
            done: false,
        },
        {
            text: 'Summit update to mobile storefronts',
            done: true,
        },
        {
            text: ' Schedule meeting with Alex',
            done: false,
        },
        {
            text: 'Homepage refresh',
            done: false,
        },
        {
            text: 'Onboard new Sales team members',
            done: true,
        },
        {
            text: 'Review editorial calendar',
            done: true,
        },
    ],
    currentIndex : 0,
    };
  },
//   creo metodo per cancellare toDo
  methods: {
    clearToDo(index) {
        console.log('cancello toDo');
        this.toDo.splice(index, 1);
        this.done = 'cancellato!';
    },
  }

}).mount('#app')

