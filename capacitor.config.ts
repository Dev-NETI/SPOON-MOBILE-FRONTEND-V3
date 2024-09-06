import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'ph.spoon.beta-spoon',
    appName: 'Spoon PH',
    webDir: 'beta/src',
    server: {
        url: 'https://beta-spoon.spoon.ph',
        cleartext: true,
    },
};

export default config;
