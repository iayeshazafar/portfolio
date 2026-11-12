
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
  }

const grid = document.getElementById('blogGrid');

  function formatDateParts(dateStr) {
    const d = new Date(dateStr);
    if (isNaN(d)) return { day: '--', month: '' };
    const day = d.getDate();
    const month = d.toLocaleString('en-US', { month: 'short' });
    return { day, month };
  }

  window.BLOG_POSTS.forEach((post, i) => {
    const { day, month } = formatDateParts(post.date);
    const card = document.createElement('a');
    card.className = 'blog-card reveal';
    card.href = `post.html?slug=${encodeURIComponent(post.slug)}`;
    card.style.transitionDelay = `${Math.min(i, 5) * 0.07}s`;
    card.innerHTML = `
      <div class="blog-card-date">
        <span class="day-num">${day}</span>
        <span>${month}</span>
      </div>
      <div>
        <h2>${post.title}</h2>
        <p>${post.excerpt}</p>
        <div class="blog-card-meta">
          ${post.tags.map(t => `<span class="blog-tag">${t}</span>`).join('')}
          <span class="read-time">${post.readTime}</span>
          <span class="read-more">Read <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  if (window.initScrollReveal) window.initScrollReveal();
