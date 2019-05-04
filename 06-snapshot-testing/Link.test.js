import React from "react";
import Link from "./Link.react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer
    .create(<Link page="http://www.instagram.com">Instagram</Link>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly by prettier", () => {
  const tree = renderer
    .create(<Link page="https://prettier.io">Prettier</Link>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
    <a
      className="normal"
      href="https://prettier.io"
      onMouseEnter={[Function]}
      onMouseLeave={[Function]}
    >
      Prettier
    </a>
  `);
});
