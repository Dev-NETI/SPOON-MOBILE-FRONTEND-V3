import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'ph.spoon.beta',
    appName: 'Spoon PH',
    webDir: 'beta-mobile/src',
    server: {
        url: 'https://beta-spoon.spoon.ph',
        cleartext: true,
    },
};

export default config;
