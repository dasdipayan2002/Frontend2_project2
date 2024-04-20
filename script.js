document.addEventListener("DOMContentLoaded", function() {
    const decrementButton = document.getElementById('decrement');
    const incrementButton = document.getElementById('increment');
    const clearButton = document.getElementById('clear');
    const countDisplay = document.getElementById('count');
    const errorDisplay = document.getElementById('error');
  
    let count = 0;
  
    decrementButton.addEventListener('click', function() {
      if (count === 0) {
        errorDisplay.textContent = "Count cannot be negative";
        errorDisplay.style.display = 'block';
        return;
      }
      count--;
      countDisplay.textContent = count;
      if (count === 0) {
        clearButton.style.display = 'none';
      } else {
        clearButton.style.display = 'block';
      }
      errorDisplay.style.display = 'none';
    });
  
    incrementButton.addEventListener('click', function() {
      count++;
      countDisplay.textContent = count;
      clearButton.style.display = 'block';
      errorDisplay.style.display = 'none';
    });
  
    clearButton.addEventListener('click', function() {
      count = 0;
      countDisplay.textContent = count;
      clearButton.style.display = 'none';
      errorDisplay.style.display = 'none';
    });
  });
  