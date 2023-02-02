import Table from 'react-bootstrap/Table';
import {useState} from "react";
function UserTable(props:any) {
    const[users,setUser]=useState(props.userDetails);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
           {
              
           }
      </tbody>
    </Table>
  );
}

export default UserTable;