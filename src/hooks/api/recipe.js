'use client';

import { useResource } from '../resource';

const useRecipe = () => {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const route = '/api/recipe';

    return {
        ...useResource({ baseURL, route }),
    };
};

export { useRecipe };
