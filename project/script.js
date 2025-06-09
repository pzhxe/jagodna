// All 39 gallery images
const galleryImages = [
    { src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Domek pod Jagodą - widok zewnętrzny' },
    { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Wnętrze - salon' },
    { src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Sypialnia' },
    { src: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Widok z tarasu' },
    { src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Kuchnia' },
    { src: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Łazienka' },
    { src: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Salon z kominkiem' },
    { src: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Jadalnia' },
    { src: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Sypialnia główna' },
    { src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Pokój dzienny' },
    { src: 'https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Taras z widokiem' },
    { src: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Aneks kuchenny' },
    { src: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Druga sypialnia' },
    { src: 'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Łazienka z wanną' },
    { src: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Widok z okna' },
    { src: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Strefa relaksu' },
    { src: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Trzecia sypialnia' },
    { src: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Kącik jadalny' },
    { src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Balkon górski' },
    { src: 'https://images.pexels.com/photos/1457845/pexels-photo-1457845.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Wyposażenie kuchni' },
    { src: 'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Garderoba' },
    { src: 'https://images.pexels.com/photos/1080694/pexels-photo-1080694.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Prysznic' },
    { src: 'https://images.pexels.com/photos/1396127/pexels-photo-1396127.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Panorama gór' },
    { src: 'https://images.pexels.com/photos/1571465/pexels-photo-1571465.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Kominek w salonie' },
    { src: 'https://images.pexels.com/photos/1648774/pexels-photo-1648774.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Pokój gościnny' },
    { src: 'https://images.pexels.com/photos/1454802/pexels-photo-1454802.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Stół jadalny' },
    { src: 'https://images.pexels.com/photos/1643387/pexels-photo-1643387.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Zewnętrzny taras' },
    { src: 'https://images.pexels.com/photos/1457844/pexels-photo-1457844.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Sprzęty kuchenne' },
    { src: 'https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Szafa w sypialni' },
    { src: 'https://images.pexels.com/photos/1080692/pexels-photo-1080692.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Umywalka' },
    { src: 'https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Wschód słońca' },
    { src: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Narożnik wypoczynkowy' },
    { src: 'https://images.pexels.com/photos/1648773/pexels-photo-1648773.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Łóżko podwójne' },
    { src: 'https://images.pexels.com/photos/1454801/pexels-photo-1454801.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Krzesła przy stole' },
    { src: 'https://images.pexels.com/photos/1643385/pexels-photo-1643385.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Meble ogrodowe' },
    { src: 'https://images.pexels.com/photos/1457843/pexels-photo-1457843.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Lodówka i sprzęty' },
    { src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Pościel w sypialni' },
    { src: 'https://images.pexels.com/photos/1080690/pexels-photo-1080690.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Lustro łazienkowe' },
    { src: 'https://images.pexels.com/photos/1396124/pexels-photo-1396124.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Zachód słońca nad górami' }
];

let currentImageIndex = 0;
let currentSlideIndex = 0;
const slidesPerView = 3;

// Modal functions
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Gallery modal functions
function openGallery(index) {
    currentImageIndex = index;
    const modal = document.getElementById('galleryModal');
    const image = document.getElementById('galleryImage');
    const counter = document.getElementById('imageCounter');
    
    image.src = galleryImages[index].src;
    image.alt = galleryImages[index].alt;
    counter.textContent = `${index + 1} / ${galleryImages.length}`;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateGalleryImage();
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateGalleryImage();
}

function updateGalleryImage() {
    const image = document.getElementById('galleryImage');
    const counter = document.getElementById('imageCounter');
    
    image.src = galleryImages[currentImageIndex].src;
    image.alt = galleryImages[currentImageIndex].alt;
    counter.textContent = `${currentImageIndex + 1} / ${galleryImages.length}`;
}

// Extended gallery functions
function showExtendedGallery() {
    const extendedGallery = document.getElementById('extendedGallery');
    extendedGallery.classList.remove('hidden');
    extendedGallery.scrollIntoView({ behavior: 'smooth' });
    
    // Initialize slider if not already done
    if (!document.querySelector('#sliderTrack .slide')) {
        initializeSlider();
    }
}

function hideExtendedGallery() {
    const extendedGallery = document.getElementById('extendedGallery');
    extendedGallery.classList.add('hidden');
}

function initializeSlider() {
    const sliderTrack = document.getElementById('sliderTrack');
    const sliderDots = document.getElementById('sliderDots');
    
    // Clear existing content
    sliderTrack.innerHTML = '';
    sliderDots.innerHTML = '';
    
    // Create slides (3 images per slide)
    const totalSlides = Math.ceil(galleryImages.length / slidesPerView);
    
    for (let i = 0; i < totalSlides; i++) {
        const slide = document.createElement('div');
        slide.className = 'slide';
        
        const startIndex = i * slidesPerView;
        const endIndex = Math.min(startIndex + slidesPerView, galleryImages.length);
        
        for (let j = startIndex; j < endIndex; j++) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'slide-image';
            imageContainer.onclick = () => openGallery(j);
            
            const img = document.createElement('img');
            img.src = galleryImages[j].src;
            img.alt = galleryImages[j].alt;
            
            imageContainer.appendChild(img);
            slide.appendChild(imageContainer);
        }
        
        sliderTrack.appendChild(slide);
        
        // Create dot
        const dot = document.createElement('button');
        dot.className = 'slider-dot';
        if (i === 0) dot.classList.add('active');
        dot.onclick = () => goToSlide(i);
        sliderDots.appendChild(dot);
    }
    
    updateSliderPosition();
}

function slideGallery(direction) {
    const totalSlides = Math.ceil(galleryImages.length / slidesPerView);
    currentSlideIndex += direction;
    
    if (currentSlideIndex < 0) {
        currentSlideIndex = totalSlides - 1;
    } else if (currentSlideIndex >= totalSlides) {
        currentSlideIndex = 0;
    }
    
    updateSliderPosition();
}

function goToSlide(index) {
    currentSlideIndex = index;
    updateSliderPosition();
}

function updateSliderPosition() {
    const sliderTrack = document.getElementById('sliderTrack');
    const dots = document.querySelectorAll('.slider-dot');
    
    sliderTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

// Directions function
function openDirections() {
    alert('Wskazówki dojazdu:\n\n1. Z Wrocławia trasa A4 w kierunku Krakowa\n2. Zjazd w kierunku Kłodzka\n3. Następnie droga krajowa w kierunku Gór Stołowych\n4. Szczegółowe wskazówki otrzymają Państwo przy rezerwacji');
}

// Smooth scrolling for anchor links
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Close modals when clicking outside
window.onclick = function(event) {
    const galleryModal = document.getElementById('galleryModal');
    
    if (event.target === galleryModal) {
        closeModal('galleryModal');
    }
}

// Keyboard navigation for gallery
document.addEventListener('keydown', function(event) {
    const galleryModal = document.getElementById('galleryModal');
    const extendedGallery = document.getElementById('extendedGallery');
    
    if (galleryModal.style.display === 'block') {
        switch(event.key) {
            case 'ArrowLeft':
                previousImage();
                break;
            case 'ArrowRight':
                nextImage();
                break;
            case 'Escape':
                closeModal('galleryModal');
                break;
        }
    }
    
    if (!extendedGallery.classList.contains('hidden')) {
        switch(event.key) {
            case 'ArrowLeft':
                slideGallery(-1);
                break;
            case 'ArrowRight':
                slideGallery(1);
                break;
            case 'Escape':
                hideExtendedGallery();
                break;
        }
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize scroll animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll animation to cards
    const cards = document.querySelectorAll('.contact-card, .amenities-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add scroll animation to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Add scroll animation to booking section
    const bookingSection = document.querySelector('.booking-content');
    if (bookingSection) {
        bookingSection.style.opacity = '0';
        bookingSection.style.transform = 'translateY(30px)';
        bookingSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(bookingSection);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
    
    // Hide scroll indicator when scrolling
    if (scrollIndicator) {
        if (scrolled > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add hover effects to interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, .booking-button, .show-more-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    button, .booking-button, .show-more-btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.4);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);