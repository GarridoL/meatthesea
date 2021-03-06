import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import styles from './Style';
import {BasicStyles} from 'common';
import Style from 'modules/accounts/Style';
import {Color} from 'common';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
class OrderHistoryScreen extends Component {
  render() {
    let {title, icon, onPress} = this.props;
    return (
      <TouchableHighlight
        underlayColor={Color.white}
        onPress={onPress && onPress}>
        <View
          style={{
            borderBottomColor: Color.gray,
            backgroundColor: Color.accentGray,
            borderBottomWidth: 1,
            paddingVertical: 15,
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <FontAwesomeIcon
            icon={icon}
            color={Color.primary}
            size={BasicStyles.standardFontSize}
          />
          <Text
            style={{
              fontSize: BasicStyles.standardFontSize,
              color: Color.black,
              marginLeft: 10,
            }}>
            {title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default OrderHistoryScreen;
