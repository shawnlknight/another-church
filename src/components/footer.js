import React from 'react'

import Icon from './icon'

export default () => (
  <footer className="cf w-100 pv3 f6 ph3 ph4-ns tr">
    <a href="https://www.facebook.com/housechurchincharleston/?ref=bookmarks" target="_blank" title="Facebook">
      <span className="visuallyhidden">Facebook</span>
      <Icon icon="facebook" styles="blue" width="30" height="30" />
    </a>
    <h4 className="mid-gray">Made with <Icon icon="heart" styles="red" width="14" height="14" /> in Charleston, SC</h4>
  </footer>
)
