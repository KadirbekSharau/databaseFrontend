export interface User {
    email: string
    name: string
    surname: string
    salary: BigInteger
    phone: string
    cname: string
}

export interface Doctor {
    email: string
    degree: string
}

export interface PublicServant {
    email: string
    department: string
}

export interface Record {
    email: string
    cname: string
    disease_code: string
    total_deaths: BigInteger
    total_patients: BigInteger
}

export interface Discover {
    cname: string
    disease_code: string
    first_enc_date: Date
}

export interface Country {
    cname: string
    population: BigInteger
}

export interface Disease {
    disease_code: string
    pathogen: string
    description: BigInteger
    id: BigInteger
}

export interface Specialize {
    email: string
    id: BigInteger
}
