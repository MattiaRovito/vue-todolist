
//TODO Stampare in pagina un item per ogni elemento contenuto in un array


//TODO Ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista


//TODO Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista 



const app = new Vue ({

    el : "#app",


    data :
    {
        nuovaLista : '',
        lista : [
            'Organizzare il trasloco',
            'Fare la spesa',
            'Mandare e-mail a J.J.'
        ]
    },


    methods :
    {
        capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        pushToDo(){
            if (this.nuovaLista == ''){
                alert('Inserire del testo');
            }else{
            this.lista.push(this.nuovaLista.toUpperCase(1));
            this.nuovaLista = '';
            }
        } 
    }
});



