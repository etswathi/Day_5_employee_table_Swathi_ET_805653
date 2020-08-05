import React from "react";
import "./css/Employee.css";
class Employee extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <table>
          <tr>
            <td style={{ width: "490px" }}>{this.props.id}</td>
            <td style={{ width: "490px" }}>{this.props.name}</td>
            <td style={{ width: "490px" }}>{this.props.age}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Employee;
