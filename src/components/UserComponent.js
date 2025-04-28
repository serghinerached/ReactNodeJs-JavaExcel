import React, {Component} from "react";
import UserService from "../services/UserService";
import {styles} from './ComponentCss';
import Table from 'react-bootstrap/Table';
import "../App.css";



class UserComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }

    render () {

        return(
            <div style={styles.div2}>
                <h2 className="h2">Users list</h2>
                <div style={styles.div1}>
                    <Table striped bordered hover style={styles.tableUser} >
                        <thead>
                            <tr style={styles.thFormat} >
                                <td> UserId </td>
                                <td> First Name </td>
                                <td> Last Name </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key = {user.id}>
                                        <td> {user.userId}</td>
                                        <td> {user.firstName}</td>
                                        <td> {user.lastName}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }

}



export default UserComponent