import {AdvertisinAdd,AdvertisinRemove,AdvertisinGetAll,AdvertisinGetById,AdvertisinEdit} from '../actions/actionTypes'

const initialState ={
     items:[
        { AdverName: "Advertising A" , role: "Member 1" , date : "1402/2/6" , details : "ADSAFHHH"},
        { AdverName: "Advertising B" , role: "Member 2" , date : "1402/4/8" , details : "ADSAFHHH"},
        { AdverName: "Advertising C" , role: "Member 3" , date : "1402/5/14" , details : "ADSAFHHH"},
        { AdverName: "Advertising D" , role: "Member 4" , date : "1402/11/3" , details : "ADSAFHHH"}
     ],
     isLoading : true,
     }






const AdvertisingReduser =(state = initialState , action) =>{
   switch (action.type) {
    case AdvertisinGetAll:
        return {...state , state : state.items};
    case AdvertisinGetById :
        return {...state , items:state.items.find(q => q.AdverName == action.payload)};
    case AdvertisinAdd :
        return {...state , items : state.items.concat([action.payload])};
    case AdvertisinRemove :
        return {...state , items : state.items.filter(q => q.AdverName != action.payload)}        
   
    default:
        return state;
   }
}
export default AdvertisingReduser