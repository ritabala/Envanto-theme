import React,{Component} from 'react';
import Content from '../../components/Content';



class Dashboard extends Component {
    render(){
        return(
            // <h2>Welcome Aboard!!</h2>
            <Content breadcrumb={this.props.match.url}>
                <h3 className="font-bold">This is page content</h3>
                <div className="error-desc">
                    You can create here any grid layout you want. And any variation layout you imagine:) Check out
                    main dashboard and other site. It use many different layout.
                    <br /><a href="index.html" className="btn btn-primary m-t">Dashboard</a>
                </div>
            </Content>    
        )
    }
}

export default Dashboard;