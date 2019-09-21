import BaseTemplate from "components/templates/BaseTemplate"
import { Home, About, Work, Education, Skills, Portfolio } from "components/organisms"

export default () => {
  return (
    <BaseTemplate nav>
      <Home />
      <About />
      <Work />
      <Education />
      <Skills />
      <Portfolio />
    </BaseTemplate>
  )
}
