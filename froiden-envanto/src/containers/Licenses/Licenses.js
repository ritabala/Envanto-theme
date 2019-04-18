import React ,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import Spinner from '../../components/Spinner/Spinner';
import Aux from '../../hoc/Auxiliary';
import {NavLink} from 'react-router-dom';
// import classes from './Licenses.css';
// import withErrHandler from '../../hoc/withErrHandler/withErrHandler';
import axios from '../../axios';
import Modal from '../../components/Modal';

class Licenses extends Component{

 viewLicenceHandler =(event,id)=>{
    event.preventDefault();
    this.props.history.push(this.props.match.url+'/view/'+id);

}

editLicenseHandler =(event,id)=>{
    event.preventDefault();
    this.props.history.push(this.props.match.url+'/edit/'+id);
}

deleteConfirmHandler =(event,id)=>{
    event.preventDefault();
    this.props.showModal(id);
}

onCancelModalHandler =(event)=>{
    this.props.onCancelModal()
}

onDeleteModalHandler=(event)=>{
    console.log(this.props.token)
    this.props.deleteLicense(this.props.token,this.props.id)
    this.props.onCancelModal()
    
}

componentDidMount=()=>{
     this.props.fetchAllLicenses(this.props.token)
 }   

 render(){
    let license = '';
    let tdata='';

    if(this.props.loading){
            license=<Spinner/>
        }
    else{
         license = this.props.licenses.map((item,index)=>{
            // console.log(item.id)
            return(
                <tr key={item+index}>
                    <td>{item.item_name}</td>
                    <td>{item.domain}</td>
                    <td>{item.buyer_username}</td>
                    <td>{item.purchase_code}</td>
                    <td>
                        <button className={[classes.Button,classes.View].join(' ')} 
                                onClick={(event)=>this.viewLicenceHandler(event,item.id)}>View</button>
                        <button className={[classes.Button,classes.Edit].join(' ')} 
                                onClick={(event)=>this.editLicenseHandler(event,item.id)}>Edit</button>
                        <button className={[classes.Button,classes.Delete].join(' ')}
                                onClick={(event)=>this.deleteConfirmHandler(event,item.id)}>Delete</button>
                    </td>
                </tr>
            )
        })
     }
     if (!this.props.err) {
         tdata = (
             <div class="wrapper wrapper-content animated fadeInRight">
                 <div class="row">
                     <div class="col-lg-12">
                         <div class="ibox ">
                             <div class="ibox-title">
                                 <h5>Basic Data Tables example with responsive plugin</h5>
                                 <div class="ibox-tools">
                                     <a class="collapse-link">
                                         <i class="fa fa-chevron-up"></i>
                                     </a>
                                     <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                         <i class="fa fa-wrench"></i>
                                     </a>
                                     <ul class="dropdown-menu dropdown-user">
                                         <li><a href="#" class="dropdown-item">Config option 1</a>
                                         </li>
                                         <li><a href="#" class="dropdown-item">Config option 2</a>
                                         </li>
                                     </ul>
                                     <a class="close-link">
                                         <i class="fa fa-times"></i>
                                     </a>
                                 </div>
                             </div>
                             <div class="ibox-content">

                                 <div class="table-responsive">
                                     <table class="table table-striped table-bordered table-hover dataTables-example" >
                                         <thead>
                                             <tr>

                                                 <th>Item Name</th>
                                                 <th>Domain</th>
                                                 <th>Buyer Username</th>
                                                 <th>Purchase Code</th>
                                                 <th>Actions</th>
                                             </tr>
                                         </thead>
                                         <tbody>
                                             {license}
                                         </tbody>
                                         <tfoot>
                                             <tr>
                                                 <th>Domain</th>
                                                 <th>Buyer Username</th>
                                                 <th>Purchase Code</th>
                                                 <th>Actions</th>
                                             </tr>
                                         </tfoot>
                                     </table>
                                 </div>

                             </div>
                         </div>
                     </div>
                 </div>
                 <Modal show={this.props.show} clicked={this.toggleModal}>
                     <div>
                         <h4>Are you sure? </h4>
                         <p className={classes.Text}>Do you really want to delete this records? This process cannot be undone.</p>
                         <button className={[classes.Button, classes.Cancel].join(' ')}
                             onClick={(event) => { this.onCancelModalHandler(event) }}
                         >Cancel</button>
                         <button className={[classes.Button, classes.Delete].join(' ')}
                             onClick={(event) => { this.onDeleteModalHandler(event) }}
                         >Delete</button>
                     </div>
                 </Modal>
             </div>
         )
     }


     return (
        <Aux>
            {this.props.loading?license : tdata}
            {/* <Content breadcrumb={this.props.match.url}>
                <h3 className="font-bold">This is page content</h3>
                <div className="error-desc">
                    You can create here any grid layout you want. And any variation layout you imagine:) Check out
                    main dashboard and other site. It use many different layout.
                    <br /><a href="index.html" className="btn btn-primary m-t">Dashboard</a>
                </div>
            </Content>    */}
        </Aux>)

        
 }
}

const mapStateToProps = (state)=>{
    return({
        token:state.auth.idToken,
        licenses:state.license.licenses,
        loading:state.license.loading,
        err:state.license.error,
        show:state.license.show,
        id:state.license.id
    })
}

const mapDispatchToProps = dispatch=>{
    return({
        fetchAllLicenses:(token)=>dispatch(actionCreators.fetchAllLicenses(token)),
        showModal:(id)=>dispatch(actionCreators.showModal(id)),
        onCancelModal:()=>dispatch(actionCreators.cancelModal()),
        deleteLicense:(token,id)=>dispatch(actionCreators.deleteLicense(token,id))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Licenses);