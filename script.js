document.addEventListener("DOMContentLoaded", function () {
  // Funcionalidad de modo oscuro/claro
  const toggleModeButton = document.getElementById("toggle-mode");
  toggleModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleModeButton.textContent = document.body.classList.contains("dark-mode") ? "Modo claro" : "Modo oscuro";
  });

  // Cambio de imagen con URL
  const imageInput = document.getElementById("image-url");
  const memeImage = document.getElementById("meme-image");

  imageInput.addEventListener("input", () => {
    const url = imageInput.value;
    memeImage.src = url;

    memeImage.onload = () => console.log("Imagen cargada correctamente");
    memeImage.onerror = () => alert("No se pudo cargar la imagen. Verifica la URL.");
  });

  // Control del texto
  const topTextInput = document.getElementById("top-text");
  const topTextDisplay = document.getElementById("top-text-display");
  const bottomTextInput = document.getElementById("bottom-text");
  const bottomTextDisplay = document.getElementById("bottom-text-display");

  // Actualización del texto superior
  topTextInput.addEventListener("input", (e) => {
    topTextDisplay.textContent = e.target.value;
  });

  // Actualización del texto inferior
  bottomTextInput.addEventListener("input", (e) => {
    bottomTextDisplay.textContent = e.target.value;
  });

  // Función para descargar el meme
  document.getElementById("download-meme").addEventListener("click", () => {
    const memeContainer = document.getElementById("meme-container");

    html2canvas(memeContainer).then((canvas) => {
      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });
});
