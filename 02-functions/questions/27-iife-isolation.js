// Q27: IIFE for Variable Isolation

// Used to avoid global scope pollution

(function(){
  const password = "secret password";
  console.log(password);
})();