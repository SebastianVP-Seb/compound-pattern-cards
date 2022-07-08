import { useContext } from 'react';
import { contextCard } from './Card';
import { CardImageWrapper } from './styled/CardImage.styled';
import notFoundImg from '../../assets/didin.jpg';

const CardImage = ({imgUrl, alt} : {imgUrl: string, alt: string}) => {

  // const {imgUrl:imgContext, altContext}=useContext(contextCard);
  const {urlImg: imgContext, alt: altContext}=useContext(contextCard);
  const imgShow=imgUrl ? imgUrl : imgContext ? imgContext : notFoundImg;

  return (
    <CardImageWrapper>
      <img src={imgShow} alt={alt ? alt : altContext} />
    </CardImageWrapper>
  );
};

export default CardImage;