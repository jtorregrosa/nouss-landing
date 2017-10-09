import React, { PureComponent } from 'react';

class MainContent extends PureComponent {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

MainContent.propTypes = {
  children: React.PropTypes.node,
};

MainContent.defaultProps = {
  children: null,
};


export default MainContent;
