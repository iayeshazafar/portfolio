/* ==========================================================
   SHARED UTILITIES — NEON GLOW ENHANCED
   Loaded on every page. Handles four core features:
   1. Sliding neon nav indicator under the active tab/link
   2. Mobile hamburger menu panel
   3. Floating "back to top" button with smooth scroll
   4. Scroll-reveal animation observer (.reveal)
   5. Interactive neon pointer ripple effect
   ========================================================== */

(function () {

  const tabbar = document.querySelector('.tabbar') || document.querySelector('.nav-links');

  if (tabbar) {
    function getActiveTab() {
      return tabbar.querySelector('.tab.active, .nav-link.active');
    }

    /* ---------- 1.  Nav Indicator  ---------- */
    const indicator = document.createElement('div');
    indicator.className = 'nav-indicator';
    tabbar.appendChild(indicator);

    function moveIndicator() {
      const tab = getActiveTab();
      if (!tab) { 
        indicator.style.width = '0px'; 
        indicator.style.opacity = '0';
        return; 
      }
      
      const barRect = tabbar.getBoundingClientRect();
      const tabRect = tab.getBoundingClientRect();
      
      indicator.style.width = tabRect.width + 'px';
      indicator.style.opacity = '1';
      indicator.style.transform = `translateX(${tabRect.left - barRect.left + tabbar.scrollLeft}px)`;
    }

    window.addEventListener('load', moveIndicator);
    window.addEventListener('resize', moveIndicator);
    moveIndicator();

    // Re-measure whenever any tab's "active" class changes
    const tabObserver = new MutationObserver(() => {
      moveIndicator();
      syncMobileActiveState();
    });

    const allTabs = tabbar.querySelectorAll('.tab, .nav-link');
    allTabs.forEach(tab => {
      tabObserver.observe(tab, { attributes: true, attributeFilter: ['class'] });
    });

    /* ---------- 2. Mobile Hamburger Menu ---------- */
    const wrap = tabbar.closest('.tabbar-wrap') || tabbar.closest('.navbar-wrap') || tabbar.parentElement;
    let syncMobileActiveState = function () {}; // Reassigned below once panel is ready

    if (wrap) {
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'mobile-nav-toggle';
      toggleBtn.setAttribute('aria-label', 'Open menu');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `
        <svg class="icon-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        <svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
      `;
      wrap.appendChild(toggleBtn);

      const panel = document.createElement('div');
      panel.className = 'mobile-nav-panel';

      allTabs.forEach(tab => {
        const link = document.createElement('a');
        link.className = 'mobile-nav-link' + (tab.classList.contains('active') ? ' active' : '');
        link.href = tab.getAttribute('href') || '#';
        link.dataset.forHref = tab.getAttribute('href') || '#';

        const extEl = tab.querySelector('.ext');
        const label = tab.childNodes[0] ? tab.childNodes[0].textContent.trim() : tab.textContent.trim();
        link.innerHTML = `<span>${label}</span><span class="ext">${extEl ? extEl.textContent : ''}</span>`;
        panel.appendChild(link);
      });

      wrap.appendChild(panel);

      function openPanel() {
        panel.classList.add('open');
        toggleBtn.classList.add('open');
        toggleBtn.setAttribute('aria-expanded', 'true');
        toggleBtn.setAttribute('aria-label', 'Close menu');
      }

      function closePanel() {
        panel.classList.remove('open');
        toggleBtn.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.setAttribute('aria-label', 'Open menu');
      }

      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        panel.classList.contains('open') ? closePanel() : openPanel();
      });

      panel.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', closePanel);
      });

      document.addEventListener('click', (e) => {
        if (!wrap.contains(e.target)) closePanel();
      });

      // Keep mobile dropdown highlight synced with active tab
      syncMobileActiveState = function () {
        const active = getActiveTab();
        const activeHref = active ? active.getAttribute('href') : null;
        panel.querySelectorAll('.mobile-nav-link').forEach(link => {
          link.classList.toggle('active', link.dataset.forHref === activeHref);
        });
      };
      syncMobileActiveState();
    }

    // Scroll-end fade calculation for desktop horizontal row
    if (wrap) {
      function updateScrollFade() {
        const atEnd = tabbar.scrollLeft + tabbar.clientWidth >= tabbar.scrollWidth - 4;
        wrap.classList.toggle('scroll-end', atEnd);
      }
      tabbar.addEventListener('scroll', updateScrollFade);
      window.addEventListener('resize', updateScrollFade);
      updateScrollFade();
    }
  }

  /* ---------- 3. Back-To-Top Floating Button ---------- */
  const backBtn = document.createElement('button');
  backBtn.className = 'back-to-top';
  backBtn.setAttribute('aria-label', 'Back to top');
  backBtn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(backBtn);

  window.addEventListener('scroll', () => {
    backBtn.classList.toggle('visible', window.scrollY > 400);
  });

  backBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- 4. Intersection Observer Scroll-Reveal ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  window.initScrollReveal = function (root) {
    const scope = root || document;
    scope.querySelectorAll('.reveal:not(.reveal-bound)').forEach(el => {
      el.classList.add('reveal-bound');
      revealObserver.observe(el);
    });
  };
  
document.addEventListener("DOMContentLoaded", () => {
  const underline = document.getElementById("navUnderline");
  const navLinks = document.querySelectorAll(".nav-link");
  const navContainer = document.getElementById("navLinksList");
  const sections = document.querySelectorAll("section[id]");

  if (!underline || !navContainer || navLinks.length === 0) return;

  // Function to move and resize the glowing line under the active link
  function updateUnderline(activeElement) {
    const linkRect = activeElement.getBoundingClientRect();
    const containerRect = navContainer.getBoundingClientRect();

    const leftOffset = linkRect.left - containerRect.left;

    underline.style.width = `${linkRect.width}px`;
    underline.style.transform = `translateX(${leftOffset}px)`;
  }

  // Set initial position on page load
  const initialActive = document.querySelector(".nav-link.active") || navLinks[0];
  if (initialActive) updateUnderline(initialActive);

  // Click handler to instantly snap the line when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      updateUnderline(link);
    });
  });

  
  window.addEventListener("scroll", () => {
    let currentSectionId = "";
    let scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 140;
      const sectionHeight = section.offsetHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach((link) => {
        if (link.getAttribute("data-section") === currentSectionId) {
          navLinks.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");
          updateUnderline(link);
        }
      });
    }
  });

  
  window.addEventListener("resize", () => {
    const currentActive = document.querySelector(".nav-link.active");
    if (currentActive) updateUnderline(currentActive);
  });
});
  window.initScrollReveal();

  /* ---------- 5. Interactive Neon Click Ripple Effect ---------- */
  document.addEventListener('click', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: fixed;
      top: ${e.clientY}px;
      left: ${e.clientX}px;
      width: 10px;
      height: 10px;
      margin-left: -5px;
      margin-top: -5px;
      border-radius: 50%;
      border: 2px solid var(--accent-cyan, #38bdf8);
      box-shadow: 0 0 15px var(--accent-cyan, #38bdf8);
      pointer-events: none;
      z-index: 9999;
      transform: scale(1);
      opacity: 1;
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s linear;
    `;

    document.body.appendChild(ripple);

    requestAnimationFrame(() => {
      ripple.style.transform = 'scale(6)';
      ripple.style.opacity = '0';
    });

    setTimeout(() => ripple.remove(), 550);
  });
})();