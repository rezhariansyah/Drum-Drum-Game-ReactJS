import React, { Component } from "react";
import "../../Support/Styles/Settings.css";
import { Tab, Tabs } from "react-bootstrap";
import { highestScore, getDataUser } from "../../Publics/Actions/user";
import { connect } from "react-redux";


class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      users: []
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(highestScore());
    this.setState({ userList: this.props.userList });
    
    await this.props.dispatch(getDataUser())
    this.setState({ users: this.props.users });
  };

  renderJsx = () => {
    let num = 1
    let jsx = this.state.userList.map(val => {
      return (
        <tr>
          <th scope="row">{num++}</th>
          <td>{val.fullname}</td>
          <td>{val.score}</td>
        </tr>
      );
    });
    return jsx;
  };

  renderUsers = () => {
    let num = 1
    let baba = this.state.users.map(val => {
      return (
        <tr>
          <th scope="row">{num++}</th>
          <td>{val.fullname}</td>
          <td>{val.email}</td>
          <td><input className="btn btn-outline-danger btn-sm" value="Delete" type="button" /></td>
        </tr>
      );
    });
    return baba;
  };

  render() {
    console.log(this.props.userList);
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
                {this.renderJsx()}
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
                {this.renderUsers()}
              </tbody>
            </table>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userList: state.User.userList[0],
    users : state.User.userList
  };
};

export default connect(mapStateToProps)(Settings);
