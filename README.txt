FELIPE SANTOS — SITE V5
========================

Versão estática para hospedagem na HostGator.

CONTEÚDO
- Landing page responsiva e focada em contratação
- Galeria com 12 fotos locais
- Mosaico visual de Instagram usando as fotos já fornecidas
- Prévia visual de TikTok
- Área de destaque do YouTube sem necessidade de API
- Sua Música com botão direto para a faixa
- Formulário que monta uma mensagem e abre o WhatsApp
- Fontes locais em WOFF2: Cabin + Go Display

INSTALAÇÃO NA HOSTGATOR
1. Extraia o ZIP.
2. Envie o conteúdo da pasta felipe-santos-site para public_html.
3. O arquivo index.html deve ficar diretamente dentro de public_html.
4. Mantenha a pasta assets junto do index.html.

WHATSAPP
Edite assets/js/script.js e altere:
const WHATSAPP_NUMBER = 'COLOQUE_O_NUMERO_AQUI';
Use somente números, com DDI e DDD. Exemplo: 5584999999999

YOUTUBE
Como não há acesso à API do canal, a página não tenta descobrir o último vídeo automaticamente.
A área do YouTube fica preparada como destaque visual e abre o canal oficial.

Se quiser destacar um vídeo específico, no futuro podemos trocar a área de fallback por um embed oficial usando apenas o ID do vídeo, sem API.

REDES
Instagram: https://www.instagram.com/felipesantosofs/
TikTok: https://www.tiktok.com/@fsdobrasilofc
YouTube: https://youtube.com/@canalfelipesantos
Sua Música: https://suamusica.com.br/felipesantosOj/principe-encantado-felipe-santos-o-fs
