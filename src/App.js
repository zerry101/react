import './App.css';

function App() {
  const name = "john";
  const age = <h1>45</h1>

  return (
    <div className="App">
      Hello {name}of age {age}
      <div>
        {GetNameComponent()}
      </div>
      <div>
      </div>
      <SubApp firstname="john1" personage={45} email="xyz@gmail.com"/>
      <SubApp firstname="john2" personage={46} email="abc@gmail.com"/>
      <SubApp firstname="john3" personage={47} email="pqr@gmail.com"/>
      <Job salary={90000} position="Senior SDE" company="Amazon"></Job>
      <Job salary={80000} position="Junior SDE" company="Microsoft"></Job>
    </div>
  );
}


const Job = (props)=>{
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
    <div>
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
