import React, {Component} from "react";
import './search-panel.css'

export default class SearchPanel extends Component {
    render() {
        const searchText = 'Type here to search';
        const searchStyle = {
            fontSize: '20px'
        }
        return <input style={searchStyle} placeholder={searchText}/>;
    }
}