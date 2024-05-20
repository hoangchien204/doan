// tăng giảm số lưọng sản phẩm
function handleClick(event) {
    // Lấy phần tử được nhấp chuột (sự kiện đang nhấp chuột trên phần tử nào)
    const clickedElement = event.target;//gán phần tử đang click vào clicker

    // Tìm phần tử cha của phần tử được nhấp chuột, đó là "Quantity-box"
    const quantityBox = clickedElement.closest('.Quantity-box');
    const quantityElement = quantityBox.querySelector('.Quantity-text1');
    let quantity = parseInt(quantityElement.textContent);
    if (clickedElement.classList.contains('Quantity-text')) {
        quantity++;
    } else if (clickedElement.classList.contains('Quantity-text-')) {
        quantity--;
    }
    if (quantity < 0) {
        quantity = 0;
    }
    quantityElement.textContent = quantity;
}
//gắn mỗi hàm ở dưới 1 click thay vì sử dụng onclick
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

    // Thêm sự kiện click cho label
    label.addEventListener('click', function() {
        // Lấy giá trị của mã giảm giá nhập vào
        const enteredCouponCode = input.value.trim();
        if (enteredCouponCode === validCouponCode) {
            // Hiển thị thông báo thành công
            message.textContent = 'Sử dụng mã thành công';
            message.style.color = 'green';
        } else {
            message.textContent = 'Mã code hết hạn hoặc không hợp lệ';
            message.style.color = 'red';
        }
    });
}
checkCoupon();


// Lấy tất cả các phần tử có lớp là .trash
const trashIcons = document.querySelectorAll('.BG img#trash');

trashIcons.forEach(trashIcon => {
    trashIcon.addEventListener('click', function() {
        const item = trashIcon.closest('.BG');
        if (item) {
            const userConfirmed = confirm("Bạn có chắc chắn muốn xóa mục này?");
            if (userConfirmed) {
                item.remove();
            }
        }
    });
});

