import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { AuthProvider } from './src/context/AuthContext';
import { BookingProvider } from './src/context/BookingContext';
import RootNavigator from './src/navigation/RootNavigator';
import { theme } from './src/utils/constants';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AuthProvider>
        <BookingProvider>
          <NavigationContainer>
            <StatusBar style="auto" />
            <RootNavigator />
          </NavigationContainer>
        </BookingProvider>
      </AuthProvider>
    </PaperProvider>
  );
}
