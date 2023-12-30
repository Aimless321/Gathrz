import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'eu.aimless.LetsGoX',
  appName: 'LetsGoX',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
