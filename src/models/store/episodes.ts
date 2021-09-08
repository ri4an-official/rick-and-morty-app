import { makeAutoObservable } from 'mobx'
import { episodes } from '../api'
import { Episode } from '../types/Episode'

class Episodes {
    list = [] as Episode[]
    selected = {} as Episode
    total = 0
    constructor() {
        makeAutoObservable(this)
    }
    async getTotal() {
        this.total = await episodes.getTotal()
    }
    async getAll(page = 1, pageSize = 20, season = 1) {
        this.list = (await episodes.getAll(page, pageSize, season)).filter(
            (ep) => ep.series
        )
    }
    async search(options: { name: string }) {
        this.list = await episodes.search({ ...options })
    }
    async getById(id: string) {
        this.selected = await episodes.getById(id)
    }
}
export default new Episodes()
