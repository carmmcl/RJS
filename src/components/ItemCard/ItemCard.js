import {Card, CardBody, CardTitle, CardFooter, CardText} from 'reactstrap'

 

const ItemCard =(props)=>{

    const {name, description, img, price,stock} =props;

    return(
        <>
            <Card
                className="my-2 cards"
                style={{
                    width: '14rem'
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
                </CardBody>
                <CardFooter>
                  Precio unidad: $ {price}
                </CardFooter>
                {stock}
            </Card>
           
        </>
    )
}


export default ItemCard