import React, { PureComponent } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  height: 100px;
  width:100%;
`;
const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 75rem;
  width: 90%;
`;

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <HeaderContainer>
          {this.props.children}
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {
  children: React.PropTypes.node,
};

Header.defaultProps = {
  children: null,
};


export default Header;
