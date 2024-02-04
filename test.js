const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const redText = document.createElement("p");
redText.classList.add("redText");
redText.textContent = "Hey I'm red!"
redText.style.color = "red"
container.appendChild(redText)

const blueH3 = document.createElement("h3");
blueH3.classList.add("blueH3");
blueH3.textContent = "I'm a blue h3!"
blueH3.style.color = "blue"
container.appendChild(blueH3)

// New div //

const davey = document.createElement('div');
davey.classList.add('davey');
davey.setAttribute("style", "background-color: pink; border: 4px solid black;");
davey.textContent = "pink";
const newh1 = document.createElement("h1");
newh1.classList.add("newh1");
newh1.textContent = "I'm in a div";
const newp = document.createElement("p");
newp.classList.add("newp");;
newp.textContent = "ME TOO!";
davey.appendChild(newh1)
davey.appendChild(newp)
container.appendChild(davey);

// the JavaScript file 
// METHODS 2 & 3
function alertFunction() {
alert("YAY! YOU DID IT!");
}
const btn = document.querySelector('#btn')

// METHOD 3
btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
console.log(e);
}); //