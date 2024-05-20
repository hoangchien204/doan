
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
function slider1(){
    
    let next = document.querySelector('.next')
    let prev = document.querySelector('.prev')
next.addEventListener('click', function() {
    let items = document.querySelectorAll('.slider');
    let container = document.querySelector('.image-container');

    // Di chuyển ảnh đầu tiên xuống cuối danh sách
    container.appendChild(items[0]);

    items[0].style.width = '219px'; // Đặt lại kích thước chiều rộng
    items[0].style.height = '150px'; // Đặt lại chiều cao
    items[0].style.top = '55px';
    

    // Thay đổi kích thước của ảnh tiếp theo để nó thu nhỏ lại
    items[1].style.width = '360px'; // Đặt lại kích thước chiều rộng
    items[1].style.height = '320px'; // Đặt lại chiều cao
    items[1].style.top = '0px';
});


prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.slider');
    let container = document.querySelector('.image-container');

    // Di chuyển ảnh cuối cùng lên đầu danh sách
    container.prepend(items[items.length - 1]);

    // Thay đổi kích thước của ảnh đang hiển thị
    items[0].style.width = '219px'; // Đặt lại kích thước chiều rộng
    items[0].style.height = '150px'; // Đặt lại chiều cao
    items[0].style.top = '55px';


    // Thay đổi kích thước của ảnh tiếp theo để nó thu nhỏ lại
    items[1].style.width = '360px'; // Đặt lại kích thước chiều rộng
    items[1].style.height = '320px'; // Đặt lại chiều cao
    items[1].style.top = '0';

});
}
slider1();
function slider(){
    let next = document.getElementById('right');
    let prev = document.getElementById('left');

    next.addEventListener('click', function() {
        let items = document.querySelectorAll('.slider1');
        let container = document.querySelector('.img-container');
        
        // Di chuyển ảnh đầu tiên xuống cuối danh sách
        container.appendChild(items[0]);

        // Cập nhật các lớp CSS cho ảnh mới
        items.forEach((item, index) => {
            if (index === 0) {
                item.classList.remove('inactive');
                item.classList.add('active');
            } else {
                item.classList.remove('active');
                item.classList.add('inactive');
            }
        });
    });

    prev.addEventListener('click', function() {
        let items = document.querySelectorAll('.slider1');
        let container = document.querySelector('.img-container');
        
        // Di chuyển ảnh cuối cùng lên đầu danh sách
        container.prepend(items[items.length - 1]);

        // Cập nhật các lớp CSS cho ảnh mới
        items.forEach((item, index) => {
            if (index === 0) {
                item.classList.remove('inactive');
                item.classList.add('active');
            } else {
                item.classList.remove('active');
                item.classList.add('inactive');
            }
        });
    });
}
slider();