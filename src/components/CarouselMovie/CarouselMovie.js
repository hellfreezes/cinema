import React from 'react';
import classes from './CarouselMovie.module.css';

export default function CarouselMovie() {
  return (
    <div class="showcase__carousel_bar">
      <div class="showcase__carousel_bar_canvas">
        <div class="showcase__carousel_bar_backdrop"></div>
      </div>
      <div class="showcase__carousel_bar_movie_title">Jack Frost</div>
      <div class="showcase__carousel_bar_movie_details">
        <div class="showcase__carousel_bar_movie_details_genre">
          (1979) · 48 min
          <br />
          Animation, Fantasy, Kids & Family
        </div>
        <div class="showcase__carousel_bar_movie_details_btn">TV-G</div>
      </div>
    </div>
  );
}
