import React, {Fragment} from "react";
import GithubProfile from "./GithubProfile";
import Axios from 'axios';
import {clientId, clientSecret} from "./GithubCredintails";
import GithubRepos from "./GithubRepos";



class GithubAPI extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            profile : null ,
            repos : null
        }
    }
    // two way data binding with username
    updateInput = (e) => {
        this.setState({
            ...this.state,
            username : e.target.value
        })
    };
    searchUser = (e) =>{
        e.preventDefault();
        this.searchProfile();
        this.searchRepos();

    };
    // Search a Profile
    searchProfile = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}?clientId=${clientId}&clientSecret=${clientSecret}`)
            .then((response)=>{
                  this.setState({
                      profile : response.data
                  })
            })
            .catch((err)=>{
                console.error(err);
            })
    }
    // Search a Repos
    searchRepos = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}/repos?clientId=${clientId}&clientSecret=${clientSecret}`)
            .then((response)=>{
                this.setState({
                    repos : response.data
                })
            })
            .catch((err)=>{
                console.error(err);
            })
    }

    render() {
        return(
            <Fragment>
                {/*<pre>{JSON.stringify(this.state)}</pre>*/}
                <div className="container mt-4">
                    <div className="row">
                        <div className="col">
                            <div className="card search-card">
                                <div className="card-header search-header">
                                        <h3 className="search-text">Github User Search</h3>
                                </div>
                                <div className="card-body">
                                   <form className="form-inline" onSubmit={this.searchUser}>
                                       <div className="form-group">
                                           <input value={this.state.username} onChange={this.updateInput} type="text" className="form-control" placeholder="User Name"/>
                                       </div>
                                       <div>
                                           <input type="submit" value="search" className="btn  btn-sm rounded-pill mb-4 ml-3"/>
                                       </div>
                                   </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.profile ?
                                    <GithubProfile profile={this.state.profile}/> : null
                            }
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                                this.state.repos ?
                                    <GithubRepos repos={this.state.repos}/> : null
                            }
                        </div>
                    </div>
                </div>


            </Fragment>
        )
    }
}
export default GithubAPI;