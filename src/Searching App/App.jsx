import {useSelector,useDispatch} from "react-redux"
function Ken()
{
    const applyFilter=(name)=>(cric)=>cric.name.toLowerCase().includes(name.toLowerCase());
    const name=useSelector(state=>state.peru.name);
    const player=useSelector(state=>state.player.cricketer);
    const dispatch=useDispatch();
    const play=(nn)=>{
        dispatch({type:"SETNAME",payload:nn})
    }
    return(
        <div>
            <Search value={name} update={play}>
                <p>Welcome Kenuit!</p>
            </Search>
            <Ul list={player.filter(applyFilter(name))}/>
        </div>
    );
}
function Search({value,update,children})
{
    return(
        <div>
            {children}
            <input type="text" placeholder="Enter the name" value={value} onChange={(e)=>update(e.target.value)}/>
        </div>
    );
}
function Ul({list})
{
    return(
        <div>
            <ul>
                {list.map((kkk)=>(
                    <li key={kkk.id}>
                        <span>{kkk.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Ken;