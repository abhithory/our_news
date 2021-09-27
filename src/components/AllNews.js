import React from 'react';
import { Link } from "react-router-dom";
import OneNews from './OneNews';


function AllNews(props) {

    const { newsUrl } = props;
    console.log(newsUrl);

    const [AllNews, setAllNews] = React.useState([]);
    const [loading, setloading] = React.useState(true);


    React.useEffect(() => {
        setloading(true);

        fetch(newsUrl)
            .then(response => response.json())
            .then(jsonResponse => {
                setAllNews(jsonResponse.data);
                setloading(false);
            });


    }, [newsUrl]);

    return (
        <> {loading
            ?
            <div className="container" >
                <div className="row justify-content-center" style={{ height: '70vh' }}>
                    <div className="col-8 m-auto">
                        <img className="img-fluid" src="/assets/imgs/loading.gif" />
                    </div>
                </div>

            </div>
            :
            <div className="container">
                <div className="my-2">
                    <div className="row " >
                        {AllNews.map((onenews, key) => {
                            return (
                                <div key={key} className="col-lg-3 col-md-4 col-sm-6 col-12 my-2">
                                    <OneNews oneNews={onenews} />
                                </div>
                            )
                        })

                        }


                    </div>
                </div>
            </div>
        }
        </>

    )
}

export default AllNews;