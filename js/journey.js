/* ==========================================================
   JOURNEY PAGE LOGIC
   Renders the progress overview and the accordion timeline
   from window.JOURNEY_DATA (see data/journey-data.js).
   ========================================================== */

  if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
  }

   (function () {
  const DATA = window.JOURNEY_DATA;
  if (!DATA) return;

  const overviewEl = document.getElementById('journeyOverview');
  const timelineEl = document.getElementById('journeyTimeline');

  const total = DATA.semesters.length;
  const completedCount = DATA.semesters.filter(s => s.status === 'completed').length;
  const inProgress = DATA.semesters.find(s => s.status === 'in-progress');
  const percent = Math.round((completedCount / total) * 100);

  // ---------- Overview ----------
  const statusLine = inProgress
    ? `<span class="accent">Semester ${inProgress.number}</span> in progress · ${completedCount} of ${total} completed`
    : `${completedCount} of ${total} semesters completed`;

  const cgpaHtml = DATA.cgpa
    ? `<div class="cgpa-block">
         <div class="cgpa-value">${DATA.cgpa}</div>
         <div class="cgpa-label">CGPA</div>
       </div>`
    : '';

  overviewEl.innerHTML = `
    <div class="overview-text">
      <div class="program-name">${DATA.program}${DATA.institute ? ' — ' + DATA.institute : ''}</div>
      <div class="program-status">${statusLine}</div>
    </div>
    ${cgpaHtml}
    <div class="progress-track">
      <div class="progress-fill" style="width:${percent}%"></div>
    </div>
    <div class="progress-label">${percent}% complete</div>
  `;

  // ---------- Timeline ----------
  const statusLabels = {
    'completed': 'Completed',
    'in-progress': 'In progress',
    'upcoming': 'Upcoming'
  };

  const allCards = [];

  DATA.semesters.forEach((sem, i) => {
    const isLast = i === DATA.semesters.length - 1;
    const shouldOpenByDefault = sem.status === 'in-progress';

    const row = document.createElement('div');
    row.className = `timeline-row reveal ${sem.status}`;
    row.id = `sem-${sem.number}`;
    row.style.transitionDelay = `${Math.min(i, 5) * 0.06}s`;

    const coursesHtml = sem.courses.map(c => `<li>${c}</li>`).join('');

    const gpaHtml = sem.gpa
      ? `<span class="sem-gpa">GPA <span class="val">${sem.gpa}</span></span>`
      : '';

    const skillsHtml = sem.skills.length
      ? `<div class="sem-skills">${sem.skills.map(s => `<span class="sem-skill-tag">${s}</span>`).join('')}</div>`
      : '';



    row.innerHTML = `
      <div class="timeline-rail">
        <div class="timeline-dot"></div>
        ${isLast ? '' : '<div class="timeline-line"></div>'}
      </div>
      <div class="sem-card ${shouldOpenByDefault ? 'open' : ''}">
        <button class="sem-header" aria-expanded="${shouldOpenByDefault}">
          <div class="sem-header-left">
            <h3>Semester ${sem.number}</h3>
            <span class="sem-status ${sem.status}">${statusLabels[sem.status]}</span>
            ${gpaHtml}
          </div>
          <span class="sem-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
          </span>
        </button>
        <div class="sem-body">
          <div class="sem-body-inner">
            <p class="sem-desc">${sem.description}</p>
            <p class="sem-label">Courses</p>
            <ul class="sem-courses">${coursesHtml}</ul>
            ${skillsHtml ? `<p class="sem-label">Skills</p>${skillsHtml}` : ''}
           
          </div>
        </div>
      </div>
    `;

    timelineEl.appendChild(row);

    const card = row.querySelector('.sem-card');
    const header = row.querySelector('.sem-header');
    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');
      card.classList.toggle('open', !isOpen);
      header.setAttribute('aria-expanded', String(!isOpen));
    });

    allCards.push({ number: sem.number, status: sem.status, card, header });
  });

  if (window.initScrollReveal) window.initScrollReveal();

  // ---------- Controls: jump nav + expand/collapse all ----------
  const controlsEl = document.getElementById('journeyControls');

  const jumpChipsHtml = allCards.map(c =>
    `<button class="jump-chip ${c.status}" data-sem="${c.number}" aria-label="Jump to semester ${c.number}">${c.number}</button>`
  ).join('');

  controlsEl.innerHTML = `
    <div class="jump-nav">${jumpChipsHtml}</div>
    <button class="toggle-all-btn" id="toggleAllBtn">
      <span id="toggleAllLabel">Expand all</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
    </button>
  `;

  // Jump nav clicks: scroll to semester + open it
  controlsEl.querySelectorAll('.jump-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const num = chip.getAttribute('data-sem');
      const target = allCards.find(c => String(c.number) === num);
      if (!target) return;

      target.card.classList.add('open');
      target.header.setAttribute('aria-expanded', 'true');

      document.getElementById(`sem-${num}`).scrollIntoView({ behavior: 'smooth', block: 'center' });

      target.card.classList.remove('jump-highlight');
      void target.card.offsetWidth; // restart animation
      target.card.classList.add('jump-highlight');
    });
  });

  // Expand all / collapse all toggle
  const toggleBtn = document.getElementById('toggleAllBtn');
  const toggleLabel = document.getElementById('toggleAllLabel');
  let allOpen = false;

  toggleBtn.addEventListener('click', () => {
    allOpen = !allOpen;
    allCards.forEach(c => {
      c.card.classList.toggle('open', allOpen);
      c.header.setAttribute('aria-expanded', String(allOpen));
    });
    toggleLabel.textContent = allOpen ? 'Collapse all' : 'Expand all';
    toggleBtn.classList.toggle('all-open', allOpen);
  });
})();
