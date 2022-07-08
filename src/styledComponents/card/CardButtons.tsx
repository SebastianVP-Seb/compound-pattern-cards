import React from 'react';
import styled from 'styled-components';
import { Button } from './styled/Button.styled';
import { CardButtonsWrapper } from './styled/CardButtons.styled';

const BtnWithShadow=styled(Button)`
    box-shadow: 0 0 16px 0 #a54272;
`;

const CardButtons = ({primary, secondary}: any) => {
  return (
    <CardButtonsWrapper>
        {/* <BtnWithShadow>New Button</BtnWithShadow> */}
        {
        secondary?.children ? secondary?.children : (
          <Button 
            variant='secondary'
            // onClick={()=>secondary.actionClick()}
            onClick={secondary?.actionClick}
          >{secondary.label}</Button>
        )
      }

      {
        primary?.children ? primary?.children : (
          <Button 
            variant='primary'
            onClick={()=>primary.actionClick()}
          >{primary.label}</Button>
        )
      }
    </CardButtonsWrapper>
  );
};

export default CardButtons;
