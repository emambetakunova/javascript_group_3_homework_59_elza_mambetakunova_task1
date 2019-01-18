import React, {Component} from 'react';
import './AddMovie.css'

class AddMovie extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.listName !== this.props.listName
    };

    render() {
        return (
            <div className="AddMovieForm">
                <input className="AddMovie" type="text" onFocus={this.props.onFocus} value={this.props.listName} onChange={this.props.changeHandlerName} />
                <button className="AddBtn" onClick={this.props.onClick}>Add</button>
            </div>
        );
    }
}

export default AddMovie;