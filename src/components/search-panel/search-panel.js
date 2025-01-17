import React from 'react';
import './search-panel.css'

class SearchPanel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term})
        this.props.onUpdateSearch(term.toLowerCase());
    }

    render() {
        return ( 
            <input value={this.state.term} onChange={this.onUpdateSearch} type="text" className="form-control search-input" placeholder="Найти сотрудника" />
        );
    }
}
 
export default SearchPanel;