import React, {Fragment} from "react";

class GithubProfileDetails extends React.Component{

    render() {
        let {followers , public_repos , following , public_gists , name , email , location , company , blog , created_at , html_url } = this.props.profile;
        return (
            <Fragment>
                <div className="card profile-card animated fadeInRight">
                    <div className="card-header">
                        <span className="badge badge-primary mx-2 profile-badge rounded-pill"> {followers} Followers</span>
                        <span className="badge badge-success mx-2 profile-badge rounded-pill"> {public_repos} Repos</span>
                        <span className="badge badge-warning mx-2 profile-badge rounded-pill"> {public_gists} Gists</span>
                        <span className="badge badge-danger mx-2  profile-badge rounded-pill"> {following} Following</span>
                    </div>
                    <div className="card-body">
                          <ul className="list-group">
                              <li className="list-group-item">
                                  User Name : <span className="p-text">{name}</span>
                              </li>
                              <li className="list-group-item">
                                  Location : <span className="p-text">{location}</span>
                              </li>
                              <li className="list-group-item">
                                  Email : <span className="p-text">{email}</span>
                              </li>
                              <li className="list-group-item">
                                  Company : <span className="p-text">{company}</span>
                              </li>
                              <li className="list-group-item">
                                  Blog : <span className="p-text">{blog}</span>
                              </li>
                              <li className="list-group-item">
                                  Member Since : <span className="p-text">{created_at}</span>
                              </li>
                              <li className="list-group-item">
                                  Profile URL : <span className="p-text">{html_url}</span>
                              </li>

                          </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}
export default GithubProfileDetails;