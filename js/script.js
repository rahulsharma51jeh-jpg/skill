// ============================================================
// INFINITY SKILLS - Main JavaScript
// ============================================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('active');
}

// Filter functionality for Tasks page
function filterTasks(status) {
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(t => t.classList.remove('active'));
  event.currentTarget.classList.add('active');

  const cards = document.querySelectorAll('.task-card');
  cards.forEach(card => {
    if (status === 'all' || card.dataset.status === status) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Filter by category
function filterByCategory(select) {
  const category = select.value;
  const cards = document.querySelectorAll('[data-category]');
  cards.forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Search courses
function searchCourses(input) {
  const query = input.value.toLowerCase();
  const cards = document.querySelectorAll('.course-card');
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const desc = card.querySelector('p').textContent.toLowerCase();
    if (title.includes(query) || desc.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
