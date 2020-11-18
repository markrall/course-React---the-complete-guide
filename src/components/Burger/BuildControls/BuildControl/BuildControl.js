import React from 'react'

import BuildControl from './BuildControlStyles'

const buildControl = props => (
  <BuildControl>
    <div className="Label">{props.label}</div>
    <button className="Less">Less</button>
    <button className="More">More</button>
  </BuildControl>
)

export default buildControl
