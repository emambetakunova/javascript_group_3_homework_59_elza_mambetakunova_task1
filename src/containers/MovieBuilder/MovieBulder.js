import React, {Component} from 'react';
import AddMovie from "../../components/AddMovie/AddMovie";
import WatchList from "../../components/WatchList/WatchList";

class MovieBuilder extends Component {

    state = {
        listName: 'Add new movie',
        newListName: '',
        allMovieList: [],
        showItems: true

    };

    addMovie = () => {
        if (this.state.listName === "") {
            alert('Please, add your item!')
        } else {
            const newMovie = this.state.listName;
            const allMovieList = [...this.state.allMovieList];
            allMovieList.push(newMovie);
            this.setState({allMovieList: allMovieList, listName: ''});
        }
    };

    changeHandlerName = event => {
        this.setState({listName: event.target.value});
    };

    changeHandlerNewName = (event, id) => {
        const allMovieList = this.state.allMovieList;
        allMovieList[id] = event.target.value;
        this.setState({allMovieList});
    };

    focusHandler = () => {
        this.setState({listName: ''})
    };

    removeItem = id => {
        const allMovie = [...this.state.allMovieList];
        allMovie.splice(id, 1);

        this.setState({allMovieList: allMovie});
    };

    render() {
        let items = null;

        if (this.state.showItems) {
            items = this.state.allMovieList.map((item, id) => (
                <WatchList
                    key={id}
                    text={item}
                    onChange={(event) => this.changeHandlerNewName(event, id)}
                    remove={() => this.removeItem(id)}
                />
            ));
        }
        return (
            <div className="Wrapper">
                <AddMovie
                    changeHandlerName={this.changeHandlerName}
                    listName={this.state.listName}
                    onClick={() => this.addMovie()}
                    onFocus={this.focusHandler}
                />
                {items}
            </div>
        )
    }
}

export default MovieBuilder;