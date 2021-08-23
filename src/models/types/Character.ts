import { Episode } from './Episode'

export enum Status {
    Alive,
    Dead,
    unknown,
}

export enum Gender {
    Male,
    Female,
    Genderless,
    unknown,
}

export type Character = {
    firstName?: string
    lastName?: string
    fullName?: string
    status: Status
    about?: string
    gender: Gender
    race?: string
    imageName?: string
    locationId?: string
    placeOfBirthId?: string
    episodes: Episode[]
}
