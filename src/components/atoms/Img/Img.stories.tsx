import React from "react"
import { storiesOf } from "@storybook/react"

import Img from "."
import { wInfo } from "utils/storybook"

storiesOf("Components/Atoms", module).add(
  "Image",
  () => (
    <React.Fragment>
      <h4>Img</h4>
      <Img
        src={require("static/images/logo.png")}
        width={"120px"}
        height={"80px"}
        alt={"beer list homepage logo"}
      />
    </React.Fragment>
  ),
  wInfo(`
    ### Notes 

    This is a Img(img tag)


    ### Usage
    ~~~js
      import imageSource from 'assets/images/logo.png'
      
      <Img  src={imageSource}
            width={'120px'} 
            height={'80px'} 
            alt={'beer list homepage logo'}
      />
    ~~~
  `)
)
