import React, { Component } from 'react';

import requreAuth from './requreAuth';

class Feature extends Component {
  render () {
    return (
      <div>
        This is a Feature component
      </div>
    )
  }
}

export default requreAuth(Feature);
