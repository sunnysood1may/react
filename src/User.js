function User(props) {
  const name="sunny sood";
  return (
    <div>
      <h2>User name: </h2>
      <button onClick={()=>props.getData(name)}>click Me</button>
    </div>
  );
}

export default User;
