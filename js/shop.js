function slider() {
    let next = document.querySelector('.box_square .next');
    let prev = document.querySelector('.box_square .prev');
    let currentIndex = 0;

    next.addEventListener('click', function() {
        let slides = document.querySelectorAll('.slides-container .slide-container');
        let container = document.querySelector('.slides-container');

        // Kiểm tra nếu slide hiện tại là slide thứ 4
        if (currentIndex === 3) {
            // Ẩn slide tiếp theo
            slides[4].classList.add('hidden');
        }

        // Di chuyển slide đầu tiên xuống cuối danh sách
        container.appendChild(slides[0]);

        currentIndex = (currentIndex + 1) % slides.length;
    });

    prev.addEventListener('click', function() {
        let slides = document.querySelectorAll('.slides-container .slide-container');
        let container = document.querySelector('.slides-container');

        // Di chuyển slide cuối cùng lên đầu danh sách
        container.prepend(slides[slides.length - 1]);

        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    });
}

slider();













