const toggleModeButton = document.getElementById("toggle-mode");
toggleModeButton.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});

const imageInput = document.getElementById("image-url");
const applyButton = document.getElementById("apply-url");
const memeImage = document.getElementById("meme-image");

applyButton.addEventListener("click", () => {
const url = imageInput.value;
memeImage.src = url;
});

const brightnessInput = document.getElementById("brightness");
brightnessInput.addEventListener("input", (e) => {
memeImage.style.filter = `brightness(${e.target.value})`;
});

const resetButton = document.getElementById("reset-filters");
resetButton.addEventListener("click", () => {
memeImage.style.filter = "none";
});

const topTextInput = document.getElementById("top-text");
const topTextDisplay = document.getElementById("top-text-display");

const bottomTextInput = document.getElementById("bottom-text");
const bottomTextDisplay = document.getElementById("bottom-text-display");

topTextInput.addEventListener("input", (e) => {
topTextDisplay.textContent = e.target.value;
});

bottomTextInput.addEventListener("input", (e) => {
bottomTextDisplay.textContent = e.target.value;
});


document.getElementById("download-meme").addEventListener("click", () => {
const memedownload = document.getElementById("meme");
const link = document.createElement("a");
link.href = memedownload.src;
link.download = "meme.png";
link.click();
});