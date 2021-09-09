import { makeAutoObservable } from 'mobx'
import { account } from '../api'
import { Account } from '../types/Account'

class User {
    current = {} as Account
    auth = false
    error = ''
    token = ''
    constructor() {
        makeAutoObservable(this)
    }
    async login(user: { userName: string; password: string }) {
        const res = await account.login({ ...user })
        if (res.succeeded) {
            this.auth = true
            this.token = res.data.token
            this.current = await account.get(user.userName)
        } else this.error = res.Message
    }
    async register(user: Account) {
        const res = await account.register({ ...user })
        if (!res.message) {
            this.login({ userName: user.userName, password: user.password })
        }
    }
}
export default new User()
