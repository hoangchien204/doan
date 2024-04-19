// Hàm để tải nội dung từ tệp header.html và chèn vào #header-container
function loadHeader() {
    const headerContainer = document.getElementById('header-container');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../html/header.html', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            headerContainer.innerHTML = xhr.responseText;
        } else {
            console.error('Error loading header: ' + xhr.statusText);
        }
    };
    xhr.send();
}

// Hàm để tải nội dung từ tệp footer.html và chèn vào #footer-container
function loadFooter() {
    const footerContainer = document.getElementById('footer-container');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '../html/footer.html', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            footerContainer.innerHTML = xhr.responseText;
        } else {
            console.error('Error loading footer: ' + xhr.statusText);
        }
    };
    xhr.send();
}

// Gọi hàm loadHeader và loadFooter khi trang được tải
window.addEventListener('load', function() {
    loadHeader();
    loadFooter();
});
