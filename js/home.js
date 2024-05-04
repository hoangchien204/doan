

// Chuyểnh ảnh phần background
// Mảng chứa các đường dẫn của các hình ảnh
const imagePaths = [
    '../img/unsplash_IrQmtib-ER4.png',
    "../img/anhaotrang.png",
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
let currentIndex = 0;

// Hàm để hiển thị hình ảnh dựa trên chỉ số
function showImage(index) {
    // Ẩn tất cả các hình ảnh
    $('.image-container1').css({
        'transform': 'translateX(150%)',
        'opacity': '0'
    });
    $('.image-container2').css({
        'transform': 'translateX(150%)',
        'opacity': '0'
    });
    
    // Hiển thị hình ảnh dựa trên chỉ số
    if (index === 0) {
        $('.image-container1').css({
            'transform': 'translateX(0)',
            'opacity': '1'
        });
    } else if (index === 1) {
        $('.image-container2').css({
            'transform': 'translateX(0)',
            'opacity': '1'
        });
    }
}

// Sự kiện khi nhấp vào nút mũi tên phải
$('#fa-angle-right-bd').click(function() {
    // Chuyển sang hình ảnh tiếp theo
    currentIndex = (currentIndex + 1) % 2; // Vì chỉ có 2 hình ảnh, lấy phần dư của 2
    showImage(currentIndex);
});

// Sự kiện khi nhấp vào nút mũi tên trái
$('#fa-angle-left-bd').click(function() {
    // Chuyển sang hình ảnh trước đó
    currentIndex = (currentIndex - 1 + 2) % 2; // Cộng thêm 2 để đảm bảo chỉ số không âm
    showImage(currentIndex);
});

