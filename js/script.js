document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const pageLang = document.documentElement.lang.startsWith('en') ? 'en' : 'pt';

/* Assessment form */
const assessmentForm = document.getElementById('assessmentForm');

if (assessmentForm) {
  const steps = Array.from(assessmentForm.querySelectorAll('.form-step'));
  const backBtn = document.getElementById('formBack');
  const nextBtn = document.getElementById('formNext');
  const submitBtn = document.getElementById('formSubmit');
  const progressFill = document.getElementById('formProgressFill');
  const stepIndicator = document.getElementById('formStepIndicator');
  let current = 0;

  const suggestions = {
    'dor-muscular': {
      pt: { nome: 'Massagem Terapêutica', desc: 'Vai direta ao ponto onde a tensão se instalou — para aliviar o que já não larga os ombros, a lombar ou o pescoço.' },
      en: { nome: 'Therapeutic Massage', desc: "Goes straight to where the tension has settled — to relieve what won't let go of your shoulders, lower back or neck." }
    },
    'stress': {
      pt: { nome: 'Massagem Relaxante', desc: 'Toque suave e ritmo lento para desligar a cabeça e relaxar o corpo por completo.' },
      en: { nome: 'Relaxing Massage', desc: "Gentle touch and a slow rhythm to switch off your mind and relax the body completely." }
    },
    'desportiva': {
      pt: { nome: 'Massagem Desportiva', desc: 'Prepara os músculos, acelera a recuperação e previne lesões. Menos rigidez, mais performance.' },
      en: { nome: 'Sports Massage', desc: 'Prepares the muscles, speeds up recovery and prevents injury. Less stiffness, more performance.' }
    },
    'cronica': {
      pt: { nome: 'Deep Tissue', desc: 'Pressão sustentada nas camadas mais profundas para libertar tensões calcificadas. Dói a fazer, mas alivia a viver.' },
      en: { nome: 'Deep Tissue', desc: "Sustained pressure on the deepest layers to release calcified tension. It hurts while it's happening, but it's a relief for daily life." }
    },
    'relaxar': {
      pt: { nome: 'Massagem Relaxante', desc: 'Toque suave e ritmo lento para desligar a cabeça e relaxar o corpo por completo.' },
      en: { nome: 'Relaxing Massage', desc: "Gentle touch and a slow rhythm to switch off your mind and relax the body completely." }
    }
  };

  const messages = {
    pt: {
      intro: 'Olá Adriano, preenchi o questionário de avaliação no site:',
      nome: 'Nome', zona: 'Zona mais afetada', queixa: 'Queixa', duracao: 'Há quanto tempo',
      objetivo: 'Objetivo', sugestao: 'Sugestão inicial',
      stepOf: (n, total) => `Passo ${n} de ${total}`, yourAssessment: 'A sua avaliação'
    },
    en: {
      intro: 'Hello Adriano, I filled in the assessment questionnaire on the site:',
      nome: 'Name', zona: 'Most affected area', queixa: 'Complaint', duracao: 'How long',
      objetivo: 'Goal', sugestao: 'Initial suggestion',
      stepOf: (n, total) => `Step ${n} of ${total}`, yourAssessment: 'Your assessment'
    }
  };
  const m = messages[pageLang];

  function getAnswers() {
    const nome = assessmentForm.querySelector('#f-nome').value.trim();
    const zonaInput = assessmentForm.querySelector('input[name="zona"]:checked');
    const queixaInput = assessmentForm.querySelector('input[name="queixa"]:checked');
    const duracaoInput = assessmentForm.querySelector('input[name="duracao"]:checked');
    const objetivoInput = assessmentForm.querySelector('input[name="objetivo"]:checked');
    const queixaValue = queixaInput ? queixaInput.value : null;
    const sugestaoEntry = suggestions[queixaValue] || suggestions['dor-muscular'];

    return {
      nome,
      zona: zonaInput ? zonaInput.value : null,
      queixaLabel: queixaInput ? queixaInput.dataset.label : null,
      duracao: duracaoInput ? duracaoInput.value : null,
      objetivo: objetivoInput ? objetivoInput.value : null,
      sugestao: sugestaoEntry[pageLang]
    };
  }

  function updateStep() {
    steps.forEach((step, i) => step.classList.toggle('active', i === current));
    const isLast = current === steps.length - 1;
    backBtn.classList.toggle('visible', current > 0 && !isLast);
    nextBtn.style.display = isLast ? 'none' : 'inline-flex';
    submitBtn.classList.toggle('visible', isLast);
    progressFill.style.width = `${((current + 1) / steps.length) * 100}%`;
    stepIndicator.textContent = isLast ? m.yourAssessment : m.stepOf(current + 1, steps.length);

    if (isLast) {
      const { sugestao } = getAnswers();
      document.getElementById('resultTreatment').textContent = sugestao.nome;
      document.getElementById('resultDesc').textContent = sugestao.desc;
    }
  }

  function currentStepValid() {
    const radios = steps[current].querySelectorAll('input[type="radio"]');
    if (radios.length === 0) return true;
    return !!steps[current].querySelector('input[type="radio"]:checked');
  }

  backBtn.addEventListener('click', () => {
    if (current > 0) { current--; updateStep(); }
  });
  nextBtn.addEventListener('click', () => {
    if (currentStepValid() && current < steps.length - 1) { current++; updateStep(); }
  });

  assessmentForm.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    event.preventDefault();
    if (current < steps.length - 1) {
      if (currentStepValid()) { current++; updateStep(); }
    } else {
      assessmentForm.requestSubmit();
    }
  });

  assessmentForm.querySelectorAll('.choices').forEach(group => {
    group.querySelectorAll('input[type="radio"]').forEach(input => {
      input.addEventListener('change', () => {
        group.querySelectorAll('.choice').forEach(choice => choice.classList.remove('selected'));
        input.closest('.choice').classList.add('selected');

        const isLastStep = current === steps.length - 1;
        if (!isLastStep) {
          setTimeout(() => { current++; updateStep(); }, 300);
        }
      });
    });
  });

  updateStep();

  assessmentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!currentStepValid()) return;

    const { nome, zona, queixaLabel, duracao, objetivo, sugestao } = getAnswers();

    const linhas = [
      m.intro,
      nome ? `${m.nome}: ${nome}` : null,
      zona ? `${m.zona}: ${zona}` : null,
      queixaLabel ? `${m.queixa}: ${queixaLabel}` : null,
      duracao ? `${m.duracao}: ${duracao}` : null,
      objetivo ? `${m.objetivo}: ${objetivo}` : null,
      `${m.sugestao}: ${sugestao.nome}`
    ].filter(Boolean).join('\n');

    const url = `https://wa.me/351918127388?text=${encodeURIComponent(linhas)}`;
    window.open(url, '_blank', 'noopener');
  });
}

const carousel = document.getElementById('heroCarousel');
if (carousel) {
  setInterval(() => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    if (slides.length < 2) return;
    const current = carousel.querySelector('.carousel-slide.active');
    const currentIndex = Array.from(slides).indexOf(current);
    const next = slides[(currentIndex + 1) % slides.length];
    if (current) current.classList.remove('active');
    next.classList.add('active');
  }, 4000);
}
