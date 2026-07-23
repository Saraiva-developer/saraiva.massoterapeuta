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

/* Translations */
const translations = {
  pt: {
    'logo.sub': 'Massoterapeuta',
    'nav.sobre': 'Sobre', 'nav.servicos': 'Serviços', 'nav.empresas': 'Empresas',
    'nav.porque': 'Porquê Escolher-me', 'nav.processo': 'Como Funciona',
    'nav.avaliacao': 'Avaliação', 'nav.contacto': 'Contacto', 'nav.openMenu': 'Abrir menu',
    'hero.h1': 'Liberte a tensão. Recupere o movimento. Volte a sentir-se bem.',
    'hero.subtitle': 'Massagem Terapêutica, Desportiva e Deep Tissue, desenhadas exclusivamente para si. Aliviam dores que teimam em ficar, soltam os músculos enrijecidos e devolvem a leveza à sua rotina — seja no treino, no trabalho ou no descanso.',
    'hero.btnBook': 'Marcar consulta', 'hero.btnServices': 'Ver serviços',
    'about.eyebrow': 'Sobre mim',
    'about.h2': 'Cada corpo conta uma história. E cada sessão é um capítulo de recuperação.',
    'about.p1': 'Sou o Saraiva, massoterapeuta certificado pelo Instituto Nacional de Naturologia (2024). Mais do que aplicar técnicas, acredito em ouvir o seu corpo. Por isso, integro 9 abordagens diferentes — da massagem profunda (Deep Tissue) à precisão da Reflexologia, passando pelo Shiatsu e Tui Ná.',
    'about.p2': 'Não aplico "receitas" fechadas. Avalio, escuto e combino o melhor de cada técnica para responder exatamente ao que o seu corpo precisa: seja para curar uma lesão, melhorar a performance ou simplesmente silenciar o ruído da rotina.',
    'services.eyebrow': 'Serviços', 'services.h2': 'Escolha a técnica certa para o que o seu corpo sente',
    'services.tag': 'Especialidade',
    'services.s1.name': 'Massagem Terapêutica',
    'services.s1.desc': 'Para dores que já não largam os ombros, a zona lombar ou o pescoço. Esta massagem vai direta ao ponto onde a tensão se instalou — desfazendo nós, devolvendo a amplitude de movimento e aliviando o desconforto que atrapalha o seu dia. Não é uma massagem "agradável" por acaso; é uma massagem que resolve.',
    'services.s2.name': 'Massagem Desportiva',
    'services.s2.desc': 'Para quem treina forte, compete ou simplesmente se mantém ativo. Prepara os músculos antes do esforço, acelera a recuperação pós-treino e previne lesões. Menos rigidez, mais performance. Para o seu corpo render mais — e recuperar melhor.',
    'services.s3.name': 'Deep Tissue',
    'services.s3.desc': 'Para contraturas profundas e zonas que já resistiram a outras abordagens. Com pressão sustentada e técnica precisa, atuo nas camadas mais internas da musculatura e fáscia — libertando aquelas tensões calcificadas que parecem não ter fim. Dói a fazer, mas alivia a viver.',
    'services.techHeading': 'Para além da especialidade, um leque ao seu dispor',
    'services.t1.name': 'Massagem Relaxante', 'services.t1.desc': 'Para quando a cabeça não desliga e o corpo está em alerta permanente. Toque suave e ritmo lento que induzem um relaxamento total.',
    'services.t2.name': 'Drenagem Linfática', 'services.t2.desc': 'Para pernas pesadas, retenção de líquidos e sensação de inchaço. Movimentos suaves e precisos que ativam o sistema linfático e devolvem a leveza ao corpo.',
    'services.t3.name': 'Shiatsu', 'services.t3.desc': 'Técnica japonesa de pressão em pontos específicos para equilibrar a energia do corpo. Ideal quando a tensão é física e emocional ao mesmo tempo.',
    'services.t4.name': 'Tui Ná', 'services.t4.desc': 'Massagem terapêutica tradicional chinesa que trabalha os meridianos energéticos. Para desbloquear tensões profundas e restaurar o fluxo vital.',
    'services.t5.name': 'Reflexologia', 'services.t5.desc': 'Estimulação de pontos nos pés que correspondem a órgãos e sistemas do corpo. Um relaxamento que começa nos pés e se reflete no corpo inteiro.',
    'services.t6.name': 'Auriculoterapia', 'services.t6.desc': 'Estimulação de pontos específicos na orelha para alívio de tensão e bem-estar.',
    'companies.eyebrow': 'Parcerias Empresariais', 'companies.h2': 'Bem-estar que a sua equipa merece',
    'companies.lead': 'Empresas parceiras oferecem aos seus colaboradores acesso a massagem terapêutica com condições exclusivas — porque uma equipa com menos tensão trabalha melhor, pensa melhor e descansa melhor.',
    'companies.tier1.label': 'Primeiras 3 sessões',
    'companies.tier1.desc': 'Valor de entrada para experimentar sem compromisso.',
    'companies.tier2.label': 'A partir da 4ª sessão',
    'companies.tier2.desc': 'Preço fixo e exclusivo para colaboradores, enquanto a parceria se mantiver.',
    'companies.perSession': '/ sessão', 'companies.partnersLabel': 'Empresas parceiras',
    'companies.ctaText': 'É responsável pela sua empresa e quer oferecer isto à sua equipa?',
    'companies.ctaBtn': 'Falar sobre uma parceria',
    'why.eyebrow': 'Porquê escolher-me', 'why.h2': 'Um cuidado pensado para si',
    'why.b1.name': 'Ambiente calmo e sem pressa', 'why.b1.desc': 'Sessões num espaço discreto e tranquilo, onde não há relógio a ditar o fim.',
    'why.b2.name': 'Horários flexíveis', 'why.b2.desc': 'Disponibilidade ao final do dia e aos fins de semana, para se ajustar perfeitamente à sua rotina.',
    'why.b3.name': 'Ajuste em tempo real', 'why.b3.desc': 'A cada minuto, vou ajustando a pressão e a técnica com base na sua resposta — nada é fixo, tudo é ouvido.',
    'why.b4.name': 'Sem pacotes obrigatórios', 'why.b4.desc': 'Sem planos de 10 sessões, sem mensalidades. Marca quando precisar, sem compromisso.',
    'process.eyebrow': 'Como funciona', 'process.h2': 'Do primeiro contacto à sua recuperação',
    'process.lead': 'Um processo simples, pensado para que saiba sempre o que esperar.',
    'process.p1.name': 'Contacto', 'process.p1.desc': 'Envia uma mensagem a explicar o que sente e o que procura.',
    'process.p2.name': 'Avaliação', 'process.p2.desc': 'Conversamos sobre o que sente, onde dói e o que espera da sessão — para eu traçar um plano sob medida para si.',
    'process.p3.name': 'Sessão personalizada', 'process.p3.desc': 'Aplico a técnica, ou combinação de técnicas, mais adequada ao seu caso.',
    'process.p4.name': 'Acompanhamento', 'process.p4.desc': 'Partilho recomendações práticas para manter os resultados entre sessões.',
    'assess.eyebrow': 'Antes de marcar', 'assess.h2': 'Conte-me como se sente',
    'assess.lead': 'Um pequeno questionário para eu perceber melhor a sua situação — não substitui uma avaliação clínica, mas ajuda a começar com o pé direito. As suas respostas seguem diretamente para o meu WhatsApp.',
    'assess.nameLabel': 'O seu nome', 'assess.namePlaceholder': 'Como se chama?',
    'assess.q2': 'Qual a zona do corpo onde sente maior desconforto?',
    'assess.zona.1': 'Coluna lombar ou dorsal', 'assess.zona.2': 'Pescoço e ombros', 'assess.zona.3': 'Membros inferiores (pernas)',
    'assess.zona.4': 'Desconforto generalizado', 'assess.zona.5': 'Outra zona',
    'assess.q3': 'Como classificaria a natureza da sua queixa?',
    'assess.queixa.1': 'Tensão ou dor muscular localizada', 'assess.queixa.2': 'Stress acumulado e tensão nervosa',
    'assess.queixa.3': 'Fadiga ou recuperação pós-esforço físico', 'assess.queixa.4': 'Dor persistente ou de longa duração',
    'assess.queixa.5': 'Sem queixa específica, apenas relaxamento',
    'assess.q4': 'Há quanto tempo apresenta este quadro?',
    'assess.duracao.1': 'Menos de uma semana', 'assess.duracao.2': 'Entre 2 a 4 semanas',
    'assess.duracao.3': 'Vários meses', 'assess.duracao.4': 'Mais de um ano ou condição recorrente',
    'assess.q5': 'Qual o principal objetivo que procura alcançar com a sessão?',
    'assess.objetivo.1': 'Redução e alívio da dor', 'assess.objetivo.2': 'Recuperação muscular e desportiva',
    'assess.objetivo.3': 'Relaxamento e gestão do stress', 'assess.objetivo.4': 'Melhoria da mobilidade e amplitude de movimento',
    'assess.resultLabel': 'A sua sugestão inicial',
    'assess.resultNext': 'Envie-me estas respostas para marcarmos a sua sessão.',
    'assess.back': 'Voltar', 'assess.next': 'Seguinte', 'assess.submit': 'Marcar sessão com esta sugestão',
    'assess.stepOf': 'Passo {n} de {total}', 'assess.yourAssessment': 'A sua avaliação',
    'cta.h2': 'Vamos agendar a sua sessão', 'cta.p': 'Envie-me uma mensagem e combinamos o melhor dia e horário para si.',
    'cta.btn': 'Enviar mensagem',
    'cta.hours': 'Segunda a sexta: 09h–21h (mediante disponibilidade) · Sábado: 09h–13h, ou por marcação urgente.',
    'cta.note': '(+351) 918 127 388 · Pagamento em dinheiro ou MB WAY.',
    'footer.brand': 'Adriano Saraiva — Massagista Terapêutico', 'footer.rights': 'Todos os direitos reservados.'
  },
  en: {
    'logo.sub': 'Massage Therapist',
    'nav.sobre': 'About', 'nav.servicos': 'Services', 'nav.empresas': 'Companies',
    'nav.porque': 'Why Choose Me', 'nav.processo': 'How It Works',
    'nav.avaliacao': 'Assessment', 'nav.contacto': 'Contact', 'nav.openMenu': 'Open menu',
    'hero.h1': 'Release the tension. Recover your movement. Feel good again.',
    'hero.subtitle': "Therapeutic, Sports and Deep Tissue massage, designed exclusively for you. They relieve pain that lingers, loosen stiff muscles and bring lightness back to your routine — whether at training, at work or at rest.",
    'hero.btnBook': 'Book a session', 'hero.btnServices': 'View services',
    'about.eyebrow': 'About me',
    'about.h2': 'Every body tells a story. Every session is a chapter of recovery.',
    'about.p1': "I'm Saraiva, a massage therapist certified by Instituto Nacional de Naturologia (2024). More than applying techniques, I believe in listening to your body. That's why I draw on 9 different approaches — from deep tissue work to the precision of reflexology, through shiatsu and tui na.",
    'about.p2': "I don't apply fixed \"recipes\". I assess, listen and combine the best of each technique to respond exactly to what your body needs: whether that's healing an injury, improving performance, or simply quieting the noise of everyday routine.",
    'services.eyebrow': 'Services', 'services.h2': 'Choose the right technique for how your body feels',
    'services.tag': 'Specialty',
    'services.s1.name': 'Therapeutic Massage',
    'services.s1.desc': "For pain that won't let go of your shoulders, lower back or neck. This massage goes straight to where the tension has settled — undoing knots, restoring range of motion and relieving the discomfort that gets in the way of your day. It's not a \"nice\" massage by accident; it's a massage that solves.",
    'services.s2.name': 'Sports Massage',
    'services.s2.desc': "For anyone who trains hard, competes, or simply stays active. Prepares the muscles before effort, speeds up post-workout recovery and prevents injury. Less stiffness, more performance. So your body can push further — and recover better.",
    'services.s3.name': 'Deep Tissue',
    'services.s3.desc': "For deep contractures and areas that have resisted other approaches. With sustained pressure and precise technique, I work the deepest layers of muscle and fascia — releasing that calcified tension that seems to never end. It hurts while it's happening, but it's a relief for daily life.",
    'services.techHeading': 'Beyond the specialties, a range at your disposal',
    'services.t1.name': 'Relaxing Massage', 'services.t1.desc': "For when your mind won't switch off and your body stays on permanent alert. Gentle touch and a slow rhythm that bring total relaxation.",
    'services.t2.name': 'Lymphatic Drainage', 'services.t2.desc': "For heavy legs, fluid retention and that swollen feeling. Gentle, precise movements that activate the lymphatic system and bring lightness back to the body.",
    'services.t3.name': 'Shiatsu', 'services.t3.desc': "Japanese pressure-point technique to balance the body's energy. Ideal when the tension is physical and emotional at once.",
    'services.t4.name': 'Tui Na', 'services.t4.desc': 'Traditional Chinese therapeutic massage that works the energy meridians. To unblock deep tension and restore vital flow.',
    'services.t5.name': 'Reflexology', 'services.t5.desc': "Stimulation of points on the feet that correspond to the body's organs and systems. A relaxation that starts at the feet and reaches the whole body.",
    'services.t6.name': 'Auriculotherapy', 'services.t6.desc': 'Stimulation of specific points on the ear for tension relief and wellbeing.',
    'companies.eyebrow': 'Corporate Partnerships', 'companies.h2': 'The wellbeing your team deserves',
    'companies.lead': 'Partner companies give their employees access to therapeutic massage with exclusive rates — because a team with less tension works better, thinks better and rests better.',
    'companies.tier1.label': 'First 3 sessions',
    'companies.tier1.desc': 'An introductory rate to try it out with no commitment.',
    'companies.tier2.label': 'From the 4th session onward',
    'companies.tier2.desc': 'A fixed, exclusive rate for employees for as long as the partnership continues.',
    'companies.perSession': '/ session', 'companies.partnersLabel': 'Partner companies',
    'companies.ctaText': 'Do you manage a company and want to offer this to your team?',
    'companies.ctaBtn': 'Talk about a partnership',
    'why.eyebrow': 'Why choose me', 'why.h2': 'Care designed around you',
    'why.b1.name': 'A calm, unhurried environment', 'why.b1.desc': 'Sessions in a discreet, peaceful space, where no clock dictates the end.',
    'why.b2.name': 'Flexible scheduling', 'why.b2.desc': 'Available in the evenings and on weekends, to fit perfectly around your routine.',
    'why.b3.name': 'Real-time adjustment', 'why.b3.desc': "Every minute, I adjust pressure and technique based on how you respond — nothing is fixed, everything is heard.",
    'why.b4.name': 'No mandatory packages', 'why.b4.desc': 'No 10-session plans, no monthly fees. Book whenever you need to, with no commitment.',
    'process.eyebrow': 'How it works', 'process.h2': 'From first contact to your recovery',
    'process.lead': 'A simple process, designed so you always know what to expect.',
    'process.p1.name': 'Contact', 'process.p1.desc': "Send a message explaining how you feel and what you're looking for.",
    'process.p2.name': 'Assessment', 'process.p2.desc': "We talk about how you feel, where it hurts and what you expect from the session — so I can map out a plan tailored to you.",
    'process.p3.name': 'Personalised session', 'process.p3.desc': 'I apply the technique, or combination of techniques, best suited to your case.',
    'process.p4.name': 'Follow-up', 'process.p4.desc': 'I share practical recommendations to help maintain results between sessions.',
    'assess.eyebrow': 'Before you book', 'assess.h2': 'Tell me how you feel',
    'assess.lead': "A short questionnaire to help me understand your situation better — it doesn't replace a clinical assessment, but it helps us start off on the right foot. Your answers go straight to my WhatsApp.",
    'assess.nameLabel': 'Your name', 'assess.namePlaceholder': "What's your name?",
    'assess.q2': 'Which area of your body feels most uncomfortable?',
    'assess.zona.1': 'Lower or upper back', 'assess.zona.2': 'Neck and shoulders', 'assess.zona.3': 'Lower limbs (legs)',
    'assess.zona.4': 'General discomfort', 'assess.zona.5': 'Another area',
    'assess.q3': 'How would you describe your complaint?',
    'assess.queixa.1': 'Localised muscle tension or pain', 'assess.queixa.2': 'Built-up stress and nervous tension',
    'assess.queixa.3': 'Fatigue or recovery after physical effort', 'assess.queixa.4': 'Persistent or long-term pain',
    'assess.queixa.5': 'No specific complaint, just relaxation',
    'assess.q4': 'How long have you had this?',
    'assess.duracao.1': 'Less than a week', 'assess.duracao.2': '2 to 4 weeks',
    'assess.duracao.3': 'Several months', 'assess.duracao.4': 'Over a year, or a recurring condition',
    'assess.q5': "What's the main goal you'd like to achieve with the session?",
    'assess.objetivo.1': 'Reduce and relieve pain', 'assess.objetivo.2': 'Muscle and sports recovery',
    'assess.objetivo.3': 'Relaxation and stress management', 'assess.objetivo.4': 'Improve mobility and range of motion',
    'assess.resultLabel': 'Your initial suggestion',
    'assess.resultNext': "Send me these answers so we can book your session.",
    'assess.back': 'Back', 'assess.next': 'Next', 'assess.submit': 'Book a session with this suggestion',
    'assess.stepOf': 'Step {n} of {total}', 'assess.yourAssessment': 'Your assessment',
    'cta.h2': "Let's book your session", 'cta.p': "Send me a message and we'll arrange the best day and time for you.",
    'cta.btn': 'Send message',
    'cta.hours': 'Monday to Friday: 9am–9pm (subject to availability) · Saturday: 9am–1pm, or by urgent request.',
    'cta.note': '(+351) 918 127 388 · Cash or MB WAY payment.',
    'footer.brand': 'Adriano Saraiva — Therapeutic Massage Therapist', 'footer.rights': 'All rights reserved.'
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';
const langToggle = document.getElementById('langToggle');

function applyTranslations(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt-PT';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  if (langToggle) langToggle.textContent = lang === 'en' ? 'PT' : 'EN';
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  applyTranslations(lang);
  if (typeof refreshAssessmentLanguage === 'function') refreshAssessmentLanguage();
}

if (langToggle) {
  langToggle.addEventListener('click', () => {
    setLanguage(currentLang === 'en' ? 'pt' : 'en');
  });
}

applyTranslations(currentLang);

/* Assessment form */
const assessmentForm = document.getElementById('assessmentForm');
let refreshAssessmentLanguage = null;

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
      sugestaoPt: sugestaoEntry.pt,
      sugestaoDisplay: sugestaoEntry[currentLang] || sugestaoEntry.pt
    };
  }

  function updateStep() {
    steps.forEach((step, i) => step.classList.toggle('active', i === current));
    backBtn.classList.toggle('visible', current > 0);
    const isLast = current === steps.length - 1;
    nextBtn.style.display = isLast ? 'none' : 'inline-flex';
    submitBtn.classList.toggle('visible', isLast);
    progressFill.style.width = `${((current + 1) / steps.length) * 100}%`;
    stepIndicator.textContent = isLast
      ? translations[currentLang]['assess.yourAssessment']
      : translations[currentLang]['assess.stepOf'].replace('{n}', current + 1).replace('{total}', steps.length);

    if (isLast) {
      const { sugestaoDisplay } = getAnswers();
      document.getElementById('resultTreatment').textContent = sugestaoDisplay.nome;
      document.getElementById('resultDesc').textContent = sugestaoDisplay.desc;
    }
  }

  refreshAssessmentLanguage = updateStep;

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

    const { nome, zona, queixaLabel, duracao, objetivo, sugestaoPt } = getAnswers();

    const linhas = [
      'Olá Adriano, preenchi o questionário de avaliação no site:',
      nome ? `Nome: ${nome}` : null,
      zona ? `Zona mais afetada: ${zona}` : null,
      queixaLabel ? `Queixa: ${queixaLabel}` : null,
      duracao ? `Há quanto tempo: ${duracao}` : null,
      objetivo ? `Objetivo: ${objetivo}` : null,
      `Sugestão inicial: ${sugestaoPt.nome}`
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
