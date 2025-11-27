export default class Customer {

    nome: string;
    age: number;
    email: string;
    birthDate: Date = new Date();

    constructor(nome: string, email: string, birthDate: Date)

    {
        this.nome = nome;
        this.email = email;
        this.age = new Date().getFullYear() - birthDate.getFullYear();
        this.birthDate = birthDate;
    }
    isAdult(){
        return this.age >= 18;  
    
    }

    getFirstName(){
        return this.nome.split(" ")[0];
    }
}