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
        


        function login() {
          const email = document.getElementById("emailInput").value;
          const password = document.getElementById("passwordInput").value;
      
          // Lấy thông tin đăng ký từ LocalStorage
          const storedEmail = localStorage.getItem('email');
          const storedPassword = localStorage.getItem('password');
      
          // Kiểm tra thông tin đăng nhập
          if (email === storedEmail && password === storedPassword) {
              alert("Đăng nhập thành công!");
      
              // Chuyển hướng đến trang home.html sau 2 giây
              setTimeout(function() {
                  window.location.href = "/html/update_infor.html";
              }, 2000); // Thời gian chờ 2 giây trước khi chuyển hướng
          } else {
              alert("Email hoặc mật khẩu không đúng");
          }
      }