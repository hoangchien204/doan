function validateForm() {
    const name = document.getElementById("nameInput").value.trim();
    const street = document.getElementById("streetInput").value.trim();
    const address = document.getElementById("addressInput").value.trim();
    const phone = document.getElementById("phoneInput").value.trim();
    const maleCheckbox = document.getElementById("maleCheckbox");
    const femaleCheckbox = document.getElementById("femaleCheckbox");
    const otherCheckbox = document.getElementById("otherCheckbox");

    let isValid = true;

    // Kiểm tra tên
    if (name === "") {
        document.getElementById("nameError").textContent = "Tên không được để trống.";
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    // Kiểm tra đường
    if (street === "") {
        document.getElementById("streetError").textContent = "Đường không được để trống.";
        document.getElementById("streetError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("streetError").style.display = "none";
    }

    // Kiểm tra địa chỉ
    if (address === "") {
        document.getElementById("addressError").textContent = "Địa chỉ không được để trống.";
        document.getElementById("addressError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("addressError").style.display = "none";
    }

    // Kiểm tra số điện thoại
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Số điện thoại không hợp lệ. Vui lòng nhập 10 hoặc 11 chữ số.";
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("phoneError").style.display = "none";
    }

    // Kiểm tra giới tính
    if (!maleCheckbox.checked && !femaleCheckbox.checked && !otherCheckbox.checked) {
        document.getElementById("genderError").textContent = "Bạn phải chọn ít nhất một tùy chọn giới tính.";
        document.getElementById("genderError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("genderError").style.display = "none";
    }

    // Nếu tất cả thông tin hợp lệ, chuyển hướng sang trang khác
    if (isValid) {
        setTimeout(function() {
            alert("Cập nhật thành công! Di chuyển về trang chủ.");
            window.location.href = "/html/home.html";
        }, 1000);
    }
}
