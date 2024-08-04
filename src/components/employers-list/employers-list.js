import './employers-list.css'
import EmployeesListItem from "../employers-list-item/employers-list-item";
import React from 'react';

class EmployersList extends React.Component {
    render() {
        return ( 
            <ul className="app-list list-group">
                {
                    this.props.data.map(obj => (
                        <EmployeesListItem 
                            key={obj.id} 
                            onDelete={() => this.props.onDelete(obj.id)} 
                            name={obj.name} 
                            salary={obj.salary} 
                            increase={obj.increase}
                            rise={obj.rise}
                            onToggleProp={(e) => this.props.onToggleProp(obj.id, e.currentTarget.getAttribute('data-toggle'))}
                        />
                    ))
                }
            </ul>
        );
    }
}
 
export default EmployersList;