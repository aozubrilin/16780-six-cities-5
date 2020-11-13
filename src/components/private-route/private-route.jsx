import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../const";


const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (authorizationStatus === AuthorizationStatus.AUTH) ?
    <Route
      path={path}
      exact={exact}
      render={render}
    /> : <Redirect to={`/login`} />;
};

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

const mapStateToProps = ({user}) => ({
  authorizationStatus: user.authorizationStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
