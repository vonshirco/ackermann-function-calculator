// Listen for submit
document.getElementById('ack-form').addEventListener('submit', function(e){
    
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Show loader
    document.getElementById('loading').style.display = 'block';

    // Set TimeOut
    setTimeout(calculateResults, 1000);
    
    e.preventDefault();
});

    // Calculate Results
    function calculateResults(e){
    console.log('Calculating...');

    //Getting UI Variables
    const  num1 = document.getElementById('value1');
    const num2 = document.getElementById('value2');

    const theOutput = document.getElementById('output');

    //Calculations
    const myM = num1.value;
    const myN = num2.value;

   // Compute Ackermann
   function ack(m,n){
    if (m == 0)
        {
            return n + 1;
        }
        else if((m > 0) && (n == 0))
        {
          return ack(m - 1, 1);
        }
        else if((m > 0) && (n > 0))
        {
            return ack(m - 1, ack(m, n - 1));
        }else{
           return n + 1;
       }
   }
   
   //Calling the function
   theOutput.value = ack(myM, myN);

   // Show results
   document.getElementById('results').style.display = 'block';

   // Hide loader
   document.getElementById('loading').style.display = 'none';

}