import React from 'react';
import { Table } from 'reactstrap';
import './Caller.css';

const Caller = (()=> {
    return (
        <React.Fragment>
            <Table borderless responsive>
                <thead>
                    <tr>
                        <td>Senha</td>
                        <td>Últimas Chamadas</td>
                    </tr>
                </thead>  
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Senha</td>
                        <td>Sala</td>
                    </tr>
                    <tr>
                        <td>Sala</td>
                        <td>100</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>20</td>
                    </tr>
                </tbody>         
            </Table>			
		</React.Fragment>
    );
})

export default Caller;
