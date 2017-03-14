import tvshows from '../../reducers/tvshows'
import { GET_SHOW_LIST, GET_SHOW_INFOS, GET_SHOW_EPISODES } from '../../actions/tvshows'

describe('todos tvshows', () => {
  it('should return the initial state', () => {
    expect(
      tvshows(undefined, {})
    ).toEqual({
      error: null,
      shows: [],
      showInfos: null,
      episodes: []
    })
  })
  it('should resolve GET_SHOW_LIST', () => {
    expect(
      tvshows(undefined, {
        type: GET_SHOW_LIST,
        shows: [{
          id: '1370',
          title: 'Marvel\'s Jessica Jones',
          image: 'http://static.tvmaze.com/uploads/images/medium_portrait/31/77884.jpg'
        }, {
          id: '2174',
          title: 'Marvel\'s Luke Cage',
          image: 'http://static.tvmaze.com/uploads/images/medium_portrait/70/175470.jpg'
        }]
      })
    ).toEqual({
      error: null,
      shows: [{
        id: '1370',
        title: 'Marvel\'s Jessica Jones',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/31/77884.jpg'
      }, {
        id: '2174',
        title: 'Marvel\'s Luke Cage',
        image: 'http://static.tvmaze.com/uploads/images/medium_portrait/70/175470.jpg'
      }],
      showInfos: null,
      episodes: []
    })
  })
  it('should resolve GET_SHOW_INFOS', () => {
    expect(
      tvshows(undefined, {
        type: GET_SHOW_INFOS,
        showInfos: {
          id: 436,
          url: 'http://www.tvmaze.com/shows/436/dead-like-me',
          name: 'Dead Like Me',
          image: {
            medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/3/9014.jpg',
            original: 'http://static.tvmaze.com/uploads/images/original_untouched/3/9014.jpg'
          },
          summary: '<p>Yre about!</p>'
        }
      })
    ).toEqual({
      error: null,
      episodes: [],
      shows: [],
      showInfos: {
        id: 436,
        url: 'http://www.tvmaze.com/shows/436/dead-like-me',
        name: 'Dead Like Me',
        image: {
          medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/3/9014.jpg',
          original: 'http://static.tvmaze.com/uploads/images/original_untouched/3/9014.jpg'
        },
        summary: '<p>Yre about!</p>'
      }
    })
  })
  it('should render GET_SHOW_EPISODES', () => {
    expect(
      tvshows(undefined, {
        type: GET_SHOW_EPISODES,
        episodes: [{
          id: 117670,
          name: 'Lorem ipsum dolor'
        }, {
          id: 117671,
          desc: 'Lorem ipsum dolor2'
        }]
      })
    ).toEqual({
      error: null,
      shows: [],
      episodes: [{
        id: 117670,
        name: 'Lorem ipsum dolor'
      }, {
        id: 117671,
        desc: 'Lorem ipsum dolor2'
      }],
      showInfos: null
    })
  })
})
