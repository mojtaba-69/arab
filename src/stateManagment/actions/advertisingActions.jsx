
import { AdvertisinEdit,AdvertisinGetAll,AdvertisinGetById,AdvertisinAdd,AdvertisinRemove} from './actionTypes'

export const getAll = ()=> ({
    type : AdvertisinGetAll,
})

export const getById = id  =>({
    type : AdvertisinGetById,
    payload : id
})

export const add = item =>({
    type: AdvertisinAdd,
    payload : item
})

export const remove = id =>({
    type: AdvertisinRemove,
    payload : id

})
export const edit = item =>({
    type: AdvertisinEdit,
    payload : item

})