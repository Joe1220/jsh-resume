import React from "react"
import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import H1 from "./"

const stories = storiesOf("Components/Atoms", module)

stories.add("H1", () => <H1>{text("text", "test")}</H1>)

export default undefined
