import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  articles = [
    {
      "source": { "id": "fox-sports", "name": "Fox Sports" },
      "author": null,
      "title": "\"Will History Repeat Itself?\" in 2023? NFL odds, picks, predictions",
      "description": "Last season was chock-full of wild moments. And now, one sportsbook has put up fun odds on if history will repeat itself. Jason McIntyre is here with his predictions.",
      "url": "http://www.foxsports.com/stories/nfl/nfl-2023-odds-will-history-repeat-itself-odds-and-picks",
      "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2023/08/1408/814/07.31.23_NFL-Odds-History_16x9.jpg?ve=1&tl=1",
      "publishedAt": "2023-08-04T15:13:33Z",
      "content": "The NFL is back, baby! With the Hall of Fame Game officially in the books, the 2022 season is now a distant memory.\r\nBut that doesn't mean we can't relive a few moments from last season. And one spor… [+4684 chars]"
    },
    {
      "source": { "id": "nrk", "name": "NRK" },
      "author": "Martine Sørhus, Eirik Fure, Stine Løvmo Lie, Sindre Lie",
      "title": "VM-profiler kalles «horer» og «drama queens»: – Personangrep som ikke hører hjemme",
      "description": "«Jeg har aldri sett henne smile». «For en usjarmerende gjeng». «Din gamle kjerring». VM-stjernene måles på langt mer enn sine sportslige prestasjoner.",
      "url": "https://www.nrk.no/sport/vm-profiler-kalles-_horer_-og-_drama-queens__-_-personangrep-som-ikke-horer-hjemme-1.16504596",
      "urlToImage": "https://gfx.nrk.no/M_t5-fx_m6OOc0dHpzTxPQT98HE18oh6XlGEW9mZsIqw.jpg",
      "publishedAt": "2023-08-04T14:17:51Z",
      "content": "Det er jo til dels personangrep som ikke hører hjemme, sier landslagssjef Hege Riise om hetsen som trenerkollega Pia Sundhage har mottatt de siste dagene.\r\nDen svenske Brasil-sjefens sosiale medier f… [+4158 chars]"
    },
    {
      "source": { "id": "news-com-au", "name": "News.com.au" },
      "author": "Chloe Whelan",
      "title": "Billionaire’s shock $60 million move",
      "description": "Australia&rsquo;s richest person Gina Rinehart has made a $60 million surprise commitment to Aussie sports &mdash; but netball is reportedly not on the list.",
      "url": "https://www.news.com.au/sport/olympics/gina-rineharts-shock-60-million-investment-into-australian-olympics/news-story/bf41dc893a823a429e9f3ee2ea6d80a9",
      "urlToImage": "https://content.api.news/v3/images/bin/8f03bc768eae5e753d46ed29cf8beb83",
      "publishedAt": "2023-08-04T12:53:00Z",
      "content": "Australia’s richest person Gina Rinehart has made a $60 million surprise commitment to Aussie sports — but netball is reportedly not on the list.\r\nIt has been revealed that Rinehart, 69, stepped up h… [+2821 chars]"
    },
    {
      "source": { "id": "the-verge", "name": "The Verge" },
      "author": "Jon Porter",
      "title": "Fisker shows off ambitious EV lineup, starting at $29,900",
      "description": "Fiske has shown off a series of prototype electric vehicles. There’s the Ronin sports car, the Pear SUV, the Alaska pickup truck, and a new off-road package for the Ocean.",
      "url": "http://www.theverge.com/2023/8/4/23819813/fisker-electric-car-startup-pear-alaska-ronin-ocean-price-release-date",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/eOafEVF8-4vjED-h7bkMNuch6OA=/0x0:7952x5304/1200x628/filters:focal(3976x2652:3977x2653)/cdn.vox-cdn.com/uploads/chorus_asset/file/24829624/20230823_Product_Vision_Day_05.jpeg",
      "publishedAt": "2023-08-04T11:43:27Z",
      "content": "Fisker shows off ambitious EV lineup, starting at $29,900\r\nFisker shows off ambitious EV lineup, starting at $29,900\r\n / The company showed off four electric vehicles at the event; a sporty convertib… [+3330 chars]"
    },
    {
      "source": { "id": "google-news-ca", "name": "Google News (Canada)" },
      "author": "CJME News Talk Sports",
      "title": "Regina police on lookout for murder suspect - CJME News Talk Sports",
      "description": null,
      "url": "https://news.google.com/rss/articles/CBMiTGh0dHBzOi8vd3d3LmNqbWUuY29tLzIwMjMvMDgvMDMvcmVnaW5hLXBvbGljZS1vbi1sb29rb3V0LWZvci1tdXJkZXItc3VzcGVjdC_SAQA?oc=5",
      "urlToImage": null,
      "publishedAt": "2023-08-03T17:04:00+00:00",
      "content": null
    },
    {
      "source": { "id": "bleacher-report", "name": "Bleacher Report" },
      "author": null,
      "title": " Rooks x Pulisic Interview ️",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/457604-rooks-x-pulisic-vod",
      "urlToImage": null,
      "publishedAt": "2023-08-01T17:52:19.0557986Z",
      "content": "Copyright © 2023 Bleacher Report, Inc. Turner Broadcasting System, Inc.\r\n All Rights Reserved.\r\n BleacherReport.com is part of Bleacher Report Turner Sports Network, part of the Turner Sports and Ent… [+200 chars]"
    },
    {
      "source": { "id": "bleacher-report", "name": "Bleacher Report" },
      "author": null,
      "title": "Cedric Mullins Interview ⚾️",
      "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
      "url": "https://bleacherreport.com/videos/457122-betts-x-mullins-full-vod",
      "urlToImage": null,
      "publishedAt": "2023-08-01T17:52:17.8373521Z",
      "content": "Copyright © 2023 Bleacher Report, Inc. Turner Broadcasting System, Inc.\r\n All Rights Reserved.\r\n BleacherReport.com is part of Bleacher Report Turner Sports Network, part of the Turner Sports and Ent… [+200 chars]"
    }
  ]
  static defaultProps = {
    country: "in",
    pageSize: 3,
    category: "general"
  }
  static prpoTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: props.pageSize,
      category: props.category.toLowerCase()
    }
    document.title = `NewsChimp | ${this.capitalizeFirstLetter(this.props.category)}`
  }
  async componentDidMount() {
    this.setState({ loading: true })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=acc67ffeb78b4478b2f62fff00e5827e&page=` + this.state.page + "&pageSize=" + this.state.pageSize
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
    console.log(this.state.articles);
  }

  handlePrevClick = async () => {
    // this.setState({ loading: true })
    let page = this.state.page - 1
    await this.setState({ page: page })
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=acc67ffeb78b4478b2f62fff00e5827e&page=` + page + "&pageSize=" + this.state.pageSize
    // let data = await fetch(url)
    // let parsedData = await data.json()
    // this.setState({ articles: parsedData.articles, loading: false })
    this.updateNews()
  }
  handleNextClick = async () => {
    // this.setState({ loading: true })
    let page = this.state.page + 1
    await this.setState({ page: page })
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=acc67ffeb78b4478b2f62fff00e5827e&page=` + page + "&pageSize=" + this.state.pageSize
    // let data = await fetch(url)
    // let parsedData = await data.json()
    // this.setState({ articles: parsedData.articles, loading: false })
    this.updateNews()
  }

  updateNews = async () => {
    this.setState({ loading: true })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=acc67ffeb78b4478b2f62fff00e5827e&page=` + this.state.page + "&pageSize=" + this.state.pageSize
    let data = await fetch(url)
    let parsedData = await data.json()
    this.setState({ articles: parsedData.articles, loading: false })
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
    return (
      <div className='container my-3'><h1 className='text-center my-2'>NewsChimp - Top Headlines from {this.capitalizeFirstLetter(this.state.category)}</h1>
        {this.state.loading ? <div style={{ minHeight: "75vh" }}><Spinner></Spinner></div> :
          <div className="row" style={{ minHeight: "75vh" }}>
            {this.state.articles.map((article) =>
              <div className="col-md-4" key={article.url} >
                <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} newsUrl={article.url} author={article.author ? article.author : "Staff"} date={article.publishedAt} source={article.source.name} />
              </div>)
            }
          </div>}
        <div className="container d-flex justify-content-between">
          <button type="button" className="btn btn-dark" onClick={this.handlePrevClick} disabled={this.state.page === 1}>&larr; Previous</button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick} disabled={Math.ceil(this.state.totalResults / this.state.pageSize) <= this.state.page}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News