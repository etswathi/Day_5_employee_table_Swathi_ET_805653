import React from "react";
import axios from "axios";
import Employee from "./Employee";
import "./css/Employee.css";
class Employees extends React.Component {
  constructor() {
    super();
    this.state = {
      allemployees: [],
    };
  }
  componentWillMount() {
    this.getemployees();
  }

  getemployees() {
    axios.get("http://dummy.restapiexample.com/api/v1/employees").then(
      (response) => {
        console.log(response.data.data);
        this.setState({
          allemployees: response.data.data,
        });
        console.log(this.state.allemployees);
      },

      (error) => {
        console.log(error);
      }
    );
  }

  renderEmployees = () => {
    return this.state.allemployees.map((e) => {
      return (
        <Employee
          id={e.id}
          name={e.employee_name}
          age={e.employee_age}
          image={e.profile_image}
        ></Employee>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Employees</h1>

        <table>
          <tr>
            <th style={{ width: "5%" }}>Employee id</th>
            <th style={{ width: "5%" }}>Employee name</th>
            <th style={{ width: "5%" }}>Employee age</th>
          </tr>

          <tr>{this.renderEmployees()}</tr>
        </table>
      </div>
    );
  }
}

export default Employees;
