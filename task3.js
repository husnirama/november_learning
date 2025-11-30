// TASK 1
// 1. add properties
// const a = {name : "husni"};
// const new_a = {...a, age : 33};
// console.log(new_a);

// 2. delete properties
// const user = { name: "ani", password: "secret" };
// const {password, ...safeUser} = user;
// console.log(safeUser);

// 3. update object
// const updateUser = {
//     ...new_a,
//     age : 31
// };
// console.log(updateUser);

// TASK 2
const product = {
  id: 1,
  info: {
    name: "Laptop",
    brand: { main: "Apple", alt: "Mac" },
    specs: { ram: "16GB", cpu: "M1", storage: "512GB" }
  }
};

// const {id, ...productSpec} = product;
// const name = productSpec.info.name;


// const {main, ...brand} = productSpec.info.brand;
// console.log(main);

// const {ram, ...specs} = productSpec.info.specs;
// console.log(ram);

// const {cpu, ...specification} = productSpec.info.specs;
// console.log(cpu);

const {
  info: {
    name,
    brand: { main },
    specs: { ram, cpu }
  }
} = product;

console.log(name, main, ram, cpu);

// TASK 3
const user = {
  id: 1,
  name: "husni",
  password: "secret123",
  token: "XYZ",
  role: "admin"
};

const {password, token, ...userDesc} = user;
console.log(userDesc);

const a = {x: 1};
const b = {y: 2};
const c = {z: 3};

const d = {
    ...a,
    ...b,
    ...c
};
console.log(d);

const sumNumber = numbers =>
    numbers
    .reduce((sum, n) => sum + n);

const avgNumber = numbers =>
    numbers
    .reduce((avg, n) => avg + n);
    return avg/numbers.length;

numbers = [10,20,30];
console.log(sumNumber(numbers));
console.log(avgNumber(numbers));




