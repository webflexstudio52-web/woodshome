// Animation on scroll functionality
document.addEventListener('DOMContentLoaded', () => {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) * 1.2 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Function to handle scroll animations
    const handleScrollAnimations = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animate');
            }
        });
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Initial check in case elements are already in viewport
    handleScrollAnimations();

    // Add animation to page load
    document.body.classList.add('page-loaded');

    // Add animation to navbar on load
    const navbar = document.querySelector('nav');
    if (navbar) {
        setTimeout(() => {
            navbar.style.transform = 'translateY(0)';
            navbar.style.opacity = '1';
        }, 100);
    }
});
// Animation on scroll functionality
document.addEventListener('DOMContentLoaded', () => {
    // Check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    };

    // Handle scroll animations
    const handleScrollAnimations = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animate');
            }
        });
    };

    // Initial check
    handleScrollAnimations();

    // Add event listener for scroll
    window.addEventListener('scroll', handleScrollAnimations);
});
