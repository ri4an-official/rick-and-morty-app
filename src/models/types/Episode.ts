import { Character } from './Character'

export type Episode = {
    id: string
    name?: string
    season: number
    series: number
    plot?: string
    premiere: string
    imageName?: string
    characters?: Character[]
}
