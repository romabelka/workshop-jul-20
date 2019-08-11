import Counter from "./counter";
import { CounterDriver } from "./counter.driver";
import { mount } from "enzyme";
import React from "react";

describe("Counter Unit", () => {
  it("should display correct value", () => {
    const count = 10;
    const driver = new CounterDriver(mount(<Counter count={count} />));

    expect(driver.get.value()).toEqual(count.toString());
  });

  it("should trigger callback on click", () => {
    const fn = jest.fn();

    const driver = new CounterDriver(mount(<Counter handleIncrement={fn} />));

    driver.when.clicked();

    expect(fn.mock.calls.length).toEqual(1);
  });
});
