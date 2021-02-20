"use strict";
const Controller = require("egg").Controller;

class MainController extends Controller {
  async index() {
    this.ctx.body = "nihao ";
  }
  async checkLogin() {
    let userName = this.ctx.request.body.userName;
    let password = this.ctx.request.body.password;
    const sql =
      " SELECT userName FROM admin_user WHERE userName = '" +
      userName +
      "' AND password = '" +
      password +
      "'";

    const res = await this.app.mysql.query(sql);
    if (res.length > 0) {
      //登录成功,进行session缓存
      let openId = new Date().getTime();
      this.ctx.session.openId = { openId: openId };
      this.ctx.body = { data: "登录成功", openId: openId };
    } else {
      this.ctx.body = { data: "登录失败" };
    }
  }
  //后台文章分类信息
  async getTypeInfo() {
    const resType = await this.app.mysql.select("blogtype");
    this.ctx.body = { data: resType };
  }

  async addArticle() {
    let tmpArticle = this.ctx.request.body;
    // tmpArticle.
    const result = await this.app.mysql.insert("article", tmpArticle);
    const insertSuccess = result.affectedRows === 1;
    const insertId = result.insertId;

    this.ctx.body = {
      isScuccess: insertSuccess,
      insertId: insertId,
    };
  }
  async updateArticle() {
    let tmpArticle = this.ctx.request.body;
    const result = await this.app.mysql.update("article", tmpArticle);
    const updateSuccess = result.affectedRows === 1;
    console.log(updateSuccess);
    this.ctx.body = {
      isScuccess: updateSuccess,
    };
  }

  async getArticleList() {
    let sql =
      "SELECT article.id as id," +
      "article.title as title," +
      "article.introduce as introduce," +
      "article.viewCount as viewCount," +
      "FROM_UNIXTIME(article.time,'%Y-%m-%d' ) as time," +
      "blogtype.typeName as typeName " +
      "FROM article LEFT JOIN blogtype ON article.typeId = blogtype.id " +
      "ORDER BY article.id DESC ";

    const resList = await this.app.mysql.query(sql);
    this.ctx.body = { list: resList };
  }
  async delArticle() {
    let id = this.ctx.params.id;
    const res = await this.app.mysql.delete("article", { id: id });
    this.ctx.body = { data: res };
  }
  async getArticleById() {
    let id = this.ctx.params.id;

    let sql =
      "SELECT article.id as id," +
      "article.title as title," +
      "article.introduce as introduce," +
      "article.aContent as article_content," +
      "FROM_UNIXTIME(article.time,'%Y-%m-%d' ) as addTime," +
      "article.viewCount as view_count ," +
      "blogtype.typeName as typeName ," +
      "blogtype.id as typeId " +
      "FROM article LEFT JOIN blogtype ON article.typeId = blogtype.id " +
      "WHERE article.id=" +
      id;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = { data: result };
  }
}

module.exports = MainController;
