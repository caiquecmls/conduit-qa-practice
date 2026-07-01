# 🚀 Desafio QA - Projeto Conduit (RealWorld)

> **Objetivo:** Desenvolver uma automação E2E profissional utilizando Cypress para validar os principais fluxos da aplicação Conduit (RealWorld), aplicando boas práticas de arquitetura, organização do projeto e integração contínua.

---

# 📖 História de Usuário

## US-001 - Gerenciamento de Artigos

**Como** um usuário autenticado

**Quero** criar, editar, comentar, favoritar e excluir artigos

**Para** compartilhar conteúdo com outros usuários da plataforma.

---

# 🎯 Objetivo da Sprint

Garantir que o fluxo principal de publicação de artigos funcione corretamente, proporcionando uma boa experiência ao usuário e assegurando que as regras de negócio sejam respeitadas.

---

# 📋 Critérios de Aceitação

## CA-001 - Login

- O usuário deve conseguir realizar login utilizando credenciais válidas.
- Após autenticar, deverá ser redirecionado para a Home.

---

## CA-002 - Criação de Artigo

O usuário autenticado deverá conseguir criar um novo artigo informando:

- Título
- Descrição
- Conteúdo

Tags são opcionais.

---

## CA-003 - Publicação

Após publicar o artigo deverá ser possível visualizar:

- Título correto
- Descrição correta
- Conteúdo correto
- Autor correto
- Data da publicação

---

## CA-004 - Edição

O autor do artigo poderá editar:

- Título
- Descrição
- Conteúdo

As alterações deverão ser exibidas imediatamente.

---

## CA-005 - Comentários

Usuários autenticados poderão adicionar comentários em qualquer artigo.

O comentário deverá ser exibido logo após o envio.

---

## CA-006 - Exclusão de Comentário

O usuário poderá excluir apenas comentários criados por ele.

---

## CA-007 - Favoritos

O usuário poderá favoritar um artigo.

Ao favoritar:

- O contador de favoritos deverá ser incrementado.
- O artigo deverá aparecer na lista de artigos favoritos do perfil.

---

## CA-008 - Desfavoritar

O usuário poderá remover um artigo da lista de favoritos.

---

## CA-009 - Exclusão de Artigo

O autor poderá excluir seus próprios artigos.

Após excluir:

- O artigo não deverá mais aparecer na plataforma.

---

## CA-010 - Logout

Após realizar logout:

- O usuário não deverá conseguir acessar páginas privadas.

---

# 📚 Regras de Negócio

## RN-001

Não permitir criar artigo sem título.

---

## RN-002

Não permitir criar artigo sem descrição.

---

## RN-003

Não permitir criar artigo sem conteúdo.

---

## RN-004

Somente o autor poderá editar um artigo.

---

## RN-005

Somente o autor poderá excluir um artigo.

---

## RN-006

Somente usuários autenticados poderão comentar.

---

## RN-007

Somente usuários autenticados poderão favoritar artigos.

---

# 🧪 Casos de Teste

## Login

- [ ] Login com sucesso
- [ ] Login inválido
- [ ] Campos obrigatórios
- [ ] Logout

---

## Cadastro (Caso exista)

- [ ] Cadastro válido
- [ ] Cadastro com e-mail existente
- [ ] Campos obrigatórios

---

## Artigos

- [ ] Criar artigo
- [ ] Criar artigo sem título
- [ ] Criar artigo sem descrição
- [ ] Criar artigo sem conteúdo
- [ ] Editar artigo
- [ ] Excluir artigo

---

## Comentários

- [ ] Adicionar comentário
- [ ] Excluir comentário

---

## Favoritos

- [ ] Favoritar artigo
- [ ] Desfavoritar artigo
- [ ] Validar contador de favoritos

---

## Segurança

- [ ] Usuário não autenticado acessando página privada
- [ ] Usuário tentando editar artigo de outro usuário
- [ ] Usuário tentando excluir artigo de outro usuário

---

# 🔥 Casos Extras (Desejáveis)

- [ ] Criar artigo utilizando dados dinâmicos.
- [ ] Validar URL após cada navegação.
- [ ] Validar mensagens de sucesso.
- [ ] Validar mensagens de erro.
- [ ] Validar persistência após refresh da página.
- [ ] Validar comportamento em diferentes tamanhos de tela.
- [ ] Validar tempo de carregamento das páginas críticas.
- [ ] Validar funcionamento após múltiplas ações consecutivas.

---

# ⚙️ Requisitos Técnicos

O projeto deverá utilizar:

- Cypress
- JavaScript
- Fixtures
- Custom Commands
- Page Objects (ou outro padrão arquitetural)
- Intercepts
- Requests para API
- GitHub Actions
- Mochawesome (ou Allure)
- ESLint
- Git

---

# 📂 Estrutura Sugerida

```text
cypress/
│
├── e2e/
│
├── fixtures/
│
├── pages/
│
├── support/
│   ├── commands.js
│   ├── api.js
│   └── selectors.js
│
├── reports/
│
└── screenshots/
```

---

# 📌 Boas Práticas Esperadas

- Evitar código duplicado.
- Criar comandos reutilizáveis.
- Utilizar seletores estáveis.
- Não utilizar `cy.wait()` fixo.
- Utilizar `cy.intercept()` para sincronização.
- Utilizar dados dinâmicos sempre que possível.
- Garantir independência entre os testes.
- Organizar o projeto para facilitar manutenção.

---

# 🚀 Desafio Pleno

Durante a automação, aplicar sempre que fizer sentido:

- Fixtures
- before()
- beforeEach()
- afterEach()
- aliases
- intercept
- request
- session
- env
- custom command
- page object
- hooks

---

# 🏆 Desafio Sênior

Além da automação da interface, validar também a API.

Exemplos:

- Login via API
- Criar artigo via API
- Buscar artigo via API
- Excluir artigo via API
- Validar status code
- Validar response body
- Validar contratos básicos da resposta

---

# 🎯 Critérios de Qualidade

Cada teste deve responder às seguintes perguntas:

- O fluxo funciona?
- A regra de negócio foi respeitada?
- A interface apresentou o resultado esperado?
- A API retornou os dados corretos?
- Existe alguma regressão?
- O teste é reutilizável?
- O teste é independente?
- O código está legível?

---

# 📈 Objetivo Final

Ao concluir este projeto, espera-se que ele demonstre domínio em:

- Automação E2E
- Automação de API
- Organização de projeto
- Arquitetura de testes
- Boas práticas em Cypress
- Integração contínua (CI/CD)
- Relatórios de execução
- Versionamento com Git
- Escrita de cenários baseados em regras de negócio

---

# ⭐ Missão Extra

Imagine que você é o único QA do time.

Antes de iniciar qualquer automação:

1. Analise os requisitos.
2. Levante possíveis riscos.
3. Identifique cenários positivos e negativos.
4. Priorize os testes.
5. Só então inicie a automação.

O objetivo deste projeto não é apenas automatizar cliques, mas desenvolver a mentalidade de um QA capaz de analisar requisitos, identificar riscos e entregar uma suíte de testes confiável e sustentável.