import {Card, CardBody, CardTitle, CardFooter, CardText, Button} from 'reactstrap'
import { ItemCount } from './ItemCount';

const ItemCard =(props)=>{

    const {name, description, img, price,stock} =props;

    return(
        <>
            <Card
                className="my-2"
                style={{
                    width: '18rem'
                }}
            >
                <img src={img}/>
                    
                <CardBody>
                    <CardTitle tag="h5">
                        {name}
                    </CardTitle>
                    <CardText>
                        {description}
                    </CardText>
                    <ItemCount stock ={stock}/>
                </CardBody>
                <CardFooter>
                   $ {price}
                </CardFooter>
            </Card>
           
        </>
    )
}


export default ItemCard