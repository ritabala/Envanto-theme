import React from 'react';
import Aux from '../hoc/Auxiliary';
const content = props => {
    return (
        <Aux>
            <div className="row wrapper border-bottom white-bg page-heading">
                <div className="col-sm-4">
                    <h2>This is main title</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">This is</a>
                        </li>
                        <li className="breadcrumb-item active">
                            <strong>{props.breadcrumb}</strong>
                        </li>
                    </ol>
                </div>
                <div className="col-sm-8">
                    <div className="title-action">
                        <a href="/" className="btn btn-primary">This is action area</a>
                    </div>
                </div>
            </div>

            <div className="wrapper wrapper-content">
                <div className="middle-box text-center animated fadeInRightBig">
                    {props.children} 
                </div>
            </div>
        </Aux>
    )
    }
    export default content;