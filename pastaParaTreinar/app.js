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
   












     console.log(getAnoCarro("2020"));
    