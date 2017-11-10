
// Fisher-Yates shuffle
Array.prototype.shuffle = function() {

	var i = this.length, rand, temp;
	while (--i > 0) {
		rand = Math.floor(Math.random() * (i + 1));
		temp = this[rand];
		this[rand] = this[i];
		this[i] = temp;
	}

	return this;
}

var tipsList = [
		"<span class='code'>GIGO:</span><br>If you put <span class='code'>G</span> arbage <span class='code'>I</span>n you will get <span class='code'>G</span>arbage <span class='code'>O</span>ut!",

		"The binary system is as a base 2 system<span class='code-block'><br>  &nbsp1 &nbsp0 &nbsp1 &nbsp0  &nbsp1  0 0 0 = binary<br> 128 64 32 16 8 4 2 1 = Denary/Decimal</span>",

		"<span class='code'>if</span>/<span class='code'>else</span> statements look like <br/> <span class='code-block'>if (<em>condition</em>) { <br/>&nbsp;&nbsp;...<br/>} else { <br/>&nbsp;&nbsp;...<br/>}",

		"The <span class='code'>&&</span> operator means both things must be true: <br/> <span class='code-block'> true && true = true<br>true && false = false<br>false && false = false</span>",

		"The <span class='code'>||</span> operator means either can be true: <br/> <span class='code-block'> true || true = true<br>true || false = true<br>false || false = false</span>",

		"A <span class='code'>for</span> has three condtions: a start condition, a stop condition, and an iterator: <br> <span class='code-block'>for (var i = 0; i < myArray.length; i++) { <br>&nbsp;&nbsp;...<br>}</span>",

		"To interpolate a variable into a string, use the <span class='code'>+</span> operator, like this: <br> <span class='code-block'>String myName = 'Java'; 'Hello, my name is ' + myName;</span>",

		"To generate a random number, use Java's built in function <span class='code'>Math.random()</span>.",

		"Adding two numbers in Java <span class='code-block'><br> <span class ='code-red'>public static int </span>addNo (<span class ='code-red'>final int</span> num1, <span class ='code-red'>final int</span> num2){<br> <span class ='code-red'>int</span> answer = num1 + num2;<br> <span class ='code-red'>return</span> answer;<br>}</span>",

		"Java has 8 primitive types<br><span class='code-block'> byte, short, int, long, float, double, char and boolean</span> "

];

var tipLimit = tipsList.length;
var result = tipLimit.shuffle;

function startNumber(){
	var tip = tipsList[result.length];
	var tipElement = document.querySelector('.j-tip');
	var tipLimitCount = document.querySelector('.tip-limit-count');

	tipElement.innerHTML = tip;
	tipLimitCount.innerHTML = tipLimit;
}

// Generate a number
function generateNumber() {
	return Math.floor(Math.random() * tipsList.length);
}

// Generate a tip:
// 1. Get random number from generateNumber()
// 2. Use the random number to get the tip from the array
// 3. Show the tip

function generateTip() {
	var tip = tipsList[generateNumber()];
	var tipElement = document.querySelector('.j-tip');
	var tipLimitCount = document.querySelector('.tip-limit-count');

	tipElement.innerHTML = tip;
	tipLimitCount.innerHTML = tipLimit;
}

// Select the tip button
function onTipButtonClick() {
	var tipButton = document.querySelector('.tip-button');
	// Add a click event listener
	tipButton.addEventListener('click', function() {
		// subtract 1 from the tipLimit when the button is clicked
		tipLimit = tipLimit - 1;
		// if the tipLimit is above or equal to 0 then it will generate a new tip
		if (tipLimit >= 0) {
			generateTip();
			// if the tipLimit is not 0 or above then change the button and display the new button and text
			if (tipLimit === 0) {
				tipButton.innerHTML = "That's them done, try another tab!";
				tipButton.classList.add('disabled');
			}
		}
		console.log("clocked");
	});
}

onTipButtonClick();
// Get the first tip
generateTip();