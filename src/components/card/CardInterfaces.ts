import { ReactElement } from "react";

export interface configCard {
    title?: string,
    subtitle?: string,
    urlImg?: string,
    description?:string ,
    alt?: string
};
  
export interface propsCard {
    children?: ReactElement | ReactElement[]; //un elemento o un arreglo de elementos
    config?: configCard; // a su vez, puede ser una interfaz
};

// Para no repetir interfases
export interface actionsButtons {
    children?: ReactElement;
    label: string;
    actionClick: ()=>void;
};

export interface cardButtonsProps {
    primary: actionsButtons;
    secondary: actionsButtons;
};

export interface cardHeaderProps {
    title?: string;
    subtitle?: string;
};

export interface CardImg {
    imgUrl?: string;
    alt?: string;
};

export interface DescriptionProps {
    description?: string
};