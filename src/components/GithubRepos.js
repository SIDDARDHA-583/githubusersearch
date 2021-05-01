import React, {Fragment} from "react";


class GithubRepos extends React.Component{
    render() {
        return(
            <Fragment>
               <div className="card repo-card animated zoomIn">
                   <div className="card-header repo-header">
                       <h2 className="repo-text">Git Repose</h2>
                   </div>

                   <div className="card-body">
                       <ul className="list-group">
                           {
                               this.props.repos.map((repo)=>{
                                   return(
                                       <li className="list-group-item repo-item">
                                           <a href={repo.html_url}>{repo.name}</a>
                                           <span className="badge badge-success mx-4 rounded-pill">{repo.stargazers_count}Stars</span>
                                           <span className="badge badge-warning  rounded-pill">{repo.watchers_count}watches</span>

                                       </li>
                                   )
                               })
                           }
                       </ul>
                   </div>

               </div>
            </Fragment>
        )
    }

}
export default GithubRepos;