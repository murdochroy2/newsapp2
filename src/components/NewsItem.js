import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    let altImageUrl = "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/07.31.23_NFL-Odds-History_16x9.jpg?ve=1&tl=1";
    return (
      <div className='my-3'><div className="card" style={{ "width": "18rem" }}>
        <img src={imageUrl ? imageUrl : altImageUrl} className="card-img-top" alt="https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/07.31.23_NFL-Odds-History_16x9.jpg?ve=1&tl=1" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} target='_blank' className="btn btn-primary">Go somewhere</a>
        </div>
      </div></div>
    )
  }
}

export default NewsItem