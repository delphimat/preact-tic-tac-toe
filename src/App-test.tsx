
import * as assert from "assert";
import { render, h } from "preact";
import { App } from "./App";

describe("App", () => {

  afterEach(() => {
    render(null, document.body);
  });

  it("exists", () => {
    assert.ok(App);
  });

  it("renders a div", () => {
    render(<App />, document.body)

    assert.ok(document.querySelector("div"))
  })
});