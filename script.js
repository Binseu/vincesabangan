// ===== PAGE LOADER =====
window.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('pageLoader');
  setTimeout(() => {
    loader.classList.add('exit');
    setTimeout(() => loader.remove(), 800);
  }, 1600);
});

// ===== CUSTOM CURSOR =====
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, input, textarea, .theme-toggle').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    ring.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    ring.classList.remove('hover');
  });
});

// ===== ACTIVE NAV HIGHLIGHT =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { threshold: 0.3 });

sections.forEach(section => navObserver.observe(section));

// ===== SMOOTH SCROLL & CLEAN URL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      
      // Update the URL without the '#'
      const path = targetId === 'hero' ? '/' : `/${targetId}`;
      window.history.pushState(null, '', path);
    }
  });
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => revealObserver.observe(el));

// ===== SKILL PROGRESS BARS =====
const skillCards = document.querySelectorAll('.skill-card');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.skill-bar-fill');
      bars.forEach((bar, i) => {
        setTimeout(() => {
          bar.style.width = bar.getAttribute('data-width') + '%';
        }, i * 200);
      });
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
skillCards.forEach(card => barObserver.observe(card));

// ===== TECH STACK MARQUEE =====
const row1Items = [
  { name: "Python", icon: "Tech Stack Logo/python-svgrepo-com.svg" },
  { name: "C#", icon: "Tech Stack Logo/csharp-svgrepo-com.svg" },
  { name: "PHP", icon: "Tech Stack Logo/php-logo-svgrepo-com.svg" },
  { name: "Laravel", icon: "Tech Stack Logo/laravel-svgrepo-com.svg" },
  { name: ".NET", icon: "Tech Stack Logo/dotnet-svgrepo-com.svg" },
  { name: "MySQL", icon: "Tech Stack Logo/mysql-logo-svgrepo-com.svg" },
];

const row2Items = [
  { name: "Power Apps", icon: "Tech Stack Logo/Powerapps-logo.svg", badge: "PA" },
  { name: "Power Automate", icon: "Tech Stack Logo/PowerAutomate.svg", badge: "PA" },
  { name: "VB.NET", icon: "Tech Stack Logo/vbnet-svgrepo-com.svg", badge: "VB" },
  { name: "XAMPP", icon: "Tech Stack Logo/xampp-svgrepo-com.svg", badge: "XA" },
];

function makeBadge(iconWrap, item) {
  iconWrap.innerHTML = "";
  iconWrap.classList.add("badge");
  iconWrap.textContent = item.badge || item.name.substring(0, 2).toUpperCase();
}

function buildRow(container, items) {
  if (!container) return;
  // Quadruple the list to guarantee seamless scrolling across wide screens
  const doubled = [...items, ...items, ...items, ...items];
  doubled.forEach(item => {
    const el = document.createElement("div");
    el.className = "tech-item";

    const iconWrap = document.createElement("div");
    iconWrap.className = "tech-icon";

    if (item.icon) {
      const img = document.createElement("img");
      img.src = item.icon;
      img.alt = item.name;
      img.onerror = () => makeBadge(iconWrap, item);
      iconWrap.appendChild(img);
    } else {
      makeBadge(iconWrap, item);
    }

    const label = document.createElement("div");
    label.className = "tech-name";
    label.textContent = item.name;

    el.appendChild(iconWrap);
    el.appendChild(label);
    container.appendChild(el);
  });
}

buildRow(document.getElementById("row1"), row1Items);
buildRow(document.getElementById("row2"), row2Items);

