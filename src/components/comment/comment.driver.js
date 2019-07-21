export default class CommentDriver {
  constructor(container) {
    this.container = container;
  }

  get = {
    byId: dataId => this.container.find(`[data-id="${dataId}"]`),
    text: () =>
      this.get
        .byId("comment-text")
        .at(0)
        .text()
  };
}
