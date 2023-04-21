import data from "./assets/data";
import { useState } from "react";
import List from "./assets/List";
const App = () => {
  const [people,setPeople]=useState(data)

  return <main>
    <section className="container">
    <h3>{people.length} birthdays today</h3>
    <List people={people}/>
    <button type="button" className="btn" onClick={()=>setPeople([])}>Clear</button>
    </section>
  </main>
  

};
export default App;
