'use client';

import { useResource } from '../resource';

const useMealType = () => {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const route = '/api/meal-type';

    return {
        ...useResource({ baseURL, route }),
    };
};

export { useMealType };
