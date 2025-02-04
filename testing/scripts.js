// Open image modal
const collageImages = document.querySelectorAll('.collage-image');
const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');

// Click on an image to open it in the modal
collageImages.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = image.src;
    });
});

// Close modal
function closeModal() {
    modal.style.display = 'none';
}


