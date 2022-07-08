import React, { useContext } from 'react';
import { contextCard } from './Card';
import { CartHeaderWrapper } from './styled/CardHeader.styled';

const CardHeader = ({title, subtitle} : {title: string, subtitle: string}) => {

    const {title: titleContext, subtitle: subtitleContext}=useContext(contextCard);

  return (
    //Aquí ya no se necesitan los className
    <CartHeaderWrapper>
        <h2>{title ? title : titleContext}</h2>
        <h4>{subtitle ? subtitle : subtitleContext}</h4>
    </CartHeaderWrapper>
  );
};

export default CardHeader;