# Ajustar a foto inicial no celular e computador

## Resultado desejado
- No celular, manter a foto visível por trás do conteúdo até o botão **Ver procedimentos**, posicionado abaixo de **Agendar pelo WhatsApp**.
- No computador, equilibrar o enquadramento da foto com os textos e botões, preservando a visibilidade do rosto.
- Manter a foto atual, os textos, o status e o funcionamento dos botões.

## Ajustes
1. Suavizar a camada clara sobre a foto: hoje ela fica quase opaca na metade inferior, embora a imagem ocupe toda a seção.
2. Ajustar a altura e o enquadramento no celular para a foto acompanhar os dois botões sem cortar excessivamente o rosto; manter os botões em coluna.
3. Ajustar a largura e o enquadramento da foto no computador, com transição suave atrás do texto e contraste suficiente para leitura.
4. Conferir celular e computador: rosto visível, foto perceptível até o segundo botão, ausência de cortes ou sobreposições e funcionamento dos links para catálogo e WhatsApp.

## Detalhes técnicos
- Alterações somente na apresentação de `Hero` em `src/components/Sections.tsx` e nas regras `.hero-photo` e `.hero-veil` em `src/styles.css`.
- Preservar os tokens de cores e as preferências de movimento reduzido.
- Verificar a apresentação e os dois links no navegador em larguras de celular e computador.