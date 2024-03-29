import React, {Component} from "react";
import './item-status-filter.css'

export default class ItemStatusFilter extends Component {
    render() {
        return (
            <div className="btn-group item-status-filter">
                <button type="button"
                        className="btn btn-info">All
                </button>
                <button type="button"
                        className="btn btn-outline-second">Active
                </button>
                <button type="button"
                        className="btn btn-outline-second">Done
                </button>

            </div>
        );
    }
}