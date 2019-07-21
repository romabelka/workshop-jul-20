import Driver from "../../test/driver";

export default class ArticleDriver extends Driver {
  get = {
    commentList: () => this.getById("comment-container"),
    commentListBody: () => this.getById("comment-list-body"),
    toggleOpenBtn: () => this.getById("comment-list-btn").at(0),
    body: () => this.getById("article-body")
  };

  when = {
    commentListBtnClicked: () => this.get.toggleOpenBtn().simulate("click")
  };
}
