import React from 'react'
import PropTypes from 'prop-types'

const Postt = ({ posts }) => {
    return (
        <div>
            <div className="blog">
                <div className="container">
                    <h1>Bài viết</h1>
                    <div className="blog-top">

                        {posts.map((item, index) => (
                            <div className="col-md-6 grid_3">
                                <h3><strong>{item.name}</strong></h3>
                                <a href="blog_single.html"><img src={item.image} width="500" alt="" /></a>
                                <div className="blog-poast-info">
                                    <ul>
                                        <li><a className="admin" href="#"><i> </i> Admin </a></li>
                                        <li><a className="p-blog" href="#"><i className="comment"> </i>No Comments</a></li>
                                    </ul>
                                </div>
                                <p>{item.noidung}</p>
                                <div className="button"><a href="#">Read More</a></div>
                            </div>
                        ))}

                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Postt.propTypes = {

}

export default Postt
