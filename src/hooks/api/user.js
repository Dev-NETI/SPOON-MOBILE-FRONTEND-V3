'use client';

import { useResource } from '../resource';

const useUserHook = () => {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const route = '/api/user';

    return {
        ...useResource({ baseURL, route }),
    };
};

export { useUserHook };
