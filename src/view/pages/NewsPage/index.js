import React from 'react';
import Loader from 'view/components/Loader';
import Heading from 'view/components/Heading';
import CustomAlert from 'view/components/CustomAlert';
import NewsList from './NewsList';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { newsThunks, newsSelectors } from 'state/ducks/news';
import { globalErrorSelectors } from 'state/ducks/globalError';


class NewsPage extends React.Component {
  componentDidMount() {
    this.props.fetchNews();
  }
  render() {
    const { news, loading, globalError } = this.props;
    if (loading) return <Loader />;
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <Heading text="Новости" />
            {
              Boolean(globalError) ? (
                <CustomAlert color="danger" message={globalError} />
              ) : (
                null
              )
            }
            <NewsList news={news} />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <p><b>Всего новостей: { news.length }</b></p> 
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  news: newsSelectors.getNews(state),
  loading: newsSelectors.getLoading(state),
  globalError: globalErrorSelectors.getGlobalError(state)
});

export default connect(mapStateToProps, {...newsThunks})(NewsPage);