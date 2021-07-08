"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
// Criar carros
var carroA = new Carro_1.default("Dodge Journey", 4);
var carroB = new Carro_1.default("Veloster", 3);
var carroC = new Carro_1.default("Cerato", 4);
// Montar a lista de carros da concessionária
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default("Av. Paulista, 123", listaDeCarros);
// Exibir a lista de carros
// console.log(concessionaria.mostrarListaDeCarros());
// Comprar o carro
var cliente = new Pessoa_1.default("João", "Veloster");
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro.modelo === cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
