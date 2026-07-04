import { header } from '../pages/header';
import { login } from '../pages/login';
import { article } from '../pages/article';
import { newArticle } from '../pages/new-article';
import loginData from '../fixtures/loginData.json';
import articleData from '../fixtures/articleData.json';
import { createArticle } from '../support/factories/articleFactory';

const createdArticle = createArticle();

describe('New Article', () => {

    beforeEach(() => {
        cy.visit("/")
        header.goToLogin();
        login.inserirCredenciais(loginData.usuarioValido.email, loginData.usuarioValido.password)
        login.submitLogin();
        header.goToNewArticle();
    })

    it('deve publicar um novo artigo com dados válidos', () => {
        const articleTitle = createdArticle.title;
        newArticle.createArticle(
            createdArticle.title,
            createdArticle.description,
            createdArticle.body,
            createdArticle.tags
        )
        article.validateArticleUrl(articleTitle);
        article.validatePublishedArticle(articleTitle, loginData.usuarioValido.userName);
    })

    it('deve impedir a publicação sem título', () => {

    });

    it('deve impedir a publicação sem descrição', () => {

    });

    it('deve impedir a publicação sem conteúdo', () => {

    });

    it('deve permitir a publicação sem tags', () => {

    });

    it('deve impedir a publicação com título já existente', () => {

    });

    it('deve exibir a mensagem de título obrigatório quando todos os campos estiverem vazios', () => {

    });
})