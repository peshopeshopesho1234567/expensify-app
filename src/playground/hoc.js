import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: { props.info }</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please do not share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
        { !props.isAuthenticated ? (
          <p>Please log in to view the info.</p>) : (
          <WrappedComponent {...props}/> )
        }
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(AdminInfo);

ReactDOM.render(<AuthInfo isAuthenticated={true} isAdmin={true} info='These are the details.'/>, document.getElementById('app'));