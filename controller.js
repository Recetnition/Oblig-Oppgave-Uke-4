   // controller
   
   function startGame() {
       counter = null;
       guessNumber = null;
       secretNumber = Math.ceil(Math.random() * 1000);
       updateView();
   }

   function guess() {
       updateView();
   }
   
   function incrementCounter() {
       counter += pointsPerClick;
       updateView()
       
   }
  
  function checkNumber() {
    if (secretNumber < 1000 && secretNumber > 0) return true;
    else return false

} 
