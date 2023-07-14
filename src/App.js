import styles from './App.module.css';
import { User } from './User';
import { PlanetsComponent } from './Planets';
import { StatesButton } from './StatesButton';
import { StatesInput } from './StatesInnput';
import { Todo } from './Todo';

function App() {
  const name = "john";
  const age = <h1>45</h1>

  const userAge = 18;
  const isGreen = false;
  const names = [{ name: "john", age: 20 },
  { name: "michael", age: 54 },
  { name: "tony", age: 45 }
  ];



  return (
    <div className={styles.App}>
      Hello {name}of age {age}

      {userAge >= 18 ? <h1>User has age either bove 18 or 18</h1> : <h1>User has underage</h1>}

      <h1 style={{ color: isGreen ? "green" : "purple" }}>This has purple color</h1>
      {names.map((data, key) => {
        return <User name={data.name} age={data.age} />
      })}


      <div>
        <StatesInput/>
      </div>

      <div>
        <GetNameComponent />
      </div>
      <div>
        <PlanetsComponent />
      </div>
      <div>
        <StatesButton />
      </div>
      <div>
      </div>
      <SubApp firstname="john1" personage={45} email="xyz@gmail.com" />
      <SubApp firstname="john2" personage={46} email="abc@gmail.com" />
      <SubApp firstname="john3" personage={47} email="pqr@gmail.com" />
      <Job salary={90000} position="Senior SDE" company="Amazon"></Job>
      <Job salary={80000} position="Junior SDE" company="Microsoft"></Job>
      <hl>----------------------------------------</hl>
       <Todo/>
    </div>
  );
}


// props is an object of which arguuments are to be passed from component jsx element  

const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
}

const SubApp = (props) => {

  return (
    <div className={styles.name}>
      <h1>{props.firstname}</h1>
      <h1>{props.personage}</h1>
      <h1>{props.email}</h1>
    </div>
  );
};

const GetName = () => {
  return "pedro";
}

const GetNameComponent = () => {
  return <h1>pedro {GetName()}</h1>
}

export default App;
