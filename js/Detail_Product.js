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