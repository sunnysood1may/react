import PropChild from "./PropChild";

function Props() {
  return (
    <div>
      <h2>Props Component</h2>
      <PropChild data={{name: 'sunny sood',age:39}} />
    </div>
  );
}

export default Props;