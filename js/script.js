document.addEventListener('DOMContentLoaded', () => {
  // --- ТЕМА ---
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const current = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', current);

    btn.addEventListener('click', () => {
      const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }

  // --- ВИПАДАЮЧЕ МЕНЮ РОЗДІЛІВ ---
  const toggleButton = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.getElementById('chapterDropdown');

  if (toggleButton && dropdownMenu) {
    toggleButton.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = dropdownMenu.style.display === 'block';
      dropdownMenu.style.display = isVisible ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
      if (!toggleButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  }

  // --- ПОВЕДІНКА ХЕДЕРА ---
  const header = document.querySelector('.sticky-header');
  let lastScroll = 0;

  if (header) {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > 10) {
        header.classList.add('shrink');
      } else {
        header.classList.remove('shrink');
      }

      if (currentScroll > lastScroll && currentScroll > 50) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }

      lastScroll = Math.max(currentScroll, 0);
    });
  }
});
