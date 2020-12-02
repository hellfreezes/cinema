import React, { useState } from 'react';
import classes from './Carousel.module.css';

import MovieMiniCard from '../../components/MovieMiniCard/MovieMiniCard';

import TestCanvasImage1 from '../../assets/images/canvas/3d050423-53d0-4237-965c-a413682cc098.jpg';
import TestCanvasImage2 from '../../assets/images/canvas/0cae81d1-c897-4b19-adde-1d992266b251.jpg';
import TestCanvasImage3 from '../../assets/images/canvas/38f30bf2-47d6-4107-9e8b-b91c5eedd492.jpg';
import TestCanvasImage4 from '../../assets/images/canvas/8bbe9190-4b59-4a32-96d7-100d1c280da0.jpg';
import TestCanvasImage5 from '../../assets/images/canvas/e44205e4-f91c-4340-b9ce-e904fa8238f6.jpg';

export default function Carousel() {
  const [moviesCards] = useState([
    {
      id: 0,
      title: 'Best Movie',
      image: TestCanvasImage5,
      year: '2011',
      minutes: '58',
      genre: 'Adventures, Cartoon',
      miniDeatails: 'TV',
    },
    {
      id: 1,
      title: 'Best Movie',
      image: TestCanvasImage1,
      year: '2011',
      minutes: '58',
      genre: 'Adventures, Cartoon',
      miniDeatails: 'TV',
    },
    {
      id: 2,
      title: 'Best Movie',
      image: TestCanvasImage2,
      year: '2011',
      minutes: '58',
      genre: 'Adventures, Cartoon',
      miniDeatails: 'TV',
    },
    {
      id: 3,
      title: 'Best Movie',
      image: TestCanvasImage3,
      year: '2011',
      minutes: '58',
      genre: 'Adventures, Cartoon',
      miniDeatails: 'TV',
    },
    {
      id: 4,
      title: 'Best Movie',
      image: TestCanvasImage4,
      year: '2011',
      minutes: '58',
      genre: 'Adventures, Cartoon',
      miniDeatails: 'TV',
    },
  ]);

  const cardsMap = moviesCards.map((card) => <MovieMiniCard key={card.id} movie={card} />);

  return (
    <div className={classes.Carousel}>
      <div className={classes.TitleRow}>
        <div className={classes.Title}>Most Popular</div>
        <div className={classes.Actions}>
          <div className={classes.Dots}>
            <div className={classes.Dot}></div>
            <div className={classes.Dot}></div>
            <div className={classes.Dot}></div>
          </div>
        </div>
      </div>
      <div className={classes.Cards}>{cardsMap}</div>
    </div>
  );
}
