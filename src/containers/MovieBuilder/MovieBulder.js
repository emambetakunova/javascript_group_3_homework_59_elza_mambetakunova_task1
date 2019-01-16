import React, {Component, Fragment} from 'react';
import AddMovie from "../../components/AddMovie/AddMovie";

class MovieBuilder extends Component {

    state = {
        posts: []

    };

    constructor(props) {
        super(props);
        console.log('[MovieBuilder] constructor');
        console.log('[MovieBuilder] State exists:', this.state.posts.length > 0);
    };

    componentDidMount() {
        console.log('[MovieBuilder] DidMount');

        fetch('http://jsonplaceholder.typicode.com/posts?_limit=4').then(response => {
            if(response.ok) {
                return response.json();
            }

            throw new Error('Something');
        }).then(posts => {
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'John'
                }
            });

            this.setState({posts: updatedPosts})
        }).catch(error => {
            console.log(error);
        })
    }

    componentDidUpdate() {
        console.log('[MovieBuilder] DidUpdate');
    }

    togglePostForm = () => {
        this.setState(prevState => {
            console.log('[MovieBuilder] Toggling form');
            return {postsFormShown: !prevState.postsFormShown}
        })
    };


    render() {
        console.log('[MovieBuilder] render');

        let postsForm = null;

        if(this.state.postsFormShown) {
            postsForm = <section className="NewPost">New post form</section>
        }

        return (
            <Fragment>
                <AddMovie/>
            </Fragment>
        );
    }
}

export default MovieBuilder;