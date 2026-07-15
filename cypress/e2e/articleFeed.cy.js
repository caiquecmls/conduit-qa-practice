import { header } from '../pages/header';
import { login } from '../pages/login';
import { articleFeed } from '../pages/article-feed';
import loginData from '../fixtures/loginData.json';
import { article } from '../pages/article';
import articleData from '../fixtures/articleData.json';

describe('Exibição do Feed de Artigos', () => {

    beforeEach(() => {
        cy.visit("/")
        header.goToLogin();
        login.inserirCredenciais(loginData.usuarioValido.email, loginData.usuarioValido.password)
        login.submitLogin();
    });

    it('Deve abrir um artigo pelo título', () => {
        const articleTitle = articleData.artigoValido.title
        articleFeed.openArticle(articleTitle)
        article.validatePublishedArticle(articleTitle, loginData.usuarioValido.userName);
    });

    it('Deve filtrar a lista do feed pela tag', () => {
        const tag = articleData.artigoValido.tags
        articleFeed.filterFeedByTag(tag)
        articleFeed.validateArticleTag(tag)
    })

    it.only('Deve alternar entre as abas do feed de artigos', () => {
        articleFeed.selectYourFeed();
        articleFeed.validateYourFeedIsActive();
        articleFeed.selectGlobalFeed();
        articleFeed.validateGlobalFeedIsActive();

    })

    it('Deve curtir um artigo', () => {
        const articleTitle = articleData.artigoValido.title
        articleFeed.clickArticleLikeButton(articleTitle);
        articleFeed.validateArticleIsLiked(articleTitle)
    })

    it('Deve alternar entre páginas', () => {
        articleFeed.clickPage(3)
        articleFeed.validateActivePage(3)
        articleFeed.clickPage(2)
        articleFeed.validateActivePage(2)
    })
})