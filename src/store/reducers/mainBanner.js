import * as actionTypes from '../actions/actionTypes';

// TODO: remove after move to side fetching from api
import MandalorianPoster from '../../assets/images/mandalorian-poster.png';
import StrangerThingsPoster from '../../assets/images/stranger_things_poster.jpg';
import QueensGambitPoster from '../../assets/images/queens_gambit.png';

const initialState = {
  bannersMap: [{ id: 0, title: 'The Mandalorian', posterUrl: MandalorianPoster, link: '#' }],
};

// TODO: side fetch from API
const mainBannersFetch = (state, action) => {
  console.log('Fetching banners. This must be only once per refresh page!');
  return {
    ...state,
    bannersMap: [
      { id: 0, title: 'The Mandalorian', posterUrl: MandalorianPoster, link: '#' },
      { id: 1, title: 'Stranger Things', posterUrl: StrangerThingsPoster, link: '#' },
      { id: 2, title: 'The Queens Gambit', posterUrl: QueensGambitPoster, link: '#' },
    ],
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MAIN_BANNERS_FETCH:
      return mainBannersFetch(state, action);
    default:
      return state;
  }
};

export default reducer;
