import React from "react"
import { shallow } from "enzyme"

import Button from "./"

describe("Button Atom Component", () => {
  let component: any = null
  let number: number = 0
  const onClick = () => (number = number + 1)

  it("render correctly", () => {
    component = shallow(<Button onClick={onClick}>Button</Button>)
  })
  it("handle Click", () => {
    component.simulate("click")
    expect(number).toBe(1)
  })
})

export default undefined
