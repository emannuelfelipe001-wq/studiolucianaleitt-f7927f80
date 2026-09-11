# Concluir o painel administrativo

## Resultado
Adicionar “Admin” no fim do menu mobile e entregar um painel protegido por usuário e senha para cadastrar, editar e remover procedimentos e bijuterias. O status Aberto/Fechado continuará exatamente como está, calculado automaticamente pelo horário de Brasília.

## O que será feito

1. **Preparar os dados atuais**
   - Preencher o banco já criado com os 14 procedimentos e 13 bijuterias atuais, preservando nomes, ordem, descrições, preços e fotos.
   - Manter a leitura pública e bloquear alterações diretas por visitantes.
   - Criar um espaço privado de armazenamento para as novas fotos enviadas pelo painel.

2. **Proteger o acesso administrativo**
   - Criar a tela `/admin` com os campos “Usuário” e “Senha”.
   - Validar as credenciais somente no servidor, usando os dados secretos já configurados.
   - Manter a entrada ativa em cookie seguro e criptografado, com opção “Sair”.
   - Proteger no servidor todas as ações de criar, editar, excluir e enviar fotos.

3. **Criar o painel de edição**
   - Separar “Procedimentos” e “Bijuterias” em abas simples.
   - Permitir cadastrar, editar e remover itens com confirmação antes da exclusão.
   - Procedimentos: nome, categoria, preço, duração, descrição curta, detalhes, benefícios, foto, destaque e ordem.
   - Bijuterias: nome, descrição, foto e ordem.
   - Mostrar prévia da foto, progresso/erros claros e confirmação após salvar.
   - Usar as fotos enviadas sem retoque ou alteração visual.

4. **Conectar o site ao painel**
   - Fazer catálogo, página inicial, detalhes, relacionados, carrinho e bijuterias exibirem os dados salvos no painel.
   - Preservar busca, filtros, carrinho, cálculo de duração, WhatsApp, zoom das fotos e a ordem atual.
   - Remover itens apagados com segurança do carrinho salvo, sem quebrar o restante da página.
   - Manter uma apresentação de erro amigável caso os dados não carreguem.

5. **Navegação e acabamento**
   - Inserir “Admin” como a última opção dos três tracinhos, fechando o menu corretamente ao tocar.
   - Manter o painel confortável no celular e no computador, seguindo o visual atual do Studio.
   - Adicionar títulos e descrições próprios para as páginas administrativas, sem indexação pública.

6. **Testes finais**
   - Testar login correto e incorreto, permanência da sessão e saída.
   - Testar criação, edição, troca de foto e exclusão em ambos os catálogos.
   - Confirmar que as mudanças aparecem imediatamente no site público.
   - Revalidar menu mobile, carrinho, detalhes, WhatsApp, imagens, celular e computador.
   - Executar verificações de segurança, tipos e funcionamento antes da entrega.

## Detalhes técnicos
- O banco e as tabelas já existem, mas estão vazios; a carga inicial será incluída em uma nova migração reproduzível.
- A autenticação compartilhada usará sessão criptografada no servidor, comparação segura da senha e nenhuma credencial será enviada ao navegador.
- Operações administrativas usarão acesso privilegiado somente após validar a sessão; visitantes continuarão com acesso apenas de leitura.
- As páginas públicas carregarão registros por funções do servidor, mantendo os segredos fora do navegador.
