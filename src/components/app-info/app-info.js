import React from 'react';
import './app-info.css';

class AppInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            increase: this.props.increase
        }
    }
    
    render() {
        return ( 
            <div className="app-info">
                <h1>Учет сотрудников в компании N</h1>
                <h2>Общее число сотрудников: {this.props.amount}</h2>
                <h2>Премию получать: {this.props.increase}</h2>
            </div>
        );
    }
}
 
export default AppInfo;