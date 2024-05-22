
document.addEventListener('DOMContentLoaded', function() {
    function handleClick(event) {
    const clickedElement = event.target;
    const quantityBox = clickedElement.closest('.Quantity-box');
    const quantityElement = quantityBox.querySelector('.Quantity-text1');
    const priceElement = quantityBox.closest('.BG').querySelector('.inforfation-text.price h4');
    let quantity = parseInt(quantityElement.textContent);
    let price = parseFloat(priceElement.textContent.replace('$', '')); // Lấy giá tiền từ thẻ h4
    if (clickedElement.classList.contains('Quantity-text')) {
        quantity++;
    } else if (clickedElement.classList.contains('Quantity-text-')) {
        quantity--;
    }

    // Giữ cho số lượng sản phẩm không nhỏ hơn 0
    

    // Cập nhật tổng tiền
    const totalPriceElement = document.querySelector('.total-money');
    const subtotalPrice = document.querySelector('.subtotal-money');
    let totalPrice = parseFloat(totalPriceElement.textContent.replace('$', ''));
    let subtotal = parseFloat(subtotalPrice.textContent.replace('$', ''));
    
    const productCountElement = document.querySelector('#text-color');
    let tong = parseInt(productCountElement.textContent); // Số lượng sản phẩm ban đầu từ phần text-color

    if (clickedElement.classList.contains('Quantity-text')) {
        totalPrice += price; // Nếu bấm nút cộng, tăng giá tiền lên
        subtotal += price;
        tong+=1; // Tăng số lượng sản phẩm lên 1
        productCountElement.textContent = `${tong} Product`; // Cập nhật số lượng sản phẩm
    } else if (clickedElement.classList.contains('Quantity-text-')) {
        // Chỉ trừ giá tiền khi số lượng sản phẩm lớn hơn 0
        if (quantity > 0) {
            totalPrice -= price;
            subtotal -= price;
            tong--; // Giảm số lượng sản phẩm đi 1
            productCountElement.textContent = `${tong} Product`; // Cập nhật số lượng sản phẩm
        }
    }
    if (quantity <= 0) {
        const userConfirmed = confirm("Bạn có chắc chắn muốn xóa mục này?");
        if (userConfirmed) {
            const item = clickedElement.closest('.BG');
            item.remove();
            updateProductCount();
            updateSubtotalPrice();
            updateTotalPrice();
            return; // Thoát khỏi hàm khi xóa item
        } else {
            quantity = 0; // Đặt lại số lượng sản phẩm là 0 nếu không xóa
        }
    }
    quantityElement.textContent = quantity;

    totalPriceElement.textContent = `$${totalPrice.toFixed(2)} USD`;
    subtotalPrice.textContent = `$${subtotal.toFixed(2)} USD`;

    
}

document.querySelectorAll('.Quantity-text-, .Quantity-text').forEach(element => {
    element.addEventListener('click', handleClick);
});

//check coupon

function checkCoupon() {
    
    // Lấy phần tử input, label và message
    const input = document.getElementById('input');
    const label = document.getElementById('left');
    const message = document.getElementById('message');

    const validCouponCode = 'MAGIAMGIA01';
    let isCouponApplied = false;
    // Thêm sự kiện click cho label
    label.addEventListener('click', function() {
        // Lấy giá trị của mã giảm giá nhập vào
        const enteredCouponCode = input.value.trim();
        if (enteredCouponCode === validCouponCode && isCouponApplied == false) {
            // Hiển thị thông báo thành công
            message.textContent = 'Sử dụng mã thành công';
            message.style.color = 'green';
            const totalPriceElement = document.querySelector('.total-money');
        let totalPrice = parseFloat(totalPriceElement.textContent.replace('$', ''));
        totalPrice *= 0.5; // Giảm tổng giá xuống 50%
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)} USD`;
        isCouponApplied = true
        } else {
            message.textContent = 'Mã code hết hạn hoặc không hợp lệ';
            message.style.color = 'red';
        }
    });
}
checkCoupon();
    const trashIcons = document.querySelectorAll('.BG img#trash');
    trashIcons.forEach(trashIcon => {
        trashIcon.addEventListener('click', function() {
            const item = trashIcon.closest('.BG');
            if (item) {
                const userConfirmed = confirm("Bạn có chắc chắn muốn xóa mục này?");
                if (userConfirmed) {
                    item.remove();
                    updateProductCount();
                    updateSubtotalPrice();
                    updateTotalPrice();
                }
            }
        });
    });

    // Hàm để tính tổng số sản phẩm
    function updateProductCount() {
        const quantityElements = document.querySelectorAll('.Quantity-text1');
        let totalProducts = 0;

        quantityElements.forEach(element => {
            const quantity = parseInt(element.innerText);
            if (!isNaN(quantity)) {
                totalProducts += quantity;
            }
        });

        const productCountElement = document.querySelector('#Subtotal #text-color');
        productCountElement.innerText = `${totalProducts} Product${totalProducts !== 1 ? 's' : ''}`;
    }

    // Cập nhật tổng số sản phẩm khi trang tải lần đầu
    document.addEventListener('DOMContentLoaded', function() {
        updateProductCount();
});

function updateTotalPrice() {
    // Lấy số lượng sản phẩm từ phần tử có id là "text-color"
    const productCountElement = document.querySelector('#text-color');
    const productCount = parseInt(productCountElement.textContent);

    // Lấy giá của mỗi sản phẩm từ phần tử có class là "subtotal-money"
    const subtotalElement = document.querySelector('.subtotal-money');
    const subtotalText = subtotalElement.textContent;
    const pricePerProduct = parseFloat(subtotalText.replace('$', '').trim()) / productCount;

    // Tính tổng tiền dựa trên số lượng sản phẩm và giá của mỗi sản phẩm
    const totalPrice = productCount * pricePerProduct;

    // Cập nhật hai phần tử hiển thị tổng tiền
    const totalMoneyElements = document.querySelectorAll('.total-money');
    totalMoneyElements.forEach(element => {
        element.textContent = `$${totalPrice.toFixed(2)} USD`;
    });
}

// Gọi hàm cập nhật tổng tiền khi trang tải lần đầu
updateTotalPrice();
function updateTotalPrice() {
    // Lấy tất cả các phần tử có class là "price"
    const priceElements = document.querySelectorAll('.price');
    let totalPrice = 0;

    // Duyệt qua từng phần tử giá và tính tổng giá của tất cả các sản phẩm
    priceElements.forEach(element => {
        const priceText = element.querySelector('h4').textContent;
        const price = parseFloat(priceText.replace('$', '').trim());
        totalPrice += price;
    });

    // Cập nhật hai phần tử hiển thị tổng tiền
    const totalMoneyElements = document.querySelectorAll('.total-money');
    totalMoneyElements.forEach(element => {
        element.textContent = `$${totalPrice.toFixed(2)} USD`;
    });
}

// Gọi hàm cập nhật tổng tiền khi trang tải lần đầu
updateTotalPrice();
function updateSubtotalPrice() {
    // Lấy tất cả các phần tử có class là "price"
    const priceElements = document.querySelectorAll('.price');
    let subtotalPrice = 0;

    // Duyệt qua từng phần tử giá và tính tổng giá của tất cả các sản phẩm
    priceElements.forEach(element => {
        const priceText = element.querySelector('h4').textContent;
        const price = parseFloat(priceText.replace('$', '').trim());
        subtotalPrice += price;
    });

    // Cập nhật phần tử hiển thị tổng số tiền phụ
    const subtotalMoneyElement = document.querySelector('.subtotal-money');
    subtotalMoneyElement.textContent = `$${subtotalPrice.toFixed(2)} USD`;
}



// Gọi hàm cập nhật tổng số tiền phụ khi trang tải lần đầu
updateSubtotalPrice();
});
