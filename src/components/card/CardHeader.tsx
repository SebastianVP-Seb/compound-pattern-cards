import React, { useContext } from 'react';
import { contextCard } from './Card';
import { cardHeaderProps } from './CardInterfaces';

const CardHeader = ({ title, subtitle }: cardHeaderProps) => {

  const { title: titleContext, subtitle: subtitleContext } = useContext(contextCard);

  return (
    <div className="card_header">
      <h2 className="card_title">{title ? title : titleContext}</h2>
      <h4 className="card_subtitle">{subtitle ? subtitle : subtitleContext}</h4>
    </div>
  );
};

export default CardHeader;