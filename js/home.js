// Mảng chứa các đường dẫn của các hình ảnh
const imagePaths = [
    '../img/unsplash_IrQmtib-ER4.png',
    '../img/unsplash_GREEBEtyR9Y.png',
    '../img//Group 2006.png', // Thay đổi thành đường dẫn của ảnh thứ 3
];

let currentImageIndex = 0; // Chỉ số của hình ảnh hiện tại

// Hàm để chuyển sang hình ảnh tiếp theo
function nextImage() {
    const mainImage = document.getElementById('anh3'); // Chọn hình ảnh chính dựa trên id là 'anh3'

    // Thêm hiệu ứng fade out
    mainImage.classList.add('hidden');

    setTimeout(() => {
        // Thay đổi nguồn hình ảnh
        currentImageIndex = (currentImageIndex + 1) % imagePaths.length;
        mainImage.src = imagePaths[currentImageIndex];
        
        // Thêm hiệu ứng fade in
        mainImage.classList.remove('hidden');
        mainImage.classList.add('visible');
    }, 500);
}

// Hàm để chuyển sang hình ảnh trước đó
function prevImage() {
    const mainImage = document.getElementById('anh3'); // Chọn hình ảnh chính dựa trên id là 'anh3'

    // Thêm hiệu ứng fade out
    mainImage.classList.add('hidden');

    setTimeout(() => {
        // Thay đổi nguồn hình ảnh
        currentImageIndex = (currentImageIndex - 1 + imagePaths.length) % imagePaths.length;
        mainImage.src = imagePaths[currentImageIndex];
        
        // Thêm hiệu ứng fade in
        mainImage.classList.remove('hidden');
        mainImage.classList.add('visible');
    }, 500);
}
