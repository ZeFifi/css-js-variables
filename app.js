const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
	// variable corresponding to the "data-sizing" value
	const suffix = this.dataset.sizing || "";
	console.log(this.name);
	// Updates the value of the variables
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(function (input) {
	// listens to every modification (done) of the input (ex: slider)
  return input.addEventListener('change', handleUpdate);
});

inputs.forEach(function (input) {
	// listens to every modification (current) of the input (ex: slider)
  return input.addEventListener('mousemove', handleUpdate);
});
