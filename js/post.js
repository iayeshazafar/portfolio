const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const post = window.BLOG_POSTS.find(p => p.slug === slug);
  const container = document.getElementById('postContent');

  if (post) {
    document.title = post.title + ' — Ayesha Zafar';
    document.getElementById('pageTitle').textContent = post.title + ' — Ayesha Zafar';
    container.innerHTML = `
      <div class="post-meta">
        <span>${post.date}</span>
        <span>·</span>
        <span>${post.readTime}</span>
      </div>
      <h1 class="post-title">${post.title}</h1>
      <div class="post-meta" style="margin-bottom: 2rem;">
        ${post.tags.map(t => `<span class="post-tag">${t}</span>`).join('')}
      </div>
      <div class="post-body">${post.content}</div>
      <hr class="post-divider">
      <a href="blog.html" class="back-link">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to all posts
      </a>
    `;
  } else {
    container.innerHTML = `
      <div class="not-found">
        <h2 style="margin-bottom:1rem;">Post not found</h2>
        <p>The article you're looking for doesn't exist or may have been moved.</p>
      </div>
    `;
  }
