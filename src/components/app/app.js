import React from 'react';

import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

// export const data = [
//     {
//         name: 'Steve',
//         salary: 500,
//         id:1,
//         increase: false,
//     },
//     {
//         name: 'Mog',
//         salary: 1000,
//         id:2,
//         increase: false,
//     },
//     {
//         name: 'John',
//         salary: 300,
//         id:3,
//         increase: true,
//     }
// ];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    name: 'Steve',
                    salary: 500,
                    id:1,
                    increase: false,
                    rise: true
                },
                {
                    name: 'Mog',
                    salary: 1000,
                    id:2,
                    increase: false,
                    rise: false
                },
                {
                    name: 'John',
                    salary: 300,
                    id:3,
                    increase: true, 
                    rise: false
                }
            ],
            term: '',
            filter: 'rise'
        }
        this.maxId = 4;
    }

    addEmploye = (name, salary, e) => {
        e.preventDefault();
        const id = this.maxId++;
        this.setState(({data}) => (
            {
                data: [...data, {name, salary, id, increase: false, rise: false}]
            }
        ))
    }

    onDeleteItem = (id) => {
        this.setState(({data}) => (
            {
                data: data.filter(item => item.id !== id)
            }
        ))
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => (
            {
                data: data.map(obj => {
                    if(obj.id === id) {
                        return {...obj, [prop]: !obj[prop]}
                    }
                    return obj;
                })
            }
        ))
    }

    searchEmp = (str, arr) => {
        if(str.length === 0) {
            return arr;
        }

        return arr.filter(item => item.name.toLowerCase().indexOf(str) > -1);
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterEmployees = (arr, filter) => {
        switch(filter) {
            case 'rise': 
                return arr.filter(item => item.rise === true);
            case 'salary':
                return arr.filter(item => item.salary >= 1000);
            default:
                return arr;
        }
    }

    getFilter = (filter) => {
        this.setState({filter});
    }

    render() {
        const visibleData = this.filterEmployees(this.searchEmp(this.state.term, this.state.data), this.state.filter) 
        return ( 
            <div className="app">
                <AppInfo increase={this.state.data.filter(item => item.increase === true).length} amount={this.state.data.length}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={this.state.filter} getFilter={this.getFilter}/>
                </div>
                <EmployersList onToggleProp={this.onToggleProp} data={visibleData} onDelete={id => this.onDeleteItem(id)}/>
                <EmployersAddForm addEmploye={this.addEmploye}/>
            </div>
        );
    }
}
 
export default App;