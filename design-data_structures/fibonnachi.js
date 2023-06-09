function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Generate the first 10 Fibonacci numbers
  for (let i = 0; i < 50; i++) {
    console.log(fibonacci(i));
  }
  //gives me an output of the first 10 Fibonacci numbers