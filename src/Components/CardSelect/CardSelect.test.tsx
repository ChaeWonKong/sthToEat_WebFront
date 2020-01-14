import React from "react";
import { shallow } from "enzyme";
import CardSelect from "./index";

describe("CardSelect", () => {
  const cardSelect = shallow(<CardSelect />);

  it("renders correctly", () => {
    expect(cardSelect).toMatchSnapshot();
  });

  // ImageCard
  describe("Image", () => {
    it("renders correctly", () => {
      expect(cardSelect.find("Image").exists()).toBe(true);
    });
  });
});
