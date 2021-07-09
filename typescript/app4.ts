import Concessionaria from "./Concessionaria";
import { ConcessionariaDao } from "./ConcessionariaDao";

import Pessoa from "./Pessoa";
import { PessoaDao } from "./PessoaDao";

import { Dao } from "./Dao";

let dao = new ConcessionariaDao();
let concessionaria = new Concessionaria("", []);

dao.inserir(concessionaria);

let dao2 = new PessoaDao();
let pessoa = new Pessoa("", "");

dao2.atualizar(pessoa);

let dao3 = new Dao<Concessionaria>();
dao3.inserir(concessionaria);

let dao4 = new Dao<Pessoa>();
dao4.remover(5);
