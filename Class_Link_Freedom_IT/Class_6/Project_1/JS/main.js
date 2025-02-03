
//  start Header JS


// Theme switching functionality
const themeToggle = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

// Set initial theme
document.documentElement.setAttribute('data-theme', 
    localStorage.getItem('theme') || 
    (prefersDark.matches ? 'dark' : 'light')
);

themeToggle.addEventListener('click', () => {
    themeToggle.style.transform = 'scale(0.95)';
    setTimeout(() => themeToggle.style.transform = '', 150);

    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// Enhanced mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.contains('active');
    const icon = mobileMenuBtn.querySelector('i');
    
    // Toggle menu state
    navLinks.classList.toggle('active');
    
    // Update icon and button state
    if (!isOpen) {
        icon.className = 'ri-close-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
    } else {
        icon.className = 'ri-menu-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && 
        !e.target.closest('.mobile-menu') && 
        navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
    }
});

// Enhanced active link handling
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        e.target.closest('.nav-link').classList.add('active');
        
        // Close mobile menu after link click
        if (window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            mobileMenuBtn.querySelector('i').className = 'ri-menu-line';
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});

// Add animation to nav links
const navLinkItems = document.querySelectorAll('.nav-link');
navLinkItems.forEach((link, index) => {
    link.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`;
});

// Add hover effect to logo
const logo = document.querySelector('.nav-logo');
logo.addEventListener('mousemove', (e) => {
    const bound = logo.getBoundingClientRect();
    const x = e.clientX - bound.left;
    const y = e.clientY - bound.top;
    
    logo.style.setProperty('--x', `${x}px`);
    logo.style.setProperty('--y', `${y}px`);
});

//  End Header JS


//  Slider part start here

const indicators = document.querySelectorAll('.slider .indicators .indicator')
const arrowPrev = document.querySelector('.slider .arrows .arrow-prev')
const arrowNext = document.querySelector('.slider .arrows .arrow-next')

const handleIndicatorClick = (event) => {
  const indicator = event.target
  if (!isActive(indicator)) {
    removeActive()
    addActive(indicator)
    showSlide(indicator.dataset.slide)
  }
}

const handlePrevArrowClick = (event) => {
  let activeSlide = 0
  let newActiveSlide = indicators.length
  let ready = false

  indicators.forEach(indicator => {
    if (isActive(indicator) && !ready) {
      activeSlide = indicator.dataset.slide
      if (activeSlide !== '1') {
        newActiveSlide = parseInt(activeSlide) - 1
      }
      removeActive()
      addActive(document.querySelector(`.slider .indicators [data-slide='${newActiveSlide}']`))
      showSlide(newActiveSlide)
      ready = true
    }
  })
}

const handleNextArrowClick = (event) => {
  let activeSlide = 0
  let newActiveSlide = 1
  let ready = false

  indicators.forEach(indicator => {
    if (isActive(indicator) && !ready) {
      activeSlide = indicator.dataset.slide
      if (activeSlide !== indicators.length.toString()) {
        newActiveSlide = parseInt(activeSlide) + 1
      }
      removeActive()
      addActive(document.querySelector(`.slider .indicators [data-slide='${newActiveSlide}']`))
      showSlide(newActiveSlide)
      ready = true
    }
  })
}

indicators.forEach(indicator => {
  indicator.addEventListener('click', handleIndicatorClick)
})

arrowPrev.addEventListener('click', handlePrevArrowClick)
arrowNext.addEventListener('click', handleNextArrowClick)

function isActive (indicator) {
  return indicator.hasAttribute('active')
}

function removeActive () {
  document.querySelectorAll('.slider .indicators [active]').forEach(item => {
    item.removeAttribute('active')
  })
}

function addActive (indicator) {
  indicator.setAttribute('active', '')
}

function showSlide (newActiveSlide) {
  const newPosition = (100 * (newActiveSlide - 1)).toString()
  document.querySelector('.slider-inner').style.marginLeft = `-${newPosition}%`
}


// Slider part End Here

// About Us Section start Here 

       
// About Us Section End Herr
