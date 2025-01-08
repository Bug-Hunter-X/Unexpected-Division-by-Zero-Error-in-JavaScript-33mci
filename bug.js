function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; 
  }
  return a / b; 
}

console.log(foo(10, 0)); // Throws an error because of division by zero