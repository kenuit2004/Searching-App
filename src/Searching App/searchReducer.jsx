const initialState={
    name:""
}
const ken=(state=initialState,action)=>{
    switch(action.type)
    {
        case "SETNAME":
        {
            return {...state,name:action.payload}
        }
        default:
        {
            return state;
        }
    }
}
export default ken;