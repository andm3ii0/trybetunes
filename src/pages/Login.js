import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Form from './Form';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: undefined,
      logado: false,
    };
  }

  onHadleSubmit = async () => {
    const { name } = this.props;
    console.log(name);
    this.setState({ loading: true });
    await createUser({ name });
    this.setState({ loading: false, logado: true });
  }

  render() {
    const { loading, logado } = this.state;
    return (
      <div data-testid="page-login">
        { loading ? <Loading /> : <Form
          propsValue={ this.props }
          funcsubmit={ this.onHadleSubmit }
        />}
        {logado && <Redirect to="/search" />}
      </div>
    );
  }
}

Login.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Login;
