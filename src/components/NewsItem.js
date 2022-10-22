
import React  from 'react'

const NewsItem = (props)=> {


  
    let { title, description, imageUrl, newsUrl, date, author, source } = props;
    return (
      <div className='my-3'>
        <div className="card" >

          <div style={{display:'flex',justifyContent: 'flex-end',position:'absolute',right:'0'}}>
            <span className=" badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img src={!imageUrl ? "https://images.hindustantimes.com/img/2022/10/06/1600x900/Akasa_1650976378271_1665040908309_1665040908309.PNG" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>

    )
  
}

export default NewsItem