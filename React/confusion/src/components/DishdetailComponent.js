import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';



    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }

    function RenderComment({dish}) {
        if (dish != null) {
            
            const comments = dish.comments.map((comment) => {
                    var date = new Date(comment.date);
                    return (
                        <div>
                            <ul>
                                {comment.comment}
                            </ul>
                            <ul>
                                { "-- " + comment.author + ", " + date.toLocaleString('default', {year: 'numeric', month: 'short', day:"2-digit"})}
                            </ul>
                        </div>
                    );
                
            });

            return (
                <div className='col-12 col-md-7 mt-1'>
                    <h4>Comments:</h4>
                    {comments}
                </div>             
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }

    const DishDetail = (props) => {
        return(
            <div className='container'>
                <div className='row'>
                    <RenderDish dish={props.dish}/>
                    <RenderComment dish={props.dish}/>
                </div>
            </div>
        );
    }


export default DishDetail