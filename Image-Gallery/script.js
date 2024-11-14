var previous = document.getElementById("Previous");
var next = document.getElementById("Next");
var image = document.getElementById("Image");
var i = 1;

next.addEventListener("click", nextImage);
previous.addEventListener("click", previousImage);
image.addEventListener("click", function() {
    enlargeImage(image);
});

function nextImage() {
    if (i < 9) {
        i++;
    } else {
        i = 1;
    }
    image.src = `./Images/Image-${i}.jpg`;
}

function previousImage() {
    if (i > 1) {
        i--;
    } else {
        i = 9;
    }
    image.src = `./Images/Image-${i}.jpg`;
}

function enlargeImage(imgElement) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = 1000;

    const enlargedImg = imgElement.cloneNode();
    enlargedImg.style.width = '100%';
    enlargedImg.style.height = 'auto';
    enlargedImg.style.maxHeight = '100vh';
    enlargedImg.style.objectFit = 'contain';

    const closeButton = document.createElement('span');
    closeButton.innerText = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '20px';
    closeButton.style.right = '20px';
    closeButton.style.fontSize = '24px';
    closeButton.style.color = 'white';
    closeButton.style.cursor = 'pointer';

    closeButton.addEventListener('click', function () {
        document.body.removeChild(overlay);
    });

    overlay.appendChild(enlargedImg);
    overlay.appendChild(closeButton);
    document.body.appendChild(overlay);
}
document.addEventListener("keydown" , function(event){
    if(event.key ==="ArrowRight")
        nextImage();
    else if(event.key === "ArrowLeft") 
        previousImage();
});