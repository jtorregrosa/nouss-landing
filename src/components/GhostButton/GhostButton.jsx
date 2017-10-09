import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  padding-left: 30px;
  padding-right: 30px;
  border: 2px ${props => props.theme.primary.base} solid;
  border-radius: 10px;
`;

class GhostButton extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button>{this.props.label}</Button>
      </div>
    );
  }
}

export default GhostButton;
