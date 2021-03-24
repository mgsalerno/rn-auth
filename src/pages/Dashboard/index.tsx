import React from 'react';
import { View, Button, Text } from 'react-native';
import { useAuth } from '../../contexts/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={{ flex:1, justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center' }}>{user?.name}</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;