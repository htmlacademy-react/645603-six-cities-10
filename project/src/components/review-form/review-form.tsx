import React, {ChangeEvent, useState} from 'react';
import RatingItem from '../rating-item/rating-item';

function ReviewForm() {
  const [userReview, setUserReview] = useState('');
  const [userRating, setUserRating] = useState(0);
  // eslint-disable-next-line
  console.log(userReview);
  // eslint-disable-next-line
  console.log(userRating);

  return (
    <form className="reviews__form form" action="#" method="post">
      {/*TODO: add onSubmit*/}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <RatingItem
          value={5}
          id="5-stars"
          title="perfect"
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setUserRating(5)}
        />
        <RatingItem
          value={4}
          id="4-stars"
          title="good"
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setUserRating(4)}
        />
        <RatingItem
          value={3}
          id="3-stars"
          title="not bad"
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setUserRating(3)}
        />
        <RatingItem
          value={2}
          id="2-stars"
          title="badly"
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setUserRating(2)}
        />
        <RatingItem
          value={1}
          id="1-stars"
          title="terribly"
          onChange={({target}: ChangeEvent<HTMLInputElement>) => setUserRating(1)}
        />
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {setUserReview(target.value);}}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
