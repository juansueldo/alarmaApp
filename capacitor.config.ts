import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.alarmaapp',
  appName: 'alarmaApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  "plugins": {
    "SplashScreen": {
    "launchShowDuration": 3000,
    "launchAutoHide": true,
    "launchFadeOutDuration": 3000,
    "backgroundColor": "#BF4342",
    "androidSplashResourceName": "splash",
    "androidScaleType": "CENTER_CROP",
    "showSpinner": true,
    "androidSpinnerStyle": "large",
    "iosSpinnerStyle": "small",
    "spinnerColor": "#76d3bd",
    "splashFullScreen": true,
    "splashImmersive": true,
    "layoutName": "launch_screen",
    "useDialog": true
    }
  
  }
};

export default config;
