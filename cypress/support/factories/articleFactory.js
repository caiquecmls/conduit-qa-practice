export function createArticle(overrides = {}) {
  const random = Math.random().toString(36).substring(2, 10);

  const defaultArticle = {
    title: `Article ${random}`,
    description: "Descrição do artigo",
    body: "Conteúdo do artigo criado automaticamente pelo Cypress.",
    tags: "cypress automation qa"
  };

  return { ...defaultArticle, ...overrides };
}