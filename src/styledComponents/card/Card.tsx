import { createContext } from 'react';
import { configCard, propsCard } from '../../components/card/CardInterfaces';
import { Button } from './styled/Button.styled';
import { CardWrapper } from './styled/card.styled';

export const contextCard = createContext<configCard>({});
const { Provider } = contextCard;

const Card = (props: propsCard) => {
    return (
        <Provider value={props.config={}}>
            <CardWrapper>
                {/* <Button ></Button> */}
                {props.children}
            </CardWrapper>
        </Provider>
    );
};

export default Card;