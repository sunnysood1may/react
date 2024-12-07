import { useSearchParams } from "react-router-dom";

function Filter(){
    const [searchParams,setSearchParams] = useSearchParams();
    const name = searchParams.get('name');
    const age = searchParams.get('age');
    const city = searchParams.get('city');
    return (
        <div>
            <h1>Filter Page</h1>
            <h2>Name is : {name}</h2>
            <h2>Age is : {age}</h2>
            <h2>City is : {city}</h2>
            <input type="text" onChange={(e)=>setSearchParams({name:e.target.value,age:10})} placeholder="Set Text in query params" />
            <button onClick={()=>setSearchParams({age:24,name:'shobhit'})}>Set age in query params</button>
        </div>
    )
}

export default Filter;