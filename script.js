let drawColor = "#424141"

 //here we crate the function drawGrid
   //we need a way to give it (number)
   // here we set the variable newDiv to create a new div element in the document
   // to this newDiv element we add the class "pixel"
   // we then append newDiv to the "container" div in the html file
	function drawGrid(number) { 
        for (let i = 0; i < number * number; i++) { 
            let newDiv = document.createElement('div');
            newDiv.classList.add('pixel');
            container.appendChild(newDiv);
			
			
			// here we are setting the allSquares variable to latch onto each pixel
			// now for allSquares for each pixel we add an event listener for when we mouseover it, which activates the function
			//the event references itself and changes the background colour to the specified shade when the pixel is moused over
            let allSquares = document.querySelectorAll('.pixel');
            allSquares.forEach(pixel => {
                pixel.addEventListener('mouseover', function(event) {
                event.target.style.background = drawColor;
            });
        });
        }
    }

	//here we query select the button and add a click event listener which activates the function
	// the userAmount variable becomes whichever number the user enters at the prompt
	// now we create the amountNumber variable, which is equal to userAmount times 1
	// now we set the property of --columNumber, found in the CSS file, and the amount number (these will be the same)
	//we call on the deleteGrid function
	// we call on the drawgrid function, which will draw the pixels equal to the amountNumber, which is the same as userAmount in value
    document.querySelector('button').addEventListener('click', function() {
    let userAmount = prompt('Enter a number between 2 and 30');
    let amountNumber = userAmount*1;
        document.body.style.setProperty('--columnNumber', amountNumber);
        deleteGrid();
        drawGrid(amountNumber);
		
    }
);

//here we create the deleteGrid function

function deleteGrid() {
    let container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
};


    drawGrid(28);

	
//here we create the constant colorChangerButtons which finds out colorChangerButtons in the html
// it gives them the function of listening for a click, then changing the drawColor variable to the value of the button	
const colorChangerButtons = document.querySelectorAll('.colorChangerButton'); 
setColorChangeButtons(); 

function setColorChangeButtons(){

    colorChangerButtons.forEach((button) => {
        button.addEventListener('click',
            function(){
                drawColor = button.value;  
            }
        );
    });
}
