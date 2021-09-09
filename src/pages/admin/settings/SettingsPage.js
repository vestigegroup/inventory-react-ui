import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from "react-router-dom";
import "../../../style/admin.css";
import HeaderNavBar from "../../../components/navigation/HeaderNavbar";
import AnchorTag from "../../../components/Anchortag";
import RoleList from "../../../components/admin/settings/RoleList";
import RoleForm from "../../../components/admin/settings/RoleForm";
import UserList from "../../../components/admin/settings/UserList";
import UserForm from "../../../components/admin/settings/UserForm";
import PasswordResetForm from "../../../components/admin/settings/PasswordResetForm";


class AdminSettingsPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "admin";
        
        let {path, url} = this.props.match;
    }


    render(){
        return (
            <div className="w-100">
            <Switch>
                <Route exact path={`${this.props.match.path}/role-list`} component={RoleList}/>
                <Route exact path={`${this.props.match.path}/role-create`} component={RoleForm}/>
                <Route exact path={`${this.props.match.path}/user-list`} component={UserList}/>
                <Route exact path={`${this.props.match.path}/user-create`} component={UserForm}/>
                <Route exact path={`${this.props.match.path}/password-reset`} component={PasswordResetForm}/>
            </Switch>
            
        </div>
        ) 
    }
}

export default AdminSettingsPage;