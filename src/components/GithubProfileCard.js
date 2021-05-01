import React, {Fragment} from "react";

class GithubProfileCard extends React.Component{

    render() {
        let {name , avatar_url , bio , html_url} = this.props.profile;
        return (
            <Fragment>
                  <div className="card img-card animated ">
                      <img src={avatar_url} alt="" className="img-fluid"/>
                      <div className="card-body img-body text-left">
                          <h5 className="card-title img-title">{name}</h5>
                          <p className="img-para text-left">{bio}</p>
                          <a href={html_url}  className="btn btn-sm btn-success rounded-pill m-auto">Profile</a>
                      </div>
                  </div>
            </Fragment>
        );
    }
}
export default GithubProfileCard;