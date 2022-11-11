//Getting UI Variables
const error = document.getElementById('error');
const num1 = document.getElementById('value1');
const num2 = document.getElementById('value2');
const theOutput = document.getElementById('output');
const button = document.getElementById('submit-btn');

// Listen for submit
document.getElementById('ack-form').addEventListener('submit', function(e){
    
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Show loader
    document.getElementById('loading').style.display = 'block';

    // Clear any value stored
    theOutput.value = '';
    error.classList.add('d-none');
    button.setAttribute('disabled', '')

    // Set TimeOut to compute the Ackermann function
    setTimeout(calculateResults, 1000);  
    
    e.preventDefault();

    // Check to see if Ackermann function was computed
    setTimeout(()=> {
        if (Number.isInteger(parseInt(theOutput.value))) {
            console.log('okay');        
           } else {
            error.innerText = "Too large to represent, try other numbers";  
            error.classList.remove('d-none')    
            document.getElementById('loading').style.display = 'none';
           }
    }, 2000) 

    setTimeout(()=>{
        button.removeAttribute('disabled');
    }, 2000)
});

    // Calculate Results
    function calculateResults(e){
    console.log('Calculating...');

    //Ackermann Calculations
    const myM = num1.value;
    const myN = num2.value;

   // Compute Ackermann function
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

   //Store answer in a variable
   var answer = ack(myM, myN)
   
   //Calling the function
   theOutput.value = answer; 
                                   
   // Show results
   document.getElementById('results').style.display = 'block';

   // Hide loader
   document.getElementById('loading').style.display = 'none';

}
