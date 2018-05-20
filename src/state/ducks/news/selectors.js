const getNews = state => state.news.allIds.map(id => state.news.byIds[id]);
const getLoading = state => state.news.loading;

export default {
  getNews,
  getLoading
};