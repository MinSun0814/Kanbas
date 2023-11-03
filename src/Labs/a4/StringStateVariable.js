import {useState} from "react";

function StringStateVariable () {
  const [name, setName] = useState('John Doe')
  const [age, setAge] = useState(2)
  const [address, setAddress] = useState('123 Main St')
  const [city, setCity] = useState('Anytown')
  const [state, setState] = useState('CA')
  const [zip, setZip] = useState('12345')
  const [phone, setPhone] = useState('555-555-5555')
  const handleNameChange = (e) => {
    setName(e.target.value)
  };
  return (
    <div>
      <h2>String State Variable</h2>
      <h3>Name : {name}</h3>
      <input value = {name} onChange = {handleNameChange}/>

      <h3>address</h3>
      <input value={address} onChange={e => setAddress(e.target.value)}/>


    </div>
  );
};
export default StringStateVariable;