import React from 'react'

import BuildControl from './BuildControlStyles'

const buildControl = props => (
  <BuildControl>
    <div className="Label">{props.label}</div>
    <button className="Less" onClick={props.removed} disabled={props.disabled}>
      Less
    </button>
    <button className="More" onClick={props.added}>
      More
    </button>
  </BuildControl>
)

export default buildControl
