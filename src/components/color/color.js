import React, { Component } from 'react';

class Color extends Component {
  state = {
    colors: [
      'white',
      'gray-light',
      'gray',
      'gray-dark',
      'black',
      'pink-pale',
      'pink-light',
      'pink',
      'pink-dark',
      'purple-pale',
      'purple',
      'purple-deep',
      'indigo',
      'red-pale',
      'red-light',
      'red',
      'red-dark',
      'orange-pale',
      'orange-light',
      'orange',
      'orange-deep',
      'peach',
      'yellow-pale',
      'yellow',
      'amber',
      'khaki',
      'green-pale',
      'green-light',
      'green',
      'green-gray',
      'green-dark',
      'lime',
      'olive',
      'teal',
      'teal-dark',
      'aqua',
      'cyan',
      'blue',
      'blue-pale',
      'blue-light',
      'blue-dark',
      'blue-gray',
      'brown',
      'maroon',
    ],
  };

  render() {
    const { colors } = this.state;
    const baseClassName = 'colors';

    const renderColor = colors.map((color) => {
      const blockClassName = `${baseClassName}--block`;
      const colorClassName = `${blockClassName}---${color}`;

      return (
        <div
          key={color}
          className={`${baseClassName}--wrapper ${baseClassName}--wrapper---${color}`}
        >
          <p className={`${baseClassName}--title`}>{`@${color}`}</p>
          <div className={`${blockClassName} ${colorClassName}`} />
        </div>
      );
    });

    return renderColor;
  }
}

export default Color;
