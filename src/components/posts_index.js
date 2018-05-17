import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {

    /**
     * O component componentDidMount()
     * sera usado para carregar no DOM a função
     * quando o componente estiver sendo chamado 
     */

    componentDidMount() {
        this.props.fetchPosts()
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li key={post.id} className='list-group-item'>
                    {post.title}
                </li>
            )
        })
    }

    render() {
        // console.log(this.props.posts)
        return (
            <div>
                <div>
                    <div className='text-xs-right'>
                        <Link className='btn btn-primary' to='/posts/new'>
                            Add a Posts
                        </Link>
                    </div>    
                </div>
                <h3> Posts Index </h3>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            
            </div>    
        )
    }
}

function mapStateToProps(state) {
    return {posts: state.posts}
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)