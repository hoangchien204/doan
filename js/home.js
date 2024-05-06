

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
<<<<<<< HEAD

//chuyển ảnh phần body
// $(document).ready(function() {
//     // Lấy tất cả các phần tử .image-container
//     const imageContainers = $('.image-container');
//     let currentIndex = 0; // Chỉ số hiện tại của ảnh được hiển thị

//     // Hàm để hiển thị ảnh theo chỉ số
//     function showImage(index) {
//         // Ẩn tất cả các ảnh
//         imageContainers.hide();
//         // Hiển thị ảnh theo chỉ số được chỉ định
//         $(imageContainers[index]).show();
//     }

//     // Ban đầu hiển thị ảnh đầu tiên
//     showImage(currentIndex);

//     // Xử lý sự kiện khi nhấp vào nút mũi tên phải
//     $('#fa-angle-right-bd').click(function() {
//         // Tăng chỉ số hiện tại
//         currentIndex++;
//         // Nếu chỉ số hiện tại vượt quá số lượng ảnh, đặt về chỉ số đầu tiên
//         if (currentIndex >= imageContainers.length) {
//             currentIndex = 0;
//         }
//         // Hiển thị ảnh theo chỉ số mới
//         showImage(currentIndex);
//     });

//     // Xử lý sự kiện khi nhấp vào nút mũi tên trái
//     $('#fa-angle-left-bd').click(function() {
//         // Giảm chỉ số hiện tại
//         currentIndex--;
//         // Nếu chỉ số hiện tại nhỏ hơn 0, đặt về chỉ số cuối cùng
//         if (currentIndex < 0) {
//             currentIndex = imageContainers.length - 1;
//         }
//         // Hiển thị ảnh theo chỉ số mới
//         showImage(currentIndex);
//     });
// });
// Khởi tạo biến để lưu chỉ số hình ảnh hiện tại
=======
>>>>>>> 553029bbbeeb7f5908e89a084f391a264c07f9b3
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

