document.getElementById("sendButton").addEventListener("click", function () {
  // Lấy các giá trị từ input
  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var email = document.getElementById("email").value.trim();
  var Description = document.getElementById("Description").value.trim();
  // Biến kiểm tra lỗi
  var hasError = false;
  var errorMessage = "";

  // Kiểm tra First Name
  if (firstName === "") {
    hasError = true;
    errorMessage += "First Name không được để trống.\n";
  }

  // Kiểm tra Last Name
  if (lastName === "") {
    hasError = true;
    errorMessage += "Last Name không được để trống.\n";
  }

  // Kiểm tra Email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    hasError = true;
    errorMessage += "Email không được để trống.\n";
  } else if (!emailPattern.test(email)) {
    hasError = true;
    errorMessage += "Email không đúng định dạng.\n";
  }

  // Kiểm tra Description
  if (Description === "") {
    hasError = true;
    errorMessage += "Description không được để trống.\n";
  }

  // Nếu có lỗi, hiển thị thông báo
  if (hasError) {
    alert(errorMessage);
  } else {
    alert("Form submitted successfully!");
    // Thêm code để xử lý gửi form nếu cần
  }
});
