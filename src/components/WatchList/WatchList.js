import React, {Component} from 'react';
import './WatchList.css'

class WatchList extends Component {
    render() {
        return (
            <div className="List">
                <input className="List" type="text" value={this.props.text} onChange={this.props.onChange} />
                <button className="RemoveBtn" onClick={this.props.remove}>X</button>
            </div>
        );
    }
}

export default WatchList;