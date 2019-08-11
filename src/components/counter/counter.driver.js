import Driver from "../../test/driver";

export class CounterDriver extends Driver {
  get = {
    value: () => this.getById("counter-value").text(),
    btn: () => this.getById("counter-btn")
  };

  when = {
    clicked: () => this.get.btn().simulate("click")
  };
}
