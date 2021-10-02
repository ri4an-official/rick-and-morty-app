import { makeAutoObservable } from 'mobx'
import { account } from '../api'
import { Account } from '../types/Account'

class User {
    current = {} as Account
    auth = false
    error = ''
    token = ''
    theme = 'dark'
    constructor() {
        makeAutoObservable(this)
    }
    async login(user: { userName: string; password: string }) {
        account
            .login({ ...user })
            .then((res) => {
                if (res.succeeded) {
                    this.error = ''
                    this.auth = true
                    this.token = res.data.token
                }
            })
            .catch(({ response }) => {
                this.error = response.data.Message
                console.log(response.data)
            })
        if (!this.error) this.current = await account.get(user.userName)
    }
    async register(user: Account) {
        const res = await account.register({ ...user })
        if (!res.Message) {
            this.login({ userName: user.userName, password: user.password })
        }
    }
}
export default new User()
