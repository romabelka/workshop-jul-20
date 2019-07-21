export default class Driver {
  constructor(container) {
    this.container = container;
  }

  getById = dataId => this.container.find(`[data-id="${dataId}"]`);
}
