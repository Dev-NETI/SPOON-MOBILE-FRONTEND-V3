import React from 'react';
import CardListItemComponent from './CardListItemComponent';

function BloodPressureHistoryListItem({ data }) {
    return (
        <CardListItemComponent
            title={data.bpCategory}
            name={`${data.systolic} / ${data.diastolic}`}
            created_at={data.created_at}
        />
    );
}

export default BloodPressureHistoryListItem;
