import React from 'react';
import { Link } from "react-router-dom";
import { CategoryContext } from '../CategoryContext';

import AllNews from '../components/AllNews';
import DisplayFull from '../components/DisplayFull';
import OneNews from '../components/OneNews';

function Home() {

    let [newsNum, setnewsNum] = React.useState([]);

    const { category, setcategory } = React.useContext(CategoryContext);



    const setCategory = (n) => {
        if (n == 0) {
            setcategory('Top News');
        } else if (n == 1) {
            setcategory('National News');
        } else if (n == 2) {
            setcategory('World News');
        } else if (n == 3) {
            setcategory('Science News');
        } else if (n == 4) {
            setcategory('Politics News');
        } else if (n == 5) {
            setcategory('Technology News');
        } else if (n == 6) {
            setcategory('Startup News');
        } else if (n == 7) {
            setcategory('Sports News');
        } else if (n == 8) {
            setcategory('Entertainment News');
        } else if (n == 9) {
            setcategory('Miscellaneous News');
        } else if (n == 10) {
            setcategory('Hatke News');
        } else {

        }
    }


    const setNum = (n) => {

        setCategory(n);
        setnewsNum(n);
        console.log(newsNum)

    }

    React.useEffect(() => {
        setnewsNum(0);
    }, []);

    return (
        <>

            <DisplayFull />
            <section className="container" id="topNewsHome" >
                <div className="row justify-content-center">
                    <img className="img-fluid w-50 my-2" src="/assets/imgs/head.png" style={{}} />
                </div>
                <div className="d-flex flex-wrap gap-2 justify-content-center">
                    <div className="">
                        <h3>Categories:</h3>
                    </div>

                    <div className="">
                        <a onClick={() => { setNum(0) }} className={`${newsNum == 0 ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-dark btn-sm'} `}>Top News
                        </a>
                    </div>
                    <div className="">
                        <a onClick={() => { setNum(1) }} className={`${newsNum == 1 ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-dark btn-sm'} `}>National
                        </a>
                    </div>
                    <div className="">
                        <a onClick={() => { setNum(2) }} className={`${newsNum == 2 ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-dark btn-sm'} `}>World
                        </a>
                    </div>
                    <div className="">
                        <a onClick={() => { setNum(3) }} className={`${newsNum == 3 ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-dark btn-sm'} `} >Science
                        </a>
                    </div>
                    <div className="">
                        <a onClick={() => { setNum(4) }} className={`${newsNum == 4 ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-dark btn-sm'} `}>Politics
                        </a>
                    </div>
                    <div className="">
                        <a onClick={() => { setNum(5) }} className={`${newsNum == 5 ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-dark btn-sm'} `}>Technology
                        </a>
                    </div>
                    <div className="">
                        <a onClick={() => { setNum(6) }} className={`${newsNum == 6 ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-dark btn-sm'} `}>Startup
                        </a>
                    </div>
                    <div className="">
                        <a onClick={() => { setNum(7) }} className={`${newsNum == 7 ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-dark btn-sm'} `} >Sports
                        </a>
                    </div>
                    <div className="">
                        <a onClick={() => { setNum(8) }} className={`${newsNum == 8 ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-dark btn-sm'} `}>Entertainment
                        </a>
                    </div>
                    <div className="">
                        <a onClick={() => { setNum(9) }} className={`${newsNum == 9 ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-dark btn-sm'} `}>Miscellaneous
                        </a>
                    </div>
                    <div className="">
                        <a onClick={() => { setNum(10) }} className={`${newsNum == 10 ? 'btn btn-outline-primary btn-sm active' : 'btn btn-outline-dark btn-sm'} `}>Hatke
                        </a>
                    </div>

                </div>
            </section>


            <section className="container" >
                {newsNum == 0
                    ? <AllNews newsUrl={'https://inshortsapi.vercel.app/news?category=all'} />
                    : newsNum == 1 ? <AllNews newsUrl={'https://inshortsapi.vercel.app/news?category=national '} />
                        : newsNum == 2 ? <AllNews newsUrl={'https://inshortsapi.vercel.app/news?category=world'} />
                            : newsNum == 3 ? <AllNews newsUrl={'https://inshortsapi.vercel.app/news?category=science'} />
                                : newsNum == 4 ? <AllNews newsUrl={'https://inshortsapi.vercel.app/news?category=politics'} />
                                    : newsNum == 5 ? <AllNews newsUrl={'https://inshortsapi.vercel.app/news?category=technology'} />
                                        : newsNum == 6 ? <AllNews newsUrl={'https://inshortsapi.vercel.app/news?category=startup'} />
                                            : newsNum == 7 ? <AllNews newsUrl={'https://inshortsapi.vercel.app/news?category=sports'} />
                                                : newsNum == 8 ? <AllNews newsUrl={'https://inshortsapi.vercel.app/news?category=entertainment'} />
                                                    : newsNum == 9 ? <AllNews newsUrl={'https://inshortsapi.vercel.app/news?category=miscellaneous'} />
                                                        : newsNum == 10 ? <AllNews newsUrl={'https://inshortsapi.vercel.app/news?category=hatke'} />
                                                            : <h1>Our News</h1>
                }
            </section>
        </>
    )
}

export default Home;