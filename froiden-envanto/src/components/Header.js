import React from 'react';

const header = props => {
    return (
        <div className="row border-bottom">
        <nav className="navbar navbar-static-top " role="navigation" style={{marginBottom: "0"}}>
        <div className="navbar-header">
            <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="/"><i className="fa fa-bars"></i> </a>
            <form role="search" className="navbar-form-custom" action="search_results.html">
                <div className="form-group">
                    <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search" /> 
                </div>
            </form>
        </div>
            <ul className="nav navbar-top-links navbar-right">
                <li>
                    <span className="m-r-sm text-muted welcome-message">Welcome to INSPINIA+ Admin Theme.</span>
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle count-info" data-toggle="dropdown" href="/">
                        <i className="fa fa-envelope"></i>  <span className="label label-warning">16</span>
                    </a>
                    <ul className="dropdown-menu dropdown-messages">
                        <li>
                            <div className="dropdown-messages-box">
                                <a className="dropdown-item float-left" href="profile.html">
                                    <img alt="images1" className="rounded-circle" src="img/a7.jpg"/>
                                </a>
                                <div className="media-body">
                                    <small className="float-right">46h ago</small>
                                    <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>. <br/>
                                    <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                            <div className="dropdown-messages-box">
                                <a className="dropdown-item float-left" href="profile.html">
                                    <img alt="images1" className="rounded-circle" src="img/a4.jpg"/>
                                </a>
                                <div className="media-body ">
                                    <small className="float-right text-navy">5h ago</small>
                                    <strong>Chris Johnatan Overtunk</strong> started following <strong>Monica Smith</strong>. <br/>
                                    <small className="text-muted">Yesterday 1:21 pm - 11.06.2014</small>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                            <div className="dropdown-messages-box">
                                <a className="dropdown-item float-left" href="profile.html">
                                    <img alt="images1" className="rounded-circle" src="img/profile.jpg"/>
                                </a>
                                <div className="media-body ">
                                    <small className="float-right">23h ago</small>
                                    <strong>Monica Smith</strong> love <strong>Kim Smith</strong>. <br />
                                    <small className="text-muted">2 days ago at 2:30 am - 11.06.2014</small>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                            <div className="text-center link-block">
                                <a href="mailbox.html" className="dropdown-item">
                                    <i className="fa fa-envelope"></i> <strong>Read All Messages</strong>
                                </a>
                            </div>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a className="dropdown-toggle count-info" data-toggle="dropdown" href="/">
                        <i className="fa fa-bell"></i>  <span className="label label-primary">8</span>
                    </a>
                    <ul className="dropdown-menu dropdown-alerts">
                        <li>
                            <a href="mailbox.html" className="dropdown-item">
                                <div>
                                    <i className="fa fa-envelope fa-fw"></i> You have 16 messages
                                    <span className="float-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                            <a href="profile.html" className="dropdown-item">
                                <div>
                                    <i className="fa fa-twitter fa-fw"></i> 3 New Followers
                                    <span className="float-right text-muted small">12 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                            <a href="grid_options.html" className="dropdown-item">
                                <div>
                                    <i className="fa fa-upload fa-fw"></i> Server Rebooted
                                    <span className="float-right text-muted small">4 minutes ago</span>
                                </div>
                            </a>
                        </li>
                        <li className="dropdown-divider"></li>
                        <li>
                            <div className="text-center link-block">
                                <a href="notifications.html" className="dropdown-item">
                                    <strong>See All Alerts</strong>
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                </li>


                <li>
                    <a href="/logout">
                        <i className="fa fa-sign-out"></i> Log out
                    </a>
                </li>
            </ul>

        </nav>
        </div>
    )
    }
    export default header;