// Hàm để tăng số lượng
// Hàm tăng số lượng
function increaseQuantity(element) {
    // Lấy phần tử cha chứa (Quantity-box)
    const quantityBox = element.parentElement;
    // Lấy phần tử số lượng
    const quantityElement = quantityBox.querySelector('.Quantity-text1');
    // Tăng số lượng lên một
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
}

// Hàm giảm số lượng
function decreaseQuantity(element) {
    // Lấy phần tử cha chứa (Quantity-box)
    const quantityBox = element.parentElement;
    // Lấy phần tử số lượng
    const quantityElement = quantityBox.querySelector('.Quantity-text1');
    // Giảm số lượng đi một
    let quantity = parseInt(quantityElement.textContent);
    quantity--;
    // Đảm bảo số lượng không âm
    if (quantity < 0) {
        quantity = 0;
    }
    quantityElement.textContent = quantity;
}


// Hàm xử lý sự kiện nhấp chuột
function handleClick(event) {
    const clickedElement = event.target;
    const quantityBox = clickedElement.parentElement;
    const quantityElement = quantityBox.querySelector('.Quantity-text1');

    if (clickedElement.classList.contains('Quantity-text')) {
        // Nếu là dấu cộng, gọi hàm tăng số lượng
        increaseQuantity(quantityElement);
    } else if (clickedElement.classList.contains('Quantity-text-')) {
        // Nếu là dấu trừ, gọi hàm giảm số lượng
        decreaseQuantity(quantityElement);
    }
}

// Thêm trình xử lý sự kiện nhấp chuột cho các dấu cộng và dấu trừ
document.querySelectorAll('.Quantity-box').forEach(box => {
    // Thêm sự kiện nhấp chuột cho dấu cộng
    box.querySelector('.Quantity-text').addEventListener('click', handleClick);
    // Thêm sự kiện nhấp chuột cho dấu trừ
    box.querySelector('.Quantity-text-').addEventListener('click', handleClick);
});
