document.addEventListener("DOMContentLoaded", function () {
    const pointers = document.querySelectorAll(".pointer");
    const slides = document.querySelectorAll(".slide");
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;

    const changeSlide = (index) => {
        slides.forEach(s => s.classList.remove("visible"));
        slides[index].classList.add("visible");

        pointers.forEach(p => p.classList.remove("active"));
        pointers[index].classList.add("active");

        const transformValue = `translateX(-${index * slideWidth}px)`;
        document.querySelector(".sliders").style.transform = transformValue;
    };

    pointers.forEach((pointer, index) => {
        pointer.addEventListener("click", () => {
            changeSlide(index);
        });
    });

    const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        changeSlide(currentIndex);
    };

    setInterval(nextSlide, 3000); // 3sec
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        scrollToTopBtn.style.display = 'block';
    }   else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener("click",() => {
    window.scrollTo({top: 0, behavior: "smooth"});
});

// filtro skills / transição

const filterItems = document.querySelectorAll('.section-know--filters li');

const photos = document.querySelectorAll('.section-know--photo');

filterItems.forEach((item) => {
    item.addEventListener('click', () => {
        filterItems.forEach((filterItem) => {
            filterItem.classList.remove('active');
        });
        
        item.classList.add('active');
        
        const selectedCategory = item.getAttribute('data-category');

        photos.forEach((photo) => {
            const photoCategory = photo.getAttribute('data-category');

            if (selectedCategory === 'todos' || photoCategory.includes(selectedCategory)) {
                photo.classList.remove('hidden');
            } else {
                photo.classList.add('hidden');
            }
        });
    });
});


