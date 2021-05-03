import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import Library from '@screens/Library';
import BookDetails from '@screens/BookDetails';

const StackNavigator = createStackNavigator();

function AppNavigator() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name={Routes.LIBRARY} component={Library} options={{ title: 'Library' }} />
      <StackNavigator.Screen name={Routes.BOOK_DETAILS} component={BookDetails} options={{ title: 'Book Details' }} />
    </StackNavigator.Navigator>
  );
}

export default AppNavigator;
