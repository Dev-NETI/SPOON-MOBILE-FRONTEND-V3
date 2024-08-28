'use client';

import { useResource } from '../resource';

const useSavedRecipe = () => {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const route = '/api/saved-recipe';

    return {
        ...useResource({ baseURL, route }),
    };
};

export { useSavedRecipe };
