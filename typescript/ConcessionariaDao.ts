import Concessionaria from "./Concessionaria";
import { DaoInterface } from "./DaoInterface";

export class ConcessionariaDao implements DaoInterface<Concessionaria> {
    nomeTabela: string = "tb_concessionaria";

    inserir(object: Concessionaria): boolean {
        console.log("Lógica de insert");
        return true;
    }

    atualizar(object: Concessionaria): boolean {
        console.log("Lógica update");
        return true;
    }

    remover(id: number): Concessionaria {
        console.log("Lógica delete");
        return new Concessionaria("", []);
    }

    selecionar(id: number): Concessionaria {
        console.log("Lógica select");
        return new Concessionaria("", []);
    }

    selecionarTodos(): Array<Concessionaria> {
        console.log("Lógica getAll");
        return [new Concessionaria("", [])];
    }
}
