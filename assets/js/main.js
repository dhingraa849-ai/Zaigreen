
// === Header arrow  === //
$(document).ready(function () {
    $('.dropdown').click(function () {
        $('.dropdown-list').toggle();

        $(this).find('.arrow').toggleClass('rotate-up');
    });
});

// End  === Header arrow  === //



// === Services tab section === //
$(document).ready(function () {
    $('.service-content').on('click', function () {
        $('.service-content').removeClass('active-tab');
        $(this).addClass('active-tab');
        
        let dynamicLeftImg = $(this).data('left-img');
        let dynamicRightImg = $(this).data('right-img');
        
        $('#left-display-img, #right-display-img').fadeOut(150, function () {
            $('#left-display-img').attr('src', dynamicLeftImg);
            $('#right-display-img').attr('src', dynamicRightImg);
            $(this).fadeIn(150);
        });
    });
});

// === End Services tab section === //


// ===  Why choosen Us === //
$(document).ready(function () {
    $('.dot').on('click', function () {
        if ($(this).hasClass('active')) return;

        $('.dot').removeClass('active');
        $(this).addClass('active');

        let newTitle = $(this).data('title');
        let newDesc = $(this).data('desc');
        let newIcon = $(this).data('icon');

        $('#dynamic-content-area').fadeOut(200, function () {
            $('#card-title').text(newTitle);
            $('#card-desc').text(newDesc);
            $('#card-icon').attr('class', 'fas ' + newIcon + ' fs-3 dark-green-text');

            $(this).fadeIn(200);
        });
    });
});




// === Project Slider === //

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".project-slider");
    const leftBtn = document.querySelector(".left-scroll");
    const rightBtn = document.querySelector(".right-scroll");

    if (slider && leftBtn && rightBtn) {
        // Scroll Right function
        rightBtn.addEventListener("click", () => {
            // Card ki width + gap calculate karein
            const cardWidth = slider.querySelector(".project-card").offsetWidth;
            const gap = parseInt(window.getComputedStyle(slider).gap) || 0;
            const scrollAmount = cardWidth + gap;

            slider.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        });

        // Scroll Left function
        leftBtn.addEventListener("click", () => {
            // Card ki width + gap calculate karein
            const cardWidth = slider.querySelector(".project-card").offsetWidth;
            const gap = parseInt(window.getComputedStyle(slider).gap) || 0;
            const scrollAmount = cardWidth + gap;

            slider.scrollBy({
                left: -scrollAmount,
                behavior: "smooth"
            });
        });
    }
});

// === End Project slider === //




// === Testimonail card === // 

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('sliderTrack');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const paginationText = document.getElementById('paginationText');

    let currentIndex = 1;
    const totalSlides = cards.length;

    function updateSlider() {
        const viewportWidth = window.innerWidth;
        const cardStyle = window.getComputedStyle(cards[0]);
        const cardWidth = cards[0].offsetWidth;
        const cardMargin = parseFloat(cardStyle.marginLeft) + parseFloat(cardStyle.marginRight);
        const totalCardWidth = cardWidth + cardMargin;

        const centerOffset = (viewportWidth / 2) - (cardWidth / 2) - parseFloat(cardStyle.marginLeft);
        const translateValue = centerOffset - (currentIndex * totalCardWidth);

        // Apply smooth translation
        track.style.transform = `translateX(${translateValue}px)`;

        // Update Pagination Text (e.g., [02 / 04])
        const currentDisplay = String(currentIndex + 1).padStart(2, '0');
        const totalDisplay = String(totalSlides).padStart(2, '0');
        paginationText.innerHTML = `[${currentDisplay} / ${totalDisplay}]`;
    }

    // Navigation Listeners with Infinite Loop Logic
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            // If on the first slide, jump to the last slide
            currentIndex = totalSlides - 1;
        }
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    window.addEventListener('resize', updateSlider);

    // Initialize setup on page load
    updateSlider();
});

// === End Testionial Crad === //



// === cuntar code ===  //
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 100;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                } else {
                    counter.innerText = target;
                }
            };
            update();
            observer.unobserve(counter);
        }
    });
}, {
    threshold: .6
});
counters.forEach(counter => observer.observe(counter));




//===  fade animations === //

AOS.init({
    duration: 1000,
    once: false,
    offset: 50,
    easing: 'ease-in-out-back'
});









