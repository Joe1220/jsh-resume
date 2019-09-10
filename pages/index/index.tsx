import BaseTemplate from "../../src/components/templates/BaseTemplate"
import { Home, About } from "../../src/components/organisms"

export default () => {
  return (
    <BaseTemplate nav>
      <Home />
      <About />
    </BaseTemplate>
  )
}
