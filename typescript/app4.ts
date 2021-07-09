import Concessionaria from "./Concessionaria";
import { ConcessionariaDao } from "./ConcessionariaDao";

import Pessoa from "./Pessoa";
import { PessoaDao } from "./PessoaDao";

let dao = new ConcessionariaDao();
let concessionaria = new Concessionaria("", []);

dao.inserir(concessionaria);

let dao2 = new PessoaDao();
let pessoa = new Pessoa("", "");

dao2.atualizar(pessoa);
