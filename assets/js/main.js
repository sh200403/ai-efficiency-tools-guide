document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const header = document.getElementById('header');
  const backToTop = document.getElementById('backToTop');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('active');
      navToggle.textContent = mobileMenu.classList.contains('active') ? 'Close' : 'Menu';
    });
  }

  window.addEventListener('scroll', function() {
    if (header && window.scrollY > 50) {
      header.classList.add('scrolled');
    } else if (header) {
      header.classList.remove('scrolled');
    }
    if (backToTop && window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else if (backToTop) {
      backToTop.classList.remove('visible');
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you. This demo contact form does not send messages yet. Please email us directly at contact@aiefficiencytoolsguide.com.');
      contactForm.reset();
    });
  }

  const faqItems = document.querySelectorAll('.faq-item h4');
  faqItems.forEach(function(item) {
    item.addEventListener('click', function() {
      const parent = this.parentElement;
      parent.classList.toggle('active');
    });
  });

  const subscribeBtn = document.getElementById('subscribeBtn');
  if (subscribeBtn) {
    subscribeBtn.addEventListener('click', function() {
      const emailInput = this.parentElement.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        alert('Thank you. Newsletter signup is not connected yet. Please check back later for updates.');
        emailInput.value = '';
      } else {
        alert('Please enter your email address');
      }
    });
  }

  const filterTags = document.querySelectorAll('.filter-tag');
  const articlesGrid = document.getElementById('articlesGrid');
  
  if (filterTags.length > 0 && articlesGrid) {
    filterTags.forEach(function(tag) {
      tag.addEventListener('click', function() {
        filterTags.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        const articles = articlesGrid.querySelectorAll('.guide-card');
        
        articles.forEach(function(article) {
          if (category === 'all') {
            article.style.display = 'block';
          } else {
            const articleCategory = article.getAttribute('data-category');
            article.style.display = articleCategory === category ? 'block' : 'none';
          }
        });
      });
    });
  }
});
