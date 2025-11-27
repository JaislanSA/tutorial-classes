import Customer from "./Customer";

const customer1 = new Customer("Alice","contato@alice.com.br", new Date("1990-05-15"));
const customer2 = new Customer("Araujo", "contato@araujo.com.br", new Date("1983-05-18"));
console.log(customer1, isAdult());
console.log(customer2, isAdult());