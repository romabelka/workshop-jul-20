import React from "react";
import { mount } from "enzyme";
import { CounterDriver } from "./counter.driver";
import Counter from "./counter.container";
import { Provider } from "react-redux";
import createStore from "../../store";

describe("Counter Integration", () => {
  it("should increment a value", function() {
    const count = 20;

    const store = createStore({ counter: count });

    const driver = new CounterDriver(
      mount(
        <Provider store={store}>
          <Counter />
        </Provider>
      )
    );

    expect(driver.get.value()).toEqual(count.toString());

    driver.when.clicked();

    expect(driver.get.value()).toEqual((count + 1).toString());
  });
});
