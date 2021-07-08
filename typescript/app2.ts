import Carro from "./Carro";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";

// Criar carros
let carroA = new Carro("Dodge Journey", 4);
let carroB = new Carro("Veloster", 3);
let carroC = new Carro("Cerato", 4);

// Montar a lista de carros da concessionária
let listaDeCarros: Array<Carro> = [carroA, carroB, carroC];

let concessionaria = new Concessionaria("Av. Paulista, 123", listaDeCarros);

// Exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros());

// Comprar o carro
let cliente = new Pessoa("João", "Veloster");

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {
    if (carro["modelo"] === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});

console.log(cliente.dizerCarroQueTem());
