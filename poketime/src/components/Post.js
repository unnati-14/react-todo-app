import React, {Component} from 'react'
// import axios from 'axios'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'

class Post extends Component {
    // state = {
    //     post: null
    // }
    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://parking-car.herokuapp.com/allspots/' + id)
    //         .then(res => {
    //             this.setState({
    //                 post: res.data
    //             })
    //         })
    //         console.log(this.state.post)
    // }
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    }
    render(){
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <h6>{this.props.post.body}</h6>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        ): (
            <div className="container">Loading post...</div>
        )
        return(
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

const mapToStoreProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post =>  post.id === id)
    }
}

const mapDispatchToProps =  (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id}) }
    }
}

export default connect(mapToStoreProps, mapDispatchToProps)(Post)