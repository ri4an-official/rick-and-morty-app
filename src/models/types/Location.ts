import { Character } from './Character'

export type Location = {
    id: string
    name?: string
    type?: string
    measurements?: string
    about?: string
    imageName?: string
    characters: Character[]
    placeOfBirthCharacters: Character[]
}
