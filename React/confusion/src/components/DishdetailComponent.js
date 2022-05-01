import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    renderDish(dish) {
        console.log('henlo');
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

    renderComment(dish) {
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

    render() {
        return(
            <div className='container'>
                <div className='row'>
                    {this.renderDish(this.props.dish)}
                    
                    {this.renderComment(this.props.dish)}
                </div>
            </div>
        );
    }

}

export default DishDetail