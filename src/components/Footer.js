import React, {Fragment} from "react";

class Footer extends React.Component{
    render() {
        return(
            <Fragment>
                <footer className="bg-dark mt-5">
                  <div className="p-2">
                      <p className="text-white text-center mt-0 mb-1">Created & Developed By</p>
                      <p className="text-white text-center mt-0 mb-1"> Siddardha Nidiginti</p>
                      <p className="text-white text-center mt-0 mb-1">Email : nidigintisiddardha111@gmail.com</p>
                  </div>
                </footer>
            </Fragment>
        )
    }
}
export default Footer;