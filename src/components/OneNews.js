import React from 'react';
import { Link } from "react-router-dom";


function OneNews(props) {

    const { oneNews } = props;

    return (
        <a href={oneNews.readMoreUrl} target="_blank" rel="noopener noreferrer" id="myLink" style={{textDecoration: 'none'}} >
            <div className="link">
                <div className="card m-auto" style={{ width: 200 }}>
                    <img src={oneNews.imageUrl} className="card-img-top" style={{ height: 150 }} alt="img" />
                    <div className="card-body">
                        <h6 className="card-title">{oneNews.title}</h6>
                        <div className="d-flex justify-content-between ">
                            <p className="card-text"> <small className="text-muted">{oneNews.date}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </a>

    )
}

export default OneNews;