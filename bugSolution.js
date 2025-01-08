function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handle zero inputs gracefully
  }
  try {
    return a / b; 
  } catch (error) {
    if (error instanceof TypeError || error instanceof RangeError) {
      console.error("Error during division:", error.message); 
      return NaN; // Or some other appropriate default value
    } else {
      throw error; // Re-throw any other error
    }
  }
}

console.log(foo(10, 0)); // Now handles the zero division gracefully
console.log(foo(10, 'abc')); //Handles type error gracefully