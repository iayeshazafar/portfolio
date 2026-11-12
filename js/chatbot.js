/* ==========================================================
   CHATBOT WIDGET LOGIC
   Builds the floating chat button + panel, and matches
   visitor questions to the best answer in CHATBOT_DATA using
   simple keyword scoring (no external API, works on any
   static host).
   ========================================================== */

(function () {
  const DATA = window.CHATBOT_DATA;
  if (!DATA) return;

  // ---------- Build widget DOM ----------
  const toggle = document.createElement('button');
  toggle.className = 'chatbot-toggle';
  toggle.setAttribute('aria-label', 'Open chat assistant');
  toggle.innerHTML = `
    <span class="chatbot-dot"></span>
    <svg class="icon-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    <svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
  `;

  const panel = document.createElement('div');
  panel.className = 'chatbot-panel';
  panel.innerHTML = `
    <div class="chatbot-header">
      <span class="chatbot-header-avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a5 5 0 0 1 5 5v2a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
      </span>
      <div class="chatbot-header-text">
        <div class="name">${DATA.botName}</div>
        <div class="status">Usually replies instantly</div>
      </div>
    </div>
    <div class="chatbot-messages" id="chatbotMessages"></div>
    <div class="chatbot-suggestions" id="chatbotSuggestions"></div>
    <div class="chatbot-input-row">
      <input type="text" id="chatbotInput" placeholder="Ask a question..." autocomplete="off">
      <button class="chatbot-send" id="chatbotSend" aria-label="Send message">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/></svg>
      </button>
    </div>
  `;

  document.body.appendChild(panel);
  document.body.appendChild(toggle);

  const messagesEl = panel.querySelector('#chatbotMessages');
  const suggestionsEl = panel.querySelector('#chatbotSuggestions');
  const inputEl = panel.querySelector('#chatbotInput');
  const sendBtn = panel.querySelector('#chatbotSend');

  let opened = false;

  // ---------- Open / close ----------
  function openPanel() {
    panel.classList.add('open');
    toggle.classList.add('open');
    toggle.setAttribute('aria-label', 'Close chat assistant');
    if (!opened) {
      opened = true;
      addBotMessage(DATA.greeting);
      renderSuggestions(DATA.suggestedQuestions);
    }
    setTimeout(() => inputEl.focus(), 200);
  }

  function closePanel() {
    panel.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-label', 'Open chat assistant');
  }

  toggle.addEventListener('click', () => {
    panel.classList.contains('open') ? closePanel() : openPanel();
  });

  // ---------- Messages ----------
  function addUserMessage(text) {
    const div = document.createElement('div');
    div.className = 'chat-msg user';
    div.textContent = text;
    messagesEl.appendChild(div);
    scrollToBottom();
  }

  function addBotMessage(text) {
    const div = document.createElement('div');
    div.className = 'chat-msg bot';
    div.textContent = text;
    messagesEl.appendChild(div);
    scrollToBottom();
  }

  function showTyping() {
    const div = document.createElement('div');
    div.className = 'chat-typing';
    div.id = 'chatTypingIndicator';
    div.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(div);
    scrollToBottom();
  }

  function hideTyping() {
    const el = document.getElementById('chatTypingIndicator');
    if (el) el.remove();
  }

  function scrollToBottom() {
    messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior: 'smooth' });
  }

  function renderSuggestions(list) {
    suggestionsEl.innerHTML = '';
    list.slice(0, 4).forEach((q, i) => {
      const chip = document.createElement('span');
      chip.className = 'suggestion-chip';
      chip.textContent = q;
      chip.style.animationDelay = `${i * 0.06}s`;
      chip.addEventListener('click', () => handleUserInput(q));
      suggestionsEl.appendChild(chip);
    });
  }

  // ---------- Matching logic ----------
  function findBestAnswer(userText) {
    const text = userText.toLowerCase();
    let bestScore = 0;
    let bestEntry = null;

    DATA.qa.forEach(entry => {
      let score = 0;
      entry.keywords.forEach(kw => {
        if (text.includes(kw)) score += kw.length; // longer/more specific keyword hits count more
      });
      if (score > bestScore) {
        bestScore = score;
        bestEntry = entry;
      }
    });

    return bestScore > 0 ? bestEntry.answer : DATA.fallback;
  }

  // ---------- Handle input ----------
  function handleUserInput(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    addUserMessage(trimmed);
    inputEl.value = '';
    suggestionsEl.innerHTML = '';

    showTyping();
    const delay = 500 + Math.random() * 400;
    setTimeout(() => {
      hideTyping();
      const answer = findBestAnswer(trimmed);
      addBotMessage(answer);
      renderSuggestions(DATA.suggestedQuestions);
    }, delay);
  }

  sendBtn.addEventListener('click', () => handleUserInput(inputEl.value));
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleUserInput(inputEl.value);
  });
})();
