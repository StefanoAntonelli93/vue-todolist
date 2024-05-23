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
    inputText: 'inserisci nuovo to Do',
    };
  },

  methods: {
    //   creo metodo per cancellare toDo
    clearToDo(index) {
        console.log('cancello toDo');
        this.toDo.splice(index, 1);
    },
    // creo metodo per cancellare testo default in input
    clearInput() {
        console.log('clicco su input');
        this.inputText = '';
    },
    // creo funzione per aggiungere nuovi toDo
    addToDo() {
        console.log('aggiungi toDo');
        console.log(this.inputText);
        // definisco variabile dove inserisco nuovo testo in input
        const myToDo = {
            text: this.inputText,
            // se falso non viene sbarrato
            done: false,
        }
        // pushare nuovo toDo nella lista
        this.toDo.push(myToDo);
        // ogni volta che si clicca bottone il campo di input si svuota
        this.inputText = null;
    }
  }

}).mount('#app')

