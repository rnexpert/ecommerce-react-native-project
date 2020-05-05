import React from 'react';
import {Text, View} from 'react-native';
import AddressCard from '../components/AddressCard';
import ActionButton from '../../../common/components/ActionButton';
import styles from '../styles/AddressSceneStyles';
import {useSelector} from 'react-redux';
import {addressSelectors} from '../../../core/address/stores';
import {useTranslation} from 'react-i18next';

const AddressScene = ({navigation}: {navigation: any}) => {
  const {t} = useTranslation();
  const {addressMap} = useSelector(addressSelectors);

  const editAction = () => navigation.navigate('Edit Address');
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{t('My Addresses')}</Text>
      </View>
      {Object.values(addressMap).map((address) => (
        <AddressCard {...address} key={address.title} editAction={editAction} />
      ))}
      <ActionButton title={t('Add New Address')} action={() => {}} />
    </View>
  );
};

export default AddressScene;
