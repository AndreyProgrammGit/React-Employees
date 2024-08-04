import React from 'react';

import './employers-add-form.css';

class EmployersAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',   
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    
    render() {
        return ( 
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={(e) => this.props.addEmploye(this.state.name, this.state.salary, e)}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        value={this.state.name}
                        onChange={(e) => this.onValueChange(e)}
                        name="name"
                        />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={this.state.salary}
                        onChange={(e) => this.onValueChange(e)}
                        />
    
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
}
 
export default EmployersAddForm;