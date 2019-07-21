import React from "react";
import { shallow, render, mount } from "enzyme";
import Comment from "./comment";
import articles from "../../fixtures";
const comment = articles[0].comments[0];

describe("<Comment />", () => {
  it("should render text", () => {
    const container = shallow(<Comment comment={comment} />);
    expect(
      container
        .find("p")
        .at(0)
        .text()
    ).toBe(comment.text);
  });
});
