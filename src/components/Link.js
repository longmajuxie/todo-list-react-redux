import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
/**
 * Link is a link with a callback.
 *onClick() is a callback to invoke when the link is clicked.
 */
class Link extends PureComponent {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    const {
      active,
      children,
      onClick
    } = this.props;

    return (
      <a
        href=""
        onClick={e => {
          e.preventDefault()
          onClick()
        }}
        style={{
          marginLeft: '4px',
        }}
      >
        {children}
      </a>
    )
  }
}

export default Link;