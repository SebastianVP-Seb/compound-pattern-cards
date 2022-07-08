import React, { useContext } from 'react';
import { contextCard } from './Card';
import { DescriptionProps } from './CardInterfaces';

//Para un elemento no es necesario crear una interfase

const CardDescription = ({ description }: DescriptionProps ) => {

  const { description: descriptionContext } = useContext(contextCard);

  return (
    <div className="card_description">
      <p>{description ? description : descriptionContext}</p>
    </div>
  );
};

export default CardDescription;