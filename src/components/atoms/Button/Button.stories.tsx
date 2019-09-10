import { storiesOf } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"

import Button from "./"
import { wInfo } from "utils/storybook"

const stories = storiesOf("Components/Atoms", module)

stories.add(
  "Button",
  () => (
    <Button
      lg={boolean("large button", false)}
      full={boolean("full width button", false)}
      grey={boolean("grey button", false)}
      onClick={() => null}
    >
      {text("text", "test")}
    </Button>
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
