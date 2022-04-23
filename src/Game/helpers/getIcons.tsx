import "./getIconsStyle.css"
import { HeartFill, Heart, StarFill, Star } from "react-bootstrap-icons"

export const getLifeIcons = (life:number) => {
 
  if (life === 3) {
    return (
      <div className="hearts-wrap">
        <HeartFill className="heart-icon"/>
        <HeartFill className="heart-icon"/>
        <HeartFill className="heart-icon"/>
      </div>
    )
  }
  
  if (life === 2) {
    return (
      <div className="hearts-wrap">
        <HeartFill className="heart-icon"/>
        <HeartFill className="heart-icon"/>
        <Heart className="heart-icon"/>
      </div>
    )
  }
  
  if (life === 1) {
    return (
      <div className="hearts-wrap">
        <HeartFill className="heart-icon"/>
        <Heart className="heart-icon"/>
        <Heart className="heart-icon"/>
      </div>
    )
  }

  return (
    <div className="hearts-wrap">
      <Heart className="heart-icon"/>
      <Heart className="heart-icon"/>
      <Heart className="heart-icon"/>
    </div>
  )
}

export const getStarsIcons = (assertPercetage:number) => {
 
  if (assertPercetage > 89) {
    return (
      <div className="stars-wrap">
        <StarFill className="star-icon"/>
        <StarFill className="star-icon"/>
        <StarFill className="star-icon"/>
        <StarFill className="star-icon"/>
        <StarFill className="star-icon"/>
      </div>
    )
  }
  
  if (assertPercetage > 69) {
    return (
      <div className="stars-wrap">
        <StarFill className="star-icon"/>
        <StarFill className="star-icon"/>
        <StarFill className="star-icon"/>
        <StarFill className="star-icon"/>
        <Star className="star-icon"/>
      </div>
    )
  }
  
  if (assertPercetage > 49) {
    return (
      <div className="stars-wrap">
        <StarFill className="star-icon"/>
        <StarFill className="star-icon"/>
        <StarFill className="star-icon"/>
        <Star className="star-icon"/>
        <Star className="star-icon"/>
      </div>
    )
  }
  
  if (assertPercetage > 29) {
    return (
      <div className="stars-wrap">
        <StarFill className="star-icon"/>
        <StarFill className="star-icon"/>
        <Star className="star-icon"/>
        <Star className="star-icon"/>
        <Star className="star-icon"/>
      </div>
    )
  }
  
  if (assertPercetage > 1) {
    return (
      <div className="stars-wrap">
        <StarFill className="star-icon"/>
        <Star className="star-icon"/>
        <Star className="star-icon"/>
        <Star className="star-icon"/>
        <Star className="star-icon"/>
      </div>
    )
  }

  return (
    <div className="stars-wrap">
      <Star className="star-icon"/>
      <Star className="star-icon"/>
      <Star className="star-icon"/>
      <Star className="star-icon"/>
      <Star className="star-icon"/>
    </div>
  )
}
