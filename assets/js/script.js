// CONFIGURAÇÃO: coloque aqui o número do WhatsApp do Felipe, somente números, com DDI e DDD.
// Exemplo: const WHATSAPP_NUMBER = '5584999999999';
const WHATSAPP_NUMBER = 'COLOQUE_O_NUMERO_AQUI';

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => header?.classList.toggle('scrolled', window.scrollY > 20));
menuToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

function openWhatsApp(message) {
  if (!WHATSAPP_NUMBER || WHATSAPP_NUMBER.includes('COLOQUE')) {
    alert('Configure o número do WhatsApp do Felipe no arquivo assets/js/script.js.');
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
}

const form = document.getElementById('bookingForm');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const nome = data.get('nome');
  const whatsapp = data.get('whatsapp');
  const evento = data.get('evento');
  const date = data.get('data');
  const local = data.get('local');
  const publico = data.get('publico') || 'Não informado';
  const mensagem = data.get('mensagem') || 'Não informado';
  const dateBR = date ? date.split('-').reverse().join('/') : 'Não informada';
  const text = `Olá, Felipe! Meu nome é ${nome}.\n\nGostaria de solicitar um orçamento para o meu evento.\n\n🎤 Evento: ${evento}\n📅 Data: ${dateBR}\n📍 Local: ${local}\n👥 Público estimado: ${publico}\n📱 Meu WhatsApp: ${whatsapp}\n\n📝 Detalhes: ${mensagem}`;
  openWhatsApp(text);
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox?.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(item => item.addEventListener('click', () => {
  if (!lightbox || !lightboxImg) return;
  lightboxImg.src = item.dataset.img;
  lightboxImg.alt = item.querySelector('img')?.alt || 'Foto de Felipe Santos';
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}));
function closeLightbox(){ if (!lightbox || !lightboxImg) return; lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); lightboxImg.src=''; }
lightbox?.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeLightbox(); });

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if(entry.isIntersecting) entry.target.classList.add('visible');
}), {threshold:.08});
document.querySelectorAll('section > .container, .feature, .event-card, .social-card, .showcase-main, .showcase-photo').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
