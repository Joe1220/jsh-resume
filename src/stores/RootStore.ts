import UserStore from "./UserStore"
import { useStaticRendering } from "mobx-react"

class RootStore {
  userStore: any
  constructor() {
    this.userStore = new UserStore(this)
    this.bootsrap()
  }
  bootsrap = () => {
    useStaticRendering(true)
  }
}

export default new RootStore()
