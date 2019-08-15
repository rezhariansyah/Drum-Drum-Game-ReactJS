import React, { Component } from "react";
import "../../Support/Styles/Settings.css";
import { Tab, Tabs } from "react-bootstrap";

class Settings extends Component {
  render() {
    return (
      <div className="container mt-5">
        <Tabs defaultActiveKey="home">
          <Tab eventKey="home" title="Leaderboard">
          <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Fullname</th>
                  <th scope="col">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="Audio" title="Audio">
            bibi
          </Tab>
          <Tab eventKey="Pattern" title="Pattern">
            bobo
          </Tab>
          <Tab eventKey="Users" title="Users">
            <table className="table table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Fullname</th>
                  <th scope="col">Email</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Settings;
