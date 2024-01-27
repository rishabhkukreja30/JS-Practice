// console.log(a);

// var a = 5;

// function x() {
//   console.log("Hi, I am x");
// }

// setTimeout(x, 5000);

// const arr = [1, 5, 7, 8, 4];

// const output = arr.map((x) => x * 2);

// console.log(output);

// console.log(arr.filter((x) => x <= 7));

// console.log(
//   arr.reduce((acc, curr) => {
//     acc = acc + curr;
//     return acc;
//   })
// );

// const y = 5;

// function createOrder() {
//   const p = new Promise((resolve, reject) => {
//     if (y === 5) {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }

//     const ordeerId = "123";
//     resolve(ordeerId);
//   });

//   return p;
// }

// console.log(createOrder().catch((err) => console.log(err)));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved")
  }, 10000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise is resolved")
  }, 1000)
})


async function handlePromise() {
  console.log("Hello world");

  const val1 = await p1;
  console.log("Rishabh Rocks !!")
  console.log(val1);

  const val2 = await p2;
  console.log("Rishabh Rocks 2!!")
  console.log(val2)
}


handlePromise()