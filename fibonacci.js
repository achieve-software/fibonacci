//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...
// fibo(6) => 8
//? fibo(n) = fibo(n-1) + fibo(n-2)

const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let sum = 0;

  for (let i = 2; i < n; i++) {
    sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = sum;
  }
  return fib2;
};

const n = +prompt("Please enter n:");
if (n <= 0) {
  console.log("n should be bigger than zero");
} else {
  console.log(`FIBONACCI(${n}) = ${fibo(n)}`);
}