// ===== CONTACT FORM =====
const sendBtn = document.getElementById('sendBtn');
if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name = document.getElementById('formName');
    const email = document.getElementById('formEmail');
    const msg = document.getElementById('formMsg');
    const success = document.getElementById('formSuccess');
    let valid = true;

    [name, email].forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#e63946';
        setTimeout(() => field.style.borderColor = '', 1500);
        valid = false;
      }
    });

    if (valid) {
      sendBtn.textContent = 'Sending...';
      sendBtn.disabled = true;
      sendBtn.style.opacity = '0.6';

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'e07ba16a-01c4-412f-be07-a11130ed5fe6',
          subject: 'New Submission from Portfolio',
          name: name.value.trim(),
          email: email.value.trim(),
          message: msg.value.trim()
        })
      })
        .then(async (response) => {
          if (response.status === 200) {
            sendBtn.textContent = 'Sent ✓';
            success.classList.add('show');
            name.value = ''; email.value = ''; msg.value = '';
          } else {
            sendBtn.textContent = 'Failed to Send';
            sendBtn.disabled = false;
            sendBtn.style.opacity = '1';
          }
        })
        .catch(error => {
          console.error(error);
          sendBtn.textContent = 'Error';
          sendBtn.disabled = false;
          sendBtn.style.opacity = '1';
        });
    }
  });
}

// ===== TYPING TEST GAMIFICATION =====
const playBtn = document.getElementById('playBtn');
const typingModal = document.getElementById('typingModal');
const typingPrompt = document.getElementById('typingPrompt');
const virtualKeyboard = document.getElementById('virtualKeyboard');
const statWpm = document.getElementById('statWpm');
const statAcc = document.getElementById('statAcc');
const statTime = document.getElementById('statTime');

const WORD_LIST = ['the', 'be', 'of', 'and', 'a', 'to', 'in', 'he', 'have', 'it', 'that', 'for', 'they', 'I', 'with', 'as', 'not', 'on', 'she', 'at', 'by', 'this', 'we', 'you', 'do', 'but', 'from', 'or', 'which', 'one', 'would', 'all', 'will', 'there', 'say', 'who', 'make', 'when', 'can', 'more', 'if', 'no', 'man', 'out', 'other', 'so', 'what', 'time', 'up', 'go', 'about', 'than', 'into', 'could', 'state', 'only', 'new', 'year', 'some', 'take', 'come', 'these', 'know', 'see', 'use', 'get', 'like', 'then', 'first', 'any', 'work', 'now', 'may', 'such', 'give', 'over', 'think', 'most', 'even', 'find', 'day', 'also', 'after', 'way', 'many', 'must', 'look', 'before', 'great', 'back', 'through', 'long', 'where', 'much', 'should', 'well', 'people', 'down', 'own', 'just', 'because', 'good', 'each', 'those', 'feel', 'seem', 'how', 'high', 'too', 'place', 'little', 'world', 'very', 'still', 'nation', 'hand', 'old', 'life', 'tell', 'write', 'become', 'here', 'show', 'house', 'both', 'between', 'need', 'mean', 'call', 'develop', 'under', 'last', 'right', 'move', 'thing', 'general', 'school', 'never', 'same', 'another', 'begin', 'while', 'number', 'part', 'turn', 'real', 'leave', 'might', 'want', 'point', 'form', 'off', 'child', 'few', 'small', 'since', 'against', 'ask', 'late', 'home', 'interest', 'large', 'person', 'end', 'open', 'public', 'follow', 'during', 'present', 'without', 'again', 'hold', 'govern', 'around', 'possible', 'head', 'consider', 'word', 'program', 'problem', 'however', 'lead', 'system', 'set', 'order', 'eye', 'plan', 'run', 'keep', 'face', 'fact', 'group', 'play', 'stand', 'increase', 'early', 'course', 'change', 'help', 'line'];

const KEYBOARD_LAYOUT = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  [' ']
];

let targetText = '';
let currentIdx = 0;
let errors = 0;
let startTime = null;
let timerInterval = null;
let isPlaying = false;

