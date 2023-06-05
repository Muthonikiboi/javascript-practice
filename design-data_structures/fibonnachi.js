function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  // Generate the first 10 Fibonacci numbers
  for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
  }
  