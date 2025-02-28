import React from 'react';

function ErrorBadge({ message }) {
    return (
        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
            {message}
        </span>
    );
}

export default ErrorBadge;
