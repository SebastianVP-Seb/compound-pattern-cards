import { createContext } from 'react';
import { configCard, propsCard } from './CardInterfaces';
import './styles.css';

// export interface configCard {
//   title?: string,
//   subtitle?: string,
//   urlImg?: string,
//   description?:string ,
//   alt?: string
// };

// interface propsCard {
//   children?: ReactElement | ReactElement[]; //un elemento o un arreglo de elementos
//   config?: configCard; // a su vez, puede ser una interfaz
// };

export const contextCard=createContext<configCard>({});
const {Provider}=contextCard;

const Card = ({children, config={}}: propsCard) => {
  
  return (
    // value no puede ser opcional ni undefined, tiene que ser un valor, si no viene, 
    //entonces manda un obj vacío, entonces en configCard, poner el ? para que sen opcionales
    <Provider value={config} >
      <div className='card'>
        {children}
      </div>
    </Provider>
  );
};

export default Card;