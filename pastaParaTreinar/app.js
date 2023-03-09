/*********************************************
 * 
 * Autor: Kauê Lima
 * Versão: 1.0
 * Data: 09/03/23
 * 
 ********************************************/

 const listaDeCarros ={}
    

const carros =
    [ 
       {    marca: "VW",
            Modelo: 
            [
                {nome:"Gol",Valor:"R$:50.000",Marca:"Volkswagen",Ano:"2020"},
                {nome:"Jetta",Valor:"R$:80.000",Marca:"Volkswagen",Ano:"2018"},
                {nome:"Virtus",Valor:"R$:100.000",Marca:"Volkswagen",Ano:"2021"},
                {nome:"Tiguan",Valor:"R$:150.000",Marca:"Volkswagen",Ano:"2023"},
                {nome:"Golf",Valor:"R$:90.000",Marca:"Volkswagen",Ano:"2020"},
                {nome:"Passat",Valor:"R$:70.000",Marca:"Volkswagen",Ano:"2017"},
                {nome:"Amarok",Valor:"R$:250.000",Marca:"Volkswagen",Ano:"2020"},
            ]
           
           
        },
        {
            marca: "GM",
            Modelo: 
            [
                {nome:"S10",Valor:"R$:300.000",Marca:"Chevrolet",Ano:"2022"},
                {nome:"Cobalt",Valor:"R$:80.000",Marca:"Chevrolet",Ano:"2018"},
                {nome:"Tracker",Valor:"R$:100.000",Marca:"Chevrolet",Ano:"2021"},
                {nome:"Camaro",Valor:"R$:150.000",Marca:"Chevrolet",Ano:"2023"},
                {nome:"Onix",Valor:"R$:90.000",Marca:"Chevrolet",Ano:"2020"},
                {nome:"Cruze",Valor:"R$:70.000",Marca:"Chevrolet",Ano:"2020"},
            ],
        } 
        

        
    ]

    listaDeCarros.Marcas = carros   
   
    const getMarca = function(){
        let jsonLista = {}
        let lista = []

        listaDeCarros.Marcas.forEach(function(dados){
            lista.push(dados.marca)
        })
        jsonLista.marcas = lista
        return jsonLista
    }

    const getMarcaECarro = function(){
        let jsonLista = {}
        let lista = []
        listaDeCarros.Marcas.forEach(function(dados){
            lista.push({marca:dados.marca,carros:dados.Modelo})
        })
        jsonLista.marcas = lista
        return jsonLista.marcas[1]
    }

    const getModeloEValorCarro = function(carro){
        let jsonLista = {}
        let lista = []

        listaDeCarros.Marcas.forEach(function(dados){
            dados.Modelo.forEach(function(nomeCarro){
                if(carro == nomeCarro.nome){
                    lista.push({Nome:nomeCarro.nome,Valor:nomeCarro.Valor})
                    jsonLista.lista = lista
                }
            }) 
       
       
        })
        return jsonLista
       
    }

    const getCarroEAno = function(ano){
        let jsonLista = {}
        let lista = []

        listaDeCarros.Marcas.forEach(function(dados){
            dados.Modelo.forEach(function(carroNome){
                if(ano == carroNome.Ano){
                    lista.push({Modelo:carroNome.nome,Ano:carroNome.Ano,Marca:carroNome.Marca})
                    jsonLista.carro = lista
                }
            })
        })
        return jsonLista
    }


console.log(getCarroEAno("2020"));
    











   
    