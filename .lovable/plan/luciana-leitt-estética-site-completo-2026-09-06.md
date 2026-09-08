# Luciana Leitte Estética — site completo

Site de clínica de estética facial com catálogo, carrinho e agendamento que termina no WhatsApp. Visual minimalista, feminino e premium: rosa suave e branco, detalhes em rosa/vermelho, degradês discretos, cantos arredondados, sombras suaves e microanimações leves.

## Páginas e seções

**Início (uma página com navegação por seções, mais páginas próprias para detalhe do procedimento e finalização)**
- Topo fixo: nome da clínica, menu (Início, Procedimentos, Sobre, Antes e Depois, Depoimentos, FAQ, Contato), botão "Agendar pelo WhatsApp", ícone do carrinho com contador e menu hambúrguer no celular.
- Hero com imagem de estética facial, título forte, texto curto e os botões "Ver procedimentos" e "Agendar pelo WhatsApp".
- Faixa de benefícios: atendimento personalizado, foco em estética facial, cuidado em cada detalhe.
- Catálogo: procedimentos em destaque, filtro por categoria (Limpeza de Pele, Rejuvenescimento, Hidratação, Acne, Lábios, Contorno Facial, Tratamentos Faciais), busca por nome e cards com foto, nome, descrição curta, duração, valor, "Adicionar ao carrinho" e "Ver detalhes".
- Sobre a Luciana: foto e texto curto sobre atendimento e cuidado (sem inventar formação ou certificados).
- Antes e Depois: galeria de imagens de exemplo com aviso de que serão substituídas por fotos reais autorizadas.
- Depoimentos: exemplos fictícios, fáceis de trocar.
- FAQ em accordion com respostas curtas.
- Instagram: área pronta, sem @ inventado.
- Localização: endereço, cidade, horários, botão "Como chegar" e espaço reservado para o mapa.
- Contato: WhatsApp, Instagram, endereço, horários e botão de WhatsApp.
- Botão flutuante de WhatsApp no canto inferior com a mensagem "Olá Luciana, gostaria de saber mais sobre os procedimentos."

**Detalhe do procedimento:** foto grande, nome, descrição, benefícios, duração, preço e botão de adicionar ao carrinho. Sem pop-ups.

**Carrinho e agendamento:** adicionar, remover, alterar quantidade, subtotal, limpar carrinho e finalizar. O carrinho fica salvo no navegador e sobrevive à atualização da página. Na finalização pede apenas nome, data e horário (sem login), mostra o resumo e o botão "Confirmar e abrir WhatsApp".

## Mensagem do WhatsApp

Número: +55 62 98200-8960.
- Um procedimento: «Olá Luciana, gostaria de fazer [PROCEDIMENTO], no dia [DATA] às [HORÁRIO]. Estará disponível?»
- Dois ou mais: «Olá Luciana, gostaria de fazer os seguintes procedimentos: [PROCEDIMENTOS], no dia [DATA] às [HORÁRIO]. Estará disponível?»

O WhatsApp abre com a mensagem já escrita e o carrinho é limpo depois.

## Conteúdo de exemplo

Preços, textos, depoimentos, endereço e horários entram como exemplos claramente marcados para troca. As imagens serão geradas como fotos demonstrativas de estética facial (rosto, cuidados com a pele, ambiente da clínica) até você enviar as reais.

## Detalhes técnicos

- Projeto atual em TanStack Start (React + Vite) com Tailwind v4; mantemos essa base, sem bibliotecas extras além de ícones e do accordion já disponíveis. Nada de framework adicional.
- Arquivo único de configuração `src/config/clinic.ts` com nome, WhatsApp, Instagram, endereço, horários, categorias e lista de procedimentos (nome, descrição, benefícios, duração, preço, imagem, destaque), com comentários indicando onde editar.
- Carrinho em hook próprio com persistência em `localStorage` e contador reativo no topo.
- Rotas: `/` (home com todas as seções), `/procedimentos/$slug` (detalhe), `/carrinho` (carrinho + agendamento).
- Tokens de cor/tipografia em `src/styles.css`; imagens com lazy loading e dimensões definidas; título e descrição próprios por página.
