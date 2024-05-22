document.addEventListener("DOMContentLoaded", function() {
          // Lấy nút button
          const button = document.querySelector(".button2");
    
          // Thêm sự kiện click cho nút
          button.addEventListener("click", function() {
            // Chuyển hướng đến trang đăng nhập Facebook khi click
            window.location.href = "https://www.facebook.com/login";
          });
        });
        document.addEventListener("DOMContentLoaded", function() {
          // Lấy nút button
          const button = document.querySelector(".button1");
    
          // Thêm sự kiện click cho nút
          button.addEventListener("click", function() {
            // Chuyển hướng đến trang đăng nhập Facebook khi click
            window.location.href = "https://accounts.google.com/";
          });
        });  
 function isValidEmail(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
}
        
        // Function được kích hoạt khi nhấn nút Sign Up
        function isValidEmail(email) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
      }
      
      // Hàm validateSignup
      function validateSignup() {
          const email = document.getElementById("emailInput").value.trim();
          const password = document.getElementById("passwordInput").value.trim();
          const firstName = document.getElementById("firstNameInput").value.trim();
          const lastName = document.getElementById("lastNameInput").value.trim();
          const confirmPassword = document.getElementById("confirmPasswordInput").value.trim();
          
          if (firstName === "") {
            alert("First Name không được để trống. Vui lòng kiểm tra lại.");
            return;
        }
    
        // Kiểm tra nếu Last Name trống
        if (lastName === "") {
            alert("Last Name không được để trống. Vui lòng kiểm tra lại.");
            return;
        }


          // Kiểm tra tính hợp lệ của email
          if (!isValidEmail(email)) {
              alert("Email không hợp lệ. Vui lòng kiểm tra lại.");
              return;
          }
          if (password === "") {
            alert("Password không được để trống. Vui lòng kiểm tra lại.");
            return;
        }
      
          // Kiểm tra sự khớp nhau của hai trường mật khẩu
          if (password !== confirmPassword) {
              alert("Mật khẩu không khớp.");
              return;
          }
      
          alert("Đăng ký thành công!");
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
          window.location.href = "/html/login.html";
      }