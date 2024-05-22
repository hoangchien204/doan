function confirmRemoveProduct(element) {
  if (confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
    removeProduct(element);
  }
}

function removeProduct(element) {
  const productElement = element.closest('.product');
  if (productElement) {
    productElement.remove();
  }
}