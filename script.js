document.addEventListener('DOMContentLoaded', function() {
    const tabBtn = document.querySelectorAll('.tabs-nav-btn');
    const tabItems = document.querySelectorAll('.tabs-item')
  
    tabBtn.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();
  
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains('active') ) {

            tabBtn.forEach(function(item) {
                item.classList.remove('active');
            });

            tabItems.forEach(function(item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
      });
    });
  });
  


document.addEventListener('DOMContentLoaded', function() {
const filterButtons = document.querySelectorAll('.filter-button');
const photos = document.querySelectorAll('.photos-container img');

filterButtons.forEach(function(button) {
    button.addEventListener('click', function() {
    const filter = button.dataset.filter;

    photos.forEach(function(photo) {
        const photoFilters = photo.dataset.filter.split(' ');

        if (filter === 'all' || photoFilters.includes(filter)) {
        photo.style.display = 'block';
        } else {
        photo.style.display = 'none';
        }
    });

    filterButtons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');
    });
});
});



document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
  
    accordionHeaders.forEach(function(header) {
      header.addEventListener('click', function() {
        const content = this.nextElementSibling;
        const icon = this.querySelector('.accordion-icon');
  
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        icon.style.transform = content.style.display === 'block' ? 'rotate(45deg)' : 'none';
      });
    });
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const container = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const navigations = document.querySelectorAll('.slider-navigation');
    let activeOrder = 0;
  
    init();
  
    function init() {
      for (let i = 0; i < slides.length; i++) {
        const slide = slides[i];
  
        slide.dataset.order = i;
        slide.style.transform = 'translate(-50%, 0)';
        slide.addEventListener('click', clickHandler);
      }
  
      activeOrder = Math.floor(slides.length / 2);
  
      update();
    }
  
    function update() {
      const { width, height } = container.getBoundingClientRect();
  
      const a = width / 2;
  
      const delta = Math.PI / slides.length / 5;
  
      for (let i = 0; i < slides.length; i++) {
        const leftSlide = document.querySelector(`.slide[data-order="${activeOrder - i}"]`);
  
        if (leftSlide) {
          leftSlide.style.zIndex = slides.length - i;
          leftSlide.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 - delta * i * 2)}px`;
        }
  
        const rightSlide = document.querySelector(`.slide[data-order="${activeOrder + i}"]`);
  
        if (rightSlide) {
          rightSlide.style.zIndex = slides.length-i;
          rightSlide.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 + delta * i * 2)}px`;
        }
      }
    }
  
    function clickHandler() {
      const order = parseInt(this.dataset.order, 10);
      activeOrder = order;
      update();
    }
  });
  




  document.addEventListener('DOMContentLoaded', function() {
    const openModalButton = document.getElementById('openModalButton');
    const modal = document.getElementById('modal');
    const closeModal = modal.getElementsByClassName('close')[0];
    const form = document.getElementById('form');
  
    openModalButton.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
  



  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
  
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const topOffset = targetElement.offsetTop;
          window.scrollTo({
            top: topOffset,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    var burgerIcon = document.querySelector('.burger-icon');
    var menu = document.querySelector('.menu');
  
    menu.style.display = 'none'; // Скрываем меню при загрузке страницы
  
    burgerIcon.addEventListener('click', function() {
      menu.style.display = menu.style.display === 'none' ? 'flex' : 'none'; // Переключаем видимость меню
    });
  });
  