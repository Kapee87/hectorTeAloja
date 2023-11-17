import { pics } from './picsMockUp.json'

export const units = [
    {
        "id": 0,
        "title": "Depto para 4 pax",
        "address": "lalala 1",
        "details": "laldasldlasldasldasldlasdlasdlasl 1",
        "distanceTo": {
            "peatonal": 4,
            "mar": 2,
            "terminal": 10
        },
        "picArray": pics.map(u => u),
    },
    {
        "id": 1,
        "title": "duplex para 6 pax",
        "address": "ladlalslalalal2 2",
        "details": "lasdlasdlaskdaslkdalskdlasdlkads 2",
        "distanceTo": {
            "peatonal": 1,
            "mar": 3,
            "terminal": 5
        },
        "picArray": pics.map(u => u),
    },
    {
        "id": 2,
        "title": "monoambiente para 2/3 pax",
        "address": "lalalalla 3",
        "details": "lasldasldlsaldaldls 3",
        "distanceTo": {
            "peatonal": 6,
            "mar": 4,
            "terminal": 15
        },
        "picArray": pics.map(u => u),
    },
    {
        "id": 3,
        "title": "casa para 5 pax",
        "address": "lalalalalal 4",
        "details": "lasldasldlasldal 4",
        "distanceTo": {
            "peatonal": 5,
            "mar": 6,
            "terminal": 14
        },
        "picArray": pics.map(u => u),
    }
]
