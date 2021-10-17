import React from 'react';
import { Spinner } from "react-bootstrap";
import { observer } from "mobx-react"

const Loading = () => {
    return (
        <center className="position-absolute top-50 start-50 translate-middle">
            <Spinner animation="border" variant="primary" />
        </center>
    )
}

export default observer(Loading)
