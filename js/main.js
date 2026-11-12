// ---responsive contact form---

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('cf-name').value;
      const email = document.getElementById('cf-email').value;
      const subject = document.getElementById('cf-subject').value || 'Portfolio Contact';
      const message = document.getElementById('cf-message').value;

      alert(`Thank you, ${name}! Preparing your message to send.` + '\n' + `Click OK to Continue...`);

      const bodyText = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=iayeshaazafar@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;

      window.open(gmailUrl, '_blank');
    });
  }
});

(function () {
  const sectionIds = ['about', 'skills', 'projects', 'contact'];
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const navTabs = Array.from(document.querySelectorAll('.tabbar .tab'))
    .filter(tab => tab.getAttribute('href') && tab.getAttribute('href').startsWith('#'));

  if (!sections.length || !navTabs.length) return;

  function setActive(id) {
    navTabs.forEach(tab => {
      const isMatch = tab.getAttribute('href') === `#${id}`;
      tab.classList.toggle('active', isMatch);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    // Pick the section most visible near the top of the viewport
    let bestEntry = null;
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (!bestEntry || entry.intersectionRatio > bestEntry.intersectionRatio) {
          bestEntry = entry;
        }
      }
    });
    if (bestEntry) setActive(bestEntry.target.id);
  }, {
    root: null,
    rootMargin: '-30% 0px -55% 0px', // treat a section as "active" once it's near the top third of the screen
    threshold: [0, 0.25, 0.5, 0.75, 1]
  });

  sections.forEach(sec => observer.observe(sec));

  // Also handle direct tab clicks immediately (feels more responsive than waiting on scroll)
  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const id = tab.getAttribute('href').slice(1);
      setActive(id);
    });
  });
})();