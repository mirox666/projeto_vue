const app = Vue.createApp({
    data(){
        return{
            bloco:{
                inicio:true,
                idade:false,
                cambio:false,
                diaSemana:false,
                desconto:false
            },
            mensagem: {
                'idade' : "Cálculo da idade a partir do ano de nascimento inserido pelo usuário",
                'cambio': "Cálculo do valor em reais a partir de um valor em dólar e cotação inserida pelo usuário",
                'diaSemana' : "Exibir o dia da semana a partir de uma data inserida pelo usuário",
                'desconto' : "Calcular  o  resultado  a  partir  de  um  valor  base  e  o percentual de desconto indicados pelo usuário"
            },
            textoInicial:'Olá, Seja Bem Vindo ao Nosso Sistema'
        }
    },
    methods:{
        verificarLink(classe){
        //console.log(classe[1])
        let itens = classe[1]// Um parâmetro que irá conter um vetor com as classes da tag na qual a função está sendo chamada.
        //for..in permite percorrer um objeto    
        for(elementos in this.bloco)
        //console.log(elementos)
        if(itens == elementos){
            this.bloco[elementos] = true
            this.textoInicial = this.mensagem[elementos]
        }
        else{
            this.bloco[elementos] = false
        }
        }
    }
})

app.mount("#app")