const text = document.querySelector("#msg");
const button = document.querySelector("#send");

button.addEventListener("click", () => {
	document.location.href = "./result.html?msg=" + text.value;
});