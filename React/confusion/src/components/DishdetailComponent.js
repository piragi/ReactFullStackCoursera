import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import {
    Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, Row, Col
} from 'reactstrap';
import Link from 'react-router-dom/Link';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';




function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div key={dish.id} className="col-12 mt-1">
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
        return (
            <div></div>
        )
    }
}

function RenderComment({ comments, addComment, dishId }) {
    if (comments != null) {

        const comment = comments.map((comment) => {
            var date = new Date(comment.date);
            return (
                <div className="col-12 mt-1">
                    <ul class="list-unstyled">
                        {comment.comment}
                    </ul>
                    <ul class="list-unstyled">
                        {"-- " + comment.author + ", " + date.toLocaleString('default', { year: 'numeric', month: 'short', day: "2-digit" })}
                    </ul>

                </div>
            );

        });

        return (
            <div className='col-12 col-md-7 mt-1'>
                <h4>Comments:</h4>
                {comment}
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    }
}

class CommentForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isCommentModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.submitComment = this.submitComment.bind(this);

    }

    //const [isCommentModalOpen, setIsCommentModalOpen] = React.useState(false);
    //const [addComment, setIsCommentModalOpen] = React.useState(false);


    toggleModal() {
        this.setState({
            isCommentModalOpen: !this.state.isCommentModalOpen
        })
    }

    submitComment(values) {
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);

    }



    render() {
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-comment fa-lg"></span> Submit Comment</Button>
                <Modal isOpen={this.state.isCommentModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Submit</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.submitComment(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={10}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                        placeholder="Rating"
                                        className="form-control"
                                    >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={2}>Your Name</Label>
                                <Col md={10}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={10}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        placeholder="Comment"
                                        className="form-control"
                                        rows="6"
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

}

const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComment comments={props.comments}
                            addComment={props.addComment}
                            dishId={props.dish.id}
                        />


                    </div>
                </div>
            </div>
        );
    }
}


export default DishDetail