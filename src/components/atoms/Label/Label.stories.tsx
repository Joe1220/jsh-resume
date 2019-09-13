import { storiesOf } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"

import Label from "./"
import { wInfo } from "utils/storybook"

const stories = storiesOf("Components/Atoms", module)

stories.add(
  "Label",
  () => (
    <>
      <Label
        sm={boolean("small label", false)}
        lg={boolean("big label", false)}
        xlg={boolean("x large label", false)}
        blue={boolean("blue label", false)}
        white={boolean("white label", false)}
        thick={boolean("thick label", false)}
        bottomColor={boolean("bottomColor label", false)}
      >
        {text("label", "test label")}
      </Label>
    </>
  ),
  wInfo(`
    ### Notes

    This is a Label(label tag)


    ### Usage
    ~~~js
      <Label blue>hello</Label>
    ~~~
  `)
)

export default undefined
