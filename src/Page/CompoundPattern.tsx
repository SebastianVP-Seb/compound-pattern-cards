import Card from '../components/card/Card';
import CardImage from '../components/card/CardImage';
import CardHeader from '../components/card/CardHeader';
import CardDescription from '../components/card/CardDescription';
import CardButtons from '../components/card/CardButtons';
import { configCard } from '../components/card/CardInterfaces';

//para poner varios cards
const cardItems: Array<configCard> = [
  {
    title: 'Card1', subtitle: 'card11', description: 'Desc Card1', urlImg: 'https://images.unsplash.com/photo-1657216290036-6c2256a76669?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', alt: 'Imagen1'
  },
  {
    title: 'Card 2', subtitle: 'card1 2', description: 'Desc Card 2', 
    urlImg: 'https://images.unsplash.com/photo-1657219160399-d3fddfacb60e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
  }
];

const CompoundPattern = () => {

  return (
    <>
      {cardItems.map((item) => (
        <Card key={item.title} config={item} >
          <CardImage />
          {/* se pueden o no pasar las props  */}
          {/* <CardImage imgUrl={cascade} alt='' /> */}
          <CardHeader />
          <CardDescription />
          <CardButtons
            primary={{
              label: 'Primary',
              actionClick: () => console.log('Click en Primary'),
              // children: <button className='button is-secondary'>Primary</button>
            }}
            secondary={{
              label: 'Secondary',
              actionClick: () => console.log('Click en Secondary'),
              // children: <button>Secondary</button>
            }} />
        </Card>
      ))}
    </>
  );
};

export default CompoundPattern;