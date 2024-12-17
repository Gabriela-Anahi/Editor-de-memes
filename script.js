document.addEventListener("DOMContentLoaded", function() {
  const toggleModeButton = document.getElementById("toggle-mode");
  toggleModeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      toggleModeButton.textContent = "Modo claro";
    } else {
      toggleModeButton.textContent = "Modo oscuro";
    }
  });

  const imageInput = document.getElementById("image-url");
  const memeImage = document.getElementById("meme-image");

  // Mostrar la imagen al ingresar la URL en el input
  imageInput.addEventListener("input", () => {
    const url = imageInput.value;
    memeImage.src = url;

    // Para asegurar que la imagen se muestre correctamente, también puedes agregar un evento load.
    memeImage.onload = () => {
      // Si la imagen se carga correctamente, puedes hacer algo aquí si lo deseas.
      console.log("Imagen cargada correctamente");
    };

    memeImage.onerror = () => {
      // Si la imagen no se carga (por ejemplo, si la URL es inválida), mostramos un mensaje.
      alert("No se pudo cargar la imagen. Verifica la URL.");
    };
  });

  const image = document.getElementById('meme-image');
  const brightness = document.getElementById('brightness');
  const opacity = document.getElementById('opacity');
  const contrast = document.getElementById('contrast');
  const blur = document.getElementById('blur');
  const grayscale = document.getElementById('grayscale');
  const sepia = document.getElementById('sepia');
  const hueRotation = document.getElementById('hue-rotation');
  const saturation = document.getElementById('saturation');
  const invert = document.getElementById('invert');

  function updateFilters() {
    const filterValues = `
      brightness(${brightness.value})
      opacity(${opacity.value})
      contrast(${contrast.value}%)
      blur(${blur.value}px)
      grayscale(${grayscale.value * 100}%)
      sepia(${sepia.value * 100}%)
      hue-rotate(${hueRotation.value}deg)
      saturate(${saturation.value * 100}%)
      ${invert.checked ? 'invert(100%)' : 'invert(0%)'}
    `;
    image.style.filter = filterValues;
  }

  brightness.addEventListener('input', updateFilters);
  opacity.addEventListener('input', updateFilters);
  contrast.addEventListener('input', updateFilters);
  blur.addEventListener('input', updateFilters);
  grayscale.addEventListener('input', updateFilters);
  sepia.addEventListener('input', updateFilters);
  hueRotation.addEventListener('input', updateFilters);
  saturation.addEventListener('input', updateFilters);
  invert.addEventListener('change', updateFilters);

  document.getElementById('reset-filters').addEventListener('click', () => {
    brightness.value = 1;
    opacity.value = 1;
    contrast.value = 1;
    blur.value = 0;
    grayscale.value = 0;
    sepia.value = 0;
    hueRotation.value = 0;
    saturation.value = 1;
    invert.checked = false;
    updateFilters();
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
    const memeContainer = document.getElementById("meme-container");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const containerStyles = window.getComputedStyle(memeContainer);
    canvas.width = memeContainer.offsetWidth;
    canvas.height = memeContainer.offsetHeight;

    context.fillStyle = containerStyles.backgroundColor || "white";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const image = new Image();
    image.crossOrigin = "anonymous";
    image.src = memeImage.src;

    image.onload = () => {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      context.font = "bold 24px Arial";
      context.fillStyle = "white";
      context.textAlign = "center";
      context.fillText(topTextDisplay.textContent, canvas.width / 2, 30);
      context.fillText(bottomTextDisplay.textContent, canvas.width / 2, canvas.height - 20);

      const link = document.createElement("a");
      link.download = "meme.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    };

    image.onerror = () => {
      alert("La imagen no se pudo cargar. Verifica la URL.");
    };
  });
});
