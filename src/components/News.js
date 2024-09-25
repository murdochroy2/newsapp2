import React, { Component, useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  const [pageSize, setPageSize] = useState(20)
  // document.title = `NewsChimp | ${capitalizeFirstLetter(props.category)}`
  const componentDidMount = async () => {
    // setLoading(true)
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=` + page + "&pageSize=" + pageSize
    // let data = await fetch(url)
    // let parsedData = await data.json()
    // console.log(articles);
    console.log("Component Did Mount");
    await updateNews()
    console.log(totalResults, articles.length);
  }
  useEffect(() => {
    updateNews()
    // No cleanup callback provided    
  }, []) // Not listening to any component/object/element(?)


  const handlePrevClick = async () => {
    // setLoading(true)
    let page = page - 1
    await setPage(page)
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=` + page + "&pageSize=" + pageSize
    // let data = await fetch(url)
    // let parsedData = await data.json()
    updateNews()
  }
  const handleNextClick = async () => {
    // setLoading(true)
    let page = page + 1
    await setPage(page)
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=` + page + "&pageSize=" + pageSize
    // let data = await fetch(url)
    // let parsedData = await data.json()
    updateNews()
  }

  const updateNews = async () => {
    console.log("setProgress", props.setProgress);
    props.setProgress(10)
    setLoading(true)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=` + page + "&pageSize=" + pageSize
    props.setProgress(30)
    let data = await fetch(url)
    props.setProgress(70)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setLoading(true)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100)
    setLoading(false)
    console.log(totalResults, articles.length);
  }
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const fetchMoreData = async () => {
    let newPage = page + 1
    console.log("page: ", newPage, "fetching more data")

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=` + newPage + "&pageSize=" + pageSize
    setPage(newPage)
    let data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    console.log(totalResults, articles.length);
  };
  return (
    <>
      <h1 className='text-center my-2'>NewsChimp - Top Headlines from {capitalizeFirstLetter(props.category)}</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={totalResults != articles.length}
        loader={<Spinner></Spinner>}
      ><div className="container my-3">
          <div className="row" >
            {articles.map((article) =>
              <div className="col-md-4" key={article.url} >
                <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} newsUrl={article.url} author={article.author ? article.author : "Staff"} date={article.publishedAt} source={article.source.name} />
              </div>)
            }
          </div>
        </div>
      </InfiniteScroll>
      {/* } */}
    </>
  )
}
News.defaultProps = {
  country: "us",
  pageSize: 4,
  category: "general"
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News