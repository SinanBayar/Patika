console.log("ÖNEMLİ BİR BİLDİRİM TEST");

class Employee {
    sayName(name) {
        console.log(`Benim adım: ${name}`);
    }
}
let employee1 = new Employee();
employee1.name = "Sinan";

console.log(employee1);