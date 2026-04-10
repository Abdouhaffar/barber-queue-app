constants_js = """import { DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2C3E50',
    accent: '#E67E22',
    background: '#F5F6FA',
    surface: '#FFFFFF',
    text: '#2C3E50',
    disabled: '#95A5A6',
    placeholder: '#BDC3C7',
    success: '#27AE60',
    error: '#E74C3C',
    warning: '#F39C12',
    info: '#3498DB',
    chairAvailable: '#27AE60',
    chairOccupied: '#E74C3C',
    chairReserved: '#F39C12',
  },
  fonts: {
    ...DefaultTheme.fonts,
    regular: { fontFamily: 'Cairo-Regular' },
    medium: { fontFamily: 'Cairo-Medium' },
    bold: { fontFamily: 'Cairo-Bold' },
  },
};

export const USER_TYPES = {
  CUSTOMER: 'customer',
  BARBER: 'barber',
};

export const BOOKING_STATUS = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
  PAID: 'paid',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled',
};

export const SERVICES = [
  { id: '1', name: 'قص شعر', price: 30, duration: 30, icon: 'content-cut' },
  { id: '2', name: 'حلاقة ذقن', price: 20, duration: 20, icon: 'face-man' },
  { id: '3', name: 'قص شعر + ذقن', price: 45, duration: 45, icon: 'star' },
  { id: '4', name: 'غسل شعر', price: 15, duration: 15, icon: 'water' },
  { id: '5', name: 'تصفيف شعر', price: 25, duration: 25, icon: 'hair-dryer' },
  { id: '6', name: 'صبغة شعر', price: 80, duration: 60, icon: 'palette' },
];

export const NOTIFICATION_TYPES = {
  BOOKING_ACCEPTED: 'booking_accepted',
  BOOKING_REJECTED: 'booking_rejected',
  BOOKING_REMINDER: 'booking_reminder',
  TIME_PROPOSED: 'time_proposed',
  PAYMENT_CONFIRMED: 'payment_confirmed',
};

export const DEPOSIT_AMOUNT = 10; // مبلغ العربون بالدولار
export const REMINDER_MINUTES = 30; // وقت التذكير قبل الموعد
"""

print("✅ constants.js")
print(constants_js)
