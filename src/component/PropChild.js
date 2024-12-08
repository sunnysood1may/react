const PropChild=(props)=>{
    console.log(props);
    const { data } = props;
    return(
        <div>
            <h2>PropChild Component</h2>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
        </div>
    )
}

export default PropChild;