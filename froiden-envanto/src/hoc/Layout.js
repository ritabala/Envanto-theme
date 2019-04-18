import React,{Component} from 'react';
import Footer1 from '../components/Footer1';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

class Layout extends Component {
    render(){
        // console.log('in layout')
        return(
            <div id="wrapper">
                <Sidebar />
                <div id="page-wrapper" className="gray-bg">
                    <Header />
                        {this.props.children}
                    <Footer1 />
                </div>
            </div>
        )
    }
}

export default Layout;