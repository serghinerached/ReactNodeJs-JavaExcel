import React from "react";
import IncidentService from "../services/IncidentService";
import {styles} from './ComponentCss';
import Table from 'react-bootstrap/Table';


class IncidentComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            incidents:[]
        }
    }

    componentDidMount() {
        IncidentService.getIncidents().then((response) => {
            this.setState({ incidents: response.data})
            console.log(response.data)
        });

    }

    convDate (date1) {
        if(date1 !== "" && date1 !== undefined && date1 !== null) {
            var d = date1.split("-")[2]
            var jj = d.split(" ")[0]
            var date2 = jj + "/" + date1.split("-")[1] + "/" + date1.split("-")[0];
            return date2;
        } else {
            return "";
        }
    }

    render () {

        return(
            <div style={styles.div2}>
                <h2 className="h2">Incidents list</h2>
                <div style={styles.div1}>
                    <Table striped bordered hover style={styles.tableRequestIncident} >
                        <thead>
                            <tr style={styles.thFormat} >
                                <td> Number </td>
                                <td> Opened  </td>
                                <td> Assigned To  </td>
                                <td> State </td>
                                <td> Short Description </td>
                                <td> Requested For </td>
                                <td> Dep </td>
                                <td> Due Date </td>
                                <td> Closed </td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.incidents.map(
                                    incident => 
                                    <tr key = {incident.id_incident} >
                                        <td className="td10"> {  incident.number  }</td>
                                        <td className="td8"> {this.convDate(incident.opened)} </td>
                                        <td className="td13"> {incident.assignedTo }</td>
                                        <td className="td13"> {incident.state}</td>
                                        <td className="td20"> {incident.shortDescription}</td>
                                        <td className="td13"> {incident.requestedFor}</td>
                                        <td className="td8"> {incident.dep }</td>
                                        <td className="td8"> {this.convDate(incident.dueDate) } </td>
                                        <td className="td8"> {this.convDate(incident.closed) }</td>
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

export default IncidentComponent