import { Episode } from './Episode'
import { Location } from './Location'

export enum Status {
    Alive,
    Dead,
    Unknown,
}

export enum Gender {
    Male,
    Female,
    Asexual,
}

export type Character = {
    id: string
    firstName?: string
    lastName?: string
    fullName: string // maybe is null
    status: Status
    about?: string
    gender: Gender
    race?: string
    imageName?: string
    locationId?: string
    placeOfBirthId?: string
    location?: Location
    placeOfBirth?: Location
    episodes?: Episode[]
}
