import React from 'react'
const { PropTypes } = React

const icons = {
  facebook: 'M608 192h160v-192h-160c-123.514 0-224 100.486-224 224v96h-128v192h128v512h192v-512h160l32-192h-192v-96c0-17.346 14.654-32 32-32z',
  heart: 'M755.188 64c-107.63 0-200.258 87.554-243.164 179-42.938-91.444-135.578-179-243.216-179-148.382 0-268.808 120.44-268.808 268.832 0 301.846 304.5 380.994 512.022 679.418 196.154-296.576 511.978-387.206 511.978-679.418 0-148.392-120.43-268.832-268.812-268.832z'
}

const styles = {
  blue: {
    fill: "#3b5998"
  },
  red: {
    fill: "#e7040f"
  }
}

const Icon = props => (
  <svg width={props.width} height={props.height} viewBox="0 0 1024 1024">
    <path style={styles[props.styles]} d={icons[props.icon]}></path>
  </svg>
)

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default Icon
