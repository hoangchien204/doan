function removeProduct(element) {
    // Tìm phần tử cha của img_bin
    const productElement = element.closest('.product');
    
    // Xóa phần tử product khỏi DOM
    if (productElement) {
      productElement.remove();
    }
  }
  