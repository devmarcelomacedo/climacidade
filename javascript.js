// background https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MnwxfDB8MXxyYW5kb218MHx8bGFuZHNjYXBlfHx8fHx8MTY4MTc3NDAyMg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600

// Lupa  https://www.svgrepo.com/show/488200/find.svg

//   https://openweathermap.org/

// nuvem https://openweathermap.org/img/wn/04n.png

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const key = "a73f40f67778e172d8fc68c19000b1be"

function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".tempo").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
   

}


async function buscarCidade(cidade) {


    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    colocarDadosNaTela(dados)
   

}

function cliqueiNoBotao() {

        const cidade = document.querySelector(" .input-cidade").value

       buscarCidade(cidade)
}