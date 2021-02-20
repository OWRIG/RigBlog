let ipUrl = "http://localhost:7001/admin/";

let api = {
  checkLogin: ipUrl + "checkLogin",
  checkType: ipUrl + "getTypeInfo",
  addArticle: ipUrl + "addArticle",
  updateArticle: ipUrl + "updateArticle",
  getArticleList: ipUrl + "getArticleList",
  delArticle: ipUrl + "delArticle/",
  getArticleById: ipUrl + "getArticleById/",
};

export default api;
