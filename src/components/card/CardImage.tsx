import React, { useContext } from 'react';
import { contextCard } from './Card';
import notFoundImg from '../../assets/didin.jpg';
import { CardImg } from './CardInterfaces';

const CardImage: React.FC<CardImg> = ({ imgUrl, alt }) => {

  const { alt: altContext, urlImg: imgContext } = useContext(contextCard);

  const imgShow = imgUrl ? imgUrl : imgContext ? imgContext : notFoundImg;

  return (
    <div className="card_image">
      {/* Validando la imagen  */}
      <img src={imgShow} alt={alt ? alt : altContext} />
    </div>
  );
};

export default CardImage;