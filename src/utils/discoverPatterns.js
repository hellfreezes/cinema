export const POPULAR_MOVIES = {
  name: 'popularMovies',
  productType: 'movie',
  params: { sort_by: 'popularity.desc' },
};

export const POPULAR_TV = {
  name: 'popularTVs',
  productType: 'tv',
  params: { sort_by: 'popularity.desc' },
};

export const POPULAR_DRAMAS = year => {
  return {
    name: 'popularMovieDramas',
    productType: 'movie',
    params: { with_genres: '18', primary_release_year: year },
  };
};

export const POPULAR_KIDS_MOVIES = {
  name: 'popularKidsMovies',
  productType: 'movie',
  params: {
    sort_by: 'popularity.desc',
    certification: '0+',
    certification_country: 'RU',
  },
};

export const PRIMARY_RELEASE = () => {
  const firstDay = new Date();
  firstDay.setDate(firstDay.getDate() - firstDay.getDay() + 1);
  const lastDay = new Date(firstDay);
  lastDay.setDate(lastDay.getDate() + 6);

  return {
    name: 'primaryRelease',
    productType: 'movie',
    params: {
      'primary_release_date.gte': firstDay.toISOString().split('T')[0],
      'primary_release_date.lte': lastDay.toISOString().split('T')[0],
    },
  };
};
