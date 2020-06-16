// All code developed by Tom Eric Parkinson, June 2020.

const colorInput = document.querySelector('#colorPicker'); // Select color input
const inpWidth = document.querySelector('#inputWidth'); // Select width input
const inpHeight = document.querySelector('#inputHeight'); // Select height input
const formSubmit = document.querySelector('#sizePicker'); // Selects the form
const table = document.querySelector('#pixelCanvas'); // Selects the table

// When size is submitted by the user, call makeGrid()
formSubmit.addEventListener('submit', makeGrid);

function makeGrid (evt) {
  table.innerHTML = ''; // Clears the table.
  evt.preventDefault(); // Prevents the page from refreshing on submit.

  if (inpHeight.value < 5 || inpWidth.value < 5) { // Validates the table size isn't too small.

    alert('Please enter a grid size larger or equal to 5x5!'); // Alerts user.

  } else if (inpHeight.value > 30 || inpWidth.value > 30) { // Validates the table size isn't too big.

    alert('Please enter a grid size no larger than 30x30!'); // Alerts user.

  } else { // If the above conditions are passed, do the following:
      for (let row = 0; row < inpHeight.value; row++) { // For loop to create the rows.
        // The two lines below create a new tr element and then appends it to the table.
        const tableRow = document.createElement('tr');
        table.appendChild(tableRow);

        for (let col = 0; col < inpWidth.value; col++) { // Nested loop to create columns.
          // The two lines below create a new column and then appends it to the table row.
          const tableColumn = document.createElement('td');
          tableRow.appendChild(tableColumn);
        }
      }
      // Adds event listener to the TD elements only using the nodeName property.
      table.addEventListener('click', function (evt) {
        if (evt.target.nodeName === 'TD') {
          // Colours the td the same colour as the currently selected colour in the colour picker.
          evt.target.style.backgroundColor = colorInput.value;
        }
      });
  }
}
