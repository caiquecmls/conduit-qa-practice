import { header } from '../pages/header';
import { login } from '../pages/login';
import { article } from '../pages/article';
import { newArticle } from '../pages/new-article';
import loginData from '../fixtures/loginData.json';
import articleData from '../fixtures/articleData.json';
import { createArticle } from '../support/factories/articleFactory';

let generatedArticle;


describe('New Article', () => {

    beforeEach(() => {
        generatedArticle = createArticle();
        cy.visit("/")
        header.goToLogin();
        login.inserirCredenciais(loginData.usuarioValido.email, loginData.usuarioValido.password)
        login.submitLogin();
        header.goToNewArticle();
    })

    it('deve publicar um novo artigo com dados válidos', () => {
        const articleTitle = generatedArticle.title;
        newArticle.createArticle(
            generatedArticle.title,
            generatedArticle.description,
            generatedArticle.body,
            generatedArticle.tags
        )
        article.validateArticleUrl(articleTitle);
        article.validatePublishedArticle(articleTitle, loginData.usuarioValido.userName);
    })

    it('deve impedir a publicação sem título', () => {
        newArticle.createArticle(
            articleData.tituloVazio.title,
            articleData.tituloVazio.description,
            articleData.tituloVazio.body,
            articleData.tituloVazio.tags
        )
        newArticle.buttonPublishArticle();
        newArticle.messageErro(articleData.articleErrorMessages.titleBlank)
    });

    it('deve impedir a publicação sem descrição', () => {
        newArticle.createArticle(
            articleData.descricaoVazia.title,
            articleData.descricaoVazia.description,
            articleData.descricaoVazia.body,
            articleData.descricaoVazia.tags
        )
        newArticle.buttonPublishArticle();
        newArticle.messageErro(articleData.articleErrorMessages.descriptionBlank)
    });

    it('deve impedir a publicação sem conteúdo', () => {
        newArticle.createArticle(
            articleData.conteudoVazio.title,
            articleData.conteudoVazio.description,
            articleData.conteudoVazio.body,
            articleData.conteudoVazio.tags
        )
        newArticle.buttonPublishArticle();
        newArticle.messageErro(articleData.articleErrorMessages.bodyBlank)
    });

    it('deve permitir a publicação sem tags', () => {
        const articleTitle = generatedArticle.title;
        newArticle.createArticle(
            generatedArticle.title,
            generatedArticle.description,
            generatedArticle.body,
            articleData.conteudoVazio.tags
        )
        article.validateArticleUrl(articleTitle);
        article.validatePublishedArticle(articleTitle, loginData.usuarioValido.userName);
    });

    it('deve impedir a publicação com título já existente', () => {
        newArticle.createArticle(
            articleData.tituloExistente.title,
            articleData.tituloExistente.description,
            articleData.tituloExistente.body,
            articleData.tituloExistente.tags
        )
        newArticle.buttonPublishArticle();
        newArticle.messageErro(articleData.articleErrorMessages.titleUnique)
    });

    it('deve exibir a mensagem de título obrigatório quando todos os campos estiverem vazios', () => {
        newArticle.createArticle(
            articleData.todosCamposVazios.title,
            articleData.todosCamposVazios.description,
            articleData.todosCamposVazios.body,
            articleData.todosCamposVazios.tags
        )
        newArticle.buttonPublishArticle();
        newArticle.messageErro(articleData.articleErrorMessages.titleBlank)
    });
})