import { cardButtonsProps } from "./CardInterfaces";

const CardButtons = ({secondary, primary}: cardButtonsProps) => {
  return (
    <div className="card_buttons">
      {/* Si existe children, renderízalos, sino renderiza el botón 
      El children se define en CompoundPattern*/}
      {
        secondary?.children ? secondary?.children : (
          <button 
            className='button is-secondary'
            // onClick={()=>secondary.actionClick()}
            onClick={secondary?.actionClick}
          >{secondary.label}</button>
        )
      }

      {
        primary?.children ? primary?.children : (
          <button 
            className='button is-primary'
            onClick={()=>primary.actionClick()}
          >{primary.label}</button>
        )
      }
    </div>
  );
};

export default CardButtons;