import React from 'react';
import Header from '../components/Header';
import '../styles/styles.css';

const apiKey = "e9d9a38191c9443ea6a081de9dd71e20";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      selectedSource: 'the-washington-post',
      articles: [],
      sources: []
    };
  }

  componentDidMount() {
    this.updateNews();
    this.updateSources();
  }

  updateNews = async(source = this.state.selectedSource) => {
    try {
      const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`);
      const json = await res.json();

      this.setState(() => ({
        isLoaded: true,
        articles: json.articles,
        selectedSource: source
      }));

    } catch (error) {
      this.setState(() => ({error}))
    }
  }

  updateSources = async() => {
    try {
      const res = await fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`);
      const json = await res.json();

      this.setState(() => ({
        sources: json.sources
      }));

    } catch (error) {
      this.setState(() => ({error}))
    }
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Header selectedSource={this.state.selectedSource} sources={this.state.sources} updateNews={this.updateNews} />
          <main>
            {articles.map((article, index) => (
              <div className="article" key={index}>
                <h2><a href={article.url}>{article.title}</a></h2>
                <img src={article.urlToImage} alt="" />
                <p>{article.description}</p>
              </div>
            ))}
          </main>
        </div>
      );
    }
  }
}

export default Index;
