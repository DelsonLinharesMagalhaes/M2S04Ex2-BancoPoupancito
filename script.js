class Conta{
    #saldo;
    #senha;
    constructor(saldo, senha){
        this.#saldo = saldo;
        this.#senha = senha;
    }

    deposito(valor,senha){
        if(senha == this.#senha){
            this.#saldo += valor;
            return `Seu saldo é de ${this.#saldo}`;

        }
        return "Senha incorreta!"
    }

    retirada(valor,senha){
        if(senha == this.#senha){
            if(valor< this.#saldo){
                this.#saldo-=valor;      
                return `Seu saldo é de ${this.#saldo}`;         
            }
            else {
                return "Saldo insuficiente"
            }
        }
        console.log("Senha incorreta!")
    }
}

const contaSaldo = new Conta(500, 123456);
console.log(contaSaldo.deposito(100,12345))
console.log(contaSaldo.deposito(100,123456))
console.log(contaSaldo.retirada(5000,123456))
console.log(contaSaldo.retirada(50,12346))
console.log(contaSaldo.retirada(50,123456))