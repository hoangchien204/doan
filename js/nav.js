const links = document.querySelectorAll('a');

        // Duyệt qua mỗi thẻ <a> và thiết lập thuộc tính target cho mỗi thẻ
        links.forEach(link => {
            link.setAttribute('target', '_parent')
});