function generateKeyboard() {
  virtualKeyboard.innerHTML = '';
  KEYBOARD_LAYOUT.forEach(row => {
    const rowEl = document.createElement('div');
    rowEl.className = 'kb-row';
    row.forEach(key => {
      const keyEl = document.createElement('div');
      keyEl.className = `key ${key === ' ' ? 'space' : ''}`;
      keyEl.dataset.key = key;
      keyEl.textContent = key === ' ' ? 'SPACE' : key;
      rowEl.appendChild(keyEl);
    });
    virtualKeyboard.appendChild(rowEl);
  });
}

function initGame() {
  clearInterval(timerInterval);
  targetText = Array.from({ length: 20 }, () => WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]).join(' ').toLowerCase();
  typingPrompt.innerHTML = targetText.split('').map(c => `<span>${c}</span>`).join('');
  currentIdx = 0;
  errors = 0;
  startTime = null;
  isPlaying = true;
  statWpm.textContent = '0';
  statAcc.textContent = '100';
  statTime.textContent = '0';
  updateCursor();
}

function updateCursor() {
  const spans = typingPrompt.querySelectorAll('span');
  spans.forEach(s => s.classList.remove('active'));
  if (currentIdx < spans.length) {
    spans[currentIdx].classList.add('active');
  }

  const keys = virtualKeyboard.querySelectorAll('.key');
  keys.forEach(k => k.classList.remove('expected'));
  if (currentIdx < targetText.length) {
    const expectedKey = targetText[currentIdx];
    const keyEl = virtualKeyboard.querySelector(`.key[data-key="${expectedKey}"]`);
    if (keyEl) keyEl.classList.add('expected');
  }
}

function startGameTimer() {
  if (startTime) return;
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const timeElapsed = Math.floor((Date.now() - startTime) / 1000);
    statTime.textContent = timeElapsed;
    if (timeElapsed > 0) {
      const wpm = Math.round((currentIdx / 5) / (timeElapsed / 60));
      statWpm.textContent = wpm;
    }
  }, 1000);
}

function handleTyping(e) {
  if (!isPlaying) return;
  if (e.key === 'Tab') {
    e.preventDefault();
    initGame();
    return;
  }
  if (e.key === 'Escape') {
    closeModal();
    return;
  }
  if (e.key === 'Backspace') {
    if (currentIdx > 0) {
      currentIdx--;
      const spans = typingPrompt.querySelectorAll('span');
      if (spans[currentIdx].classList.contains('incorrect')) {
        errors--;
      }
      spans[currentIdx].classList.remove('correct', 'incorrect');

      const accuracy = currentIdx > 0 ? Math.round(((currentIdx - errors) / currentIdx) * 100) : 100;
      statAcc.textContent = Math.max(0, accuracy);
      updateCursor();
    }
    return;
  }

  if (e.key.length !== 1) return; // ignore meta keys
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  e.preventDefault();
  startGameTimer();

  const spans = typingPrompt.querySelectorAll('span');
  if (currentIdx >= targetText.length) return;

  const expectedChar = targetText[currentIdx];
  if (e.key === expectedChar) {
    spans[currentIdx].classList.add('correct');
  } else {
    spans[currentIdx].classList.add('incorrect');
    errors++;
  }
  currentIdx++;

  const accuracy = Math.round(((currentIdx - errors) / currentIdx) * 100);
  statAcc.textContent = Math.max(0, accuracy);

  if (currentIdx >= targetText.length) {
    clearInterval(timerInterval);
    isPlaying = false;
    spans.forEach(s => s.classList.remove('active'));
    virtualKeyboard.querySelectorAll('.key').forEach(k => k.classList.remove('expected'));
  } else {
    updateCursor();
  }
}

function openModal() {
  typingModal.classList.remove('hidden');
  document.addEventListener('keydown', handleTyping);
  generateKeyboard();
  initGame();
}

function closeModal() {
  typingModal.classList.add('hidden');
  document.removeEventListener('keydown', handleTyping);
  clearInterval(timerInterval);
  isPlaying = false;
}

if (playBtn) playBtn.addEventListener('click', openModal);
