import React from 'react';
import PropTypes from 'prop-types';

import { Container, Spinner } from './styles';

export default function SpinnerComponent({ show = true }) {
  return (
    show && (
      <Container>
        <Spinner />
      </Container>
    )
  );
}

SpinnerComponent.propTypes = {
  show: PropTypes.bool,
};
