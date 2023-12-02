import { faArrowAltCircleRight, faBan, faClock, faE, faFan, faFireBurner, faFireFlameCurved, faKitchenSet, faPaw, faPersonShelter, faRightFromBracket, faRightToBracket, faToilet, faTree, faTv, faUserGroup, faWater, faWifi } from '@fortawesome/free-solid-svg-icons'

export const iconArray = [
    {
        'name': 'huespedes',
        'icon': faUserGroup
    },
    {
        'name': 'ambientes',
        'icon': faPersonShelter
    },
    {
        'name': 'baños',
        'icon': faToilet
    },
    {
        'name': 'checkIn',
        'icon': faRightToBracket,
        'flip': true
    },
    {
        'name': 'checkOut',
        'icon': faRightToBracket
    },
    {
        'name': 'vajillaCompleta',
        'icon': faKitchenSet
    },
    {
        'name': 'tv',
        'icon': faTv
    },
    {
        'name': 'wifi',
        'icon': faWifi
    },
    {
        'name': 'ventilador',
        'icon': faFan
    },
    {
        'name': 'cocina',
        'icon': faFireBurner
    },
    {
        'name': 'parrila',
        'icon': faFireFlameCurved
    },
    {
        'name': 'patio',
        'icon': faTree
    },
    {
        'name': 'mascotas',
        'icon': faPaw
    },
    {
        'name': 'estacionamiento',
        'icon': faE
    },

]



/* {
    'microondas': `
            <div className="tooltip hover:[&>span]:opacity-80 fa-layers" data-tip="Microondas">
                <FontAwesomeIcon icon={faTv} style={{ color: "#a6adbb", }} className='h-10' />
                <FontAwesomeIcon icon={faWater} style={{ color: "#a6adbb", }} className='h-5 ' />
            </div>
` },
{
    'mascotas': `
    <div className="tooltip hover:[&>span]:opacity-80 fa-layers" data-tip="Mascotas">
        <FontAwesomeIcon icon={faBan} style={{ color: "#a6adbb", }} className='h-10' />
        <FontAwesomeIcon icon={faPaw} style={{ color: "#a6adbb", }} className='h-5' />
    </div>
` }, */