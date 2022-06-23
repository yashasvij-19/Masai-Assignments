import React from "react";

function Input(){
    const initState = {
        name:"",
        age:"",
        address:"",
        salary:"",
        department:"",
        marital:false,
    }
    const [data, setData] = React.useState(initState);

    const handleChange = (e) => {
       const {name, value} = e.target;
       setData ({...data,[name]:value})
    }
    const storeData = (data) => {
            localStorage.setItem("Name",name);
            localStorage.setItem("Age",age);
            localStorage.setItem("Address",address);
            localStorage.setItem("Salary",salary);
            localStorage.setItem("Department",department);
            localStorage.setItem("Marital",marital);
    }
   const showData = () => {
    let theName = localStorage.getItem("Name");
    let theAge = localStorage.getItem("Age");
    let theAddress = localStorage.getItem("Address");
    let theSalary = localStorage.getItem("Salary");
    let theDepartment = localStorage.getItem("Department");
    let theMarital = localStorage.getItem("Marital");
    let married;
    if(theMarital === false){
      married = "Unmarried"
    }else{
        married = "Married";
    }
    return (
   <table>
    <tr>
        <td>Name</td>
        <td>{theName}</td>
    </tr>
    <tr>
        <td>Age</td>
        <td>{theAge}</td>
    </tr>
    <tr>
        <td>Address</td>
        <td>{theAddress}</td>
    </tr>
    <tr>
        <td>Salary</td>
        <td>{theSalary}</td>
    </tr>
    <tr>
        <td>Department</td>
        <td>{theDepartment}</td>
    </tr>
    <tr>
        <td>Marital State</td>
        <td>{married}</td>
    </tr>
   </table>
    )
   }
    const {name,age,address,salary,department,marital} = data;
    return(
        <div>
            <form>
            <h1 style={{"color":"blue","textDecoration":"underline"}}>Employee Details</h1>
            <br />
            <input value={name} onChange={handleChange} name= "name" placeholder="Name" /><br /><br />
            <input value={age} onChange={handleChange} name= "age" placeholder="Age"/><br /><br />
            <input value={address} onChange={handleChange} name= "address" placeholder="Address"/><br /><br />
            <input value={salary} onChange={handleChange} name= "salary" placeholder="Salary" /><br /><br />
            <label>
          Department: &nbsp;&nbsp;&nbsp;<select value={department} onChange={handleChange} name= "department">
            <option value="it">Information Technology</option>
            <option value="sales">Sales and Marketing</option>
            <option value="product">Product Management</option>
            <option value="hr">Human Resources</option>
          </select>
        </label><br /><br />
             <label>
          MARRIED :{" "}
          <input
            type="checkbox"
            checked={marital}
            onChange={handleChange}
            name="marital"
          />
        </label><br /><br />
            <button onClick={storeData(data)}>Submit</button>
            <button onClick={showData}>Show the Details</button>
            </form>
        </div>
    )
}
export {Input}