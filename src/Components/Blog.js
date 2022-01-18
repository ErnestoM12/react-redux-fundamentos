import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { SyncLoader } from 'react-spinners'
import { fetchPosts } from '../redux/actions/postsActions'

const Blog = (props) => {

  useEffect(() => {
    props.dispatch(fetchPosts())
  }, [])

  return (
    <div>
      <h1>Nuevas entradas de blog</h1>
      {props.posts.isFetching
        ? <SyncLoader />
        : (
          <ul>
            {props.posts.posts.map(post => (
              <li key={post.id}>
                {post.title}
              </li>
            ))}
          </ul>
        )
      }

    </div>
  )
}

export default connect((state) => {
  return state
})(Blog)
