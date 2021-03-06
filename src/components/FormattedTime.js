/*!
 * React Native Globalize
 *
 * Copyright 2015-2016 Josh Swan
 * Released under the MIT license
 * https://github.com/joshswan/react-native-globalize/blob/master/LICENSE
 */
import React, { Component, PropTypes } from 'react';
import { Text } from 'react-native';
import { globalizeShape, dateFormatPropTypes } from '../types';

export default class FormattedTime extends Component {
  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    const formatTime = this.context.globalize.getDateFormatter(this.props);
    const formattedTime = (this.props.value instanceof Date) ? formatTime(this.props.value) : '';

    return (
      <Text
        ref={(component) => { this._root = component; }}
        style={this.props.style}
      >
        {formattedTime}
      </Text>
    );
  }
}

FormattedTime.propTypes = {
  ...dateFormatPropTypes,
  value: PropTypes.instanceOf(Date).isRequired,
  style: Text.propTypes.style,
};

FormattedTime.contextTypes = {
  globalize: globalizeShape,
};
