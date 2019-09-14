import BaseTemplate from "../../src/components/templates/BaseTemplate"
import { Home, About, Work, Education, Skills } from "../../src/components/organisms"

export default () => {
  return (
    <BaseTemplate nav>
      <Home />
      <About />
      <Work />
      <Education />
      <Skills />
    </BaseTemplate>
  )
}
