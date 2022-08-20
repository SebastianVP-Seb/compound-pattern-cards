import { createContext } from 'react';
import { configCard, propsCard } from '../../components/card/CardInterfaces';
import { CardWrapper } from './styled/card.styled';

export const contextCard = createContext<configCard>({});
const { Provider } = contextCard;

const Card = (props: propsCard) => {
    return (
        <Provider value={props.config={}}>
            <CardWrapper>
                {props.children}
            </CardWrapper>
        </Provider>
    );
};

export default Card;