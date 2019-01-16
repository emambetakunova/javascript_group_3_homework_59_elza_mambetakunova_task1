import React, {Component} from 'react';
import './AddMovie.css'

class AddMovie extends Component {

    componentDidMount() {
        console.log('[AddMovie] DidMount');
    }

    componentDidUpdate() {
        console.log('[AddMovie] DidUpdate');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Post] ShouldUpdate');
    //
    //     return nextProps.title !== this.props.title ||
    //         nextProps.author !== this.props.author
    // }

    render() {
        console.log('[AddMovie] render');
        return (
            <div className="addTaskForm">
                <input type="text" value={this.props.value} onChange={this.props.changeHandler} />
                <button className="addBtn" onClick={this.props.onClick}>Add</button>
            </div>
        );
    }
}

export default AddMovie;