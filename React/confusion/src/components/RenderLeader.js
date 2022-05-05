import React from "react";
import { Media } from "reactstrap";

function RenderLeader(props) {
    const leader = props.leader;

    return (
        <Media tag="li" className="p-4">
            <Media left upper>
                <Media object src={leader.image} alt={leader.name}/>
            </Media>
            <Media body className="ml-5">
                    <Media heading>{leader.name}</Media>
                    <p>{leader.designation}</p>
                    <p class="mb-0">{leader.description}</p>
            </Media>
        </Media>
    );
}

export default RenderLeader;