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
