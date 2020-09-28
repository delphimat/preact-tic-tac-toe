import { render, h } from "preact";
import { shallow } from 'enzyme';
import { App } from "../../../App";

import Board from "../../../component/Board/board.component";
import Square from "../../../component/Square/square.component";

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App/>);
})

it("We check that we have the component Board display", () => {
    expect(wrapped.find(Board).length).toEqual(1);
});

it("We check that we have 9 Squares component display", () => {
    expect(wrapped.find(Square).length).toEqual(9);
});