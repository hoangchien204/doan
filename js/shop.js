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









document.addEventListener('DOMContentLoaded', function() {
    const elip = document.getElementById('elip');
    const price40 = document.getElementById('price40');
    const price500 = document.getElementById('price500');
    const track = document.querySelector('.duongthang');

    // Define min and max values for the price
    const minPrice = 40;
    const maxPrice = 500;

    // Get the dimensions of the track
    const trackRect = track.getBoundingClientRect();

    // Move the elip element when clicked
    elip.addEventListener('mousedown', function(e) {
        e.preventDefault();

        function moveAt(pageX) {
            // Calculate the new position of elip
            let newLeft = pageX - trackRect.left - elip.offsetWidth / 2;

            // Restrict elip within the track
            newLeft = Math.max(0, newLeft);
            newLeft = Math.min(newLeft, trackRect.width - elip.offsetWidth);

            elip.style.left = newLeft + 'px';

            // Calculate the new price based on elip position
            const newPrice = minPrice + (newLeft / (trackRect.width - elip.offsetWidth)) * (maxPrice - minPrice);
            
            // Update the price display
            price40.textContent = '$' + Math.round(newPrice);
            price500.textContent = '$' + Math.round(newPrice);
        }

        function onMouseMove(event) {
            moveAt(event.pageX);
        }

        document.addEventListener('mousemove', onMouseMove);

        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', onMouseMove);
        }, { once: true });
    });
});












