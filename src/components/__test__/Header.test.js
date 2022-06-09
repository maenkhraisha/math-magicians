import React from "react";
import renderer from "react-test-renderer";

import Header from "../Header";

it("Render correctly", () => {
    const tree = renderer.create(<header />).toJSON();
    expect(tree).toMatchSnapshot();
});
