"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = "";
    }
    Dao.prototype.inserir = function (object) {
        console.log("Lógica de insert");
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log("Lógica update");
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log("Lógica delete");
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log("Lógica select");
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log("Lógica getAll");
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
