import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { propsValue, funcsubmit } = this.props;
    const { name, buttonDisabled, funcOnChange } = propsValue;
    return (
      <form>
        <label htmlFor="name">
          <input
            name="name"
            id="name"
            value={ name }
            type="text"
            data-testid="login-name-input"
            onChange={ funcOnChange }
          />
        </label>
        <button
          disabled={ buttonDisabled }
          type="submit"
          data-testid="login-submit-button"
          onClick={ funcsubmit }
        >
          Entrar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  propsValue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    buttonDisabled: PropTypes.bool.isRequired,
    funcOnChange: PropTypes.func.isRequired,
  }).isRequired,
  funcsubmit: PropTypes.func.isRequired,

};

export default Form;
