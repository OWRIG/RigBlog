"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = "result";
  }

  async getArticleList() {
    let sql =
      "SELECT article.id as id ," +
      "article.title as title ," +
      "article.introduce as introduce ," +
      "FROM_UNIXTIME(article.time,'%Y-%m-%d %H:%i:%s') as time ," +
      "article.viewCount as viewCount ," +
      "blogtype.typeName as typeName " +
      "FROM article LEFT JOIN blogtype ON article.typeId = blogtype.id";

    const results = await this.app.mysql.query(sql);
    this.ctx.body = { data: results };
  }
  async getArticle() {
    let id = this.ctx.params.id;
    console.log(id);
    let sql =
      "SELECT article.id as id ," +
      "article.title as title ," +
      "article.aContent as content ," +
      "FROM_UNIXTIME(article.time,'%Y-%m-%d %H:%i:%s') as time ," +
      "article.viewCount as viewCount ," +
      "blogtype.typeName as typeName ," +
      "blogtype.id as typeId " +
      "FROM article LEFT JOIN blogtype ON article.typeId = blogtype.id " +
      "WHERE article.id=" +
      id;

    const results = await this.app.mysql.query(sql);
    this.ctx.body = { data: results };
  }
}

module.exports = HomeController;
