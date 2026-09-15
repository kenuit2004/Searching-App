const initialState={
    cricketer:[
        {
            id:1,
            name:"Virat Kohli"
        },
        {
            id:2,
            name:"Sachin"
        },
        {
            id:3,
            name:"Dhoni"
        },
        {
            id:4,
            name:"Gautham"
        },
        {
            id:5,
            name:"Ashwin"
        },
]
}
const kk=(state=initialState,action)=>{
    switch(action.type)
    {
        default:
        {
            return state;
        }
    }
}
export default kk;