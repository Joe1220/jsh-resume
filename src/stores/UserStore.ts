import { observable, action } from "mobx"

import { IUserModel } from "./models/UserModel"

export interface IUserStore {
  root: any
  users: IUserModel
}

class UserStore {
  @observable root: any
  @observable users
  constructor(root?) {
    this.root = root
    this.users = []
  }

  @action.bound
  setField(field: string, value: any) {
    this[field] = value
  }
}

export default UserStore
