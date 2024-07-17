import React from 'react'
import InputGroup from '@/components/InputGroup'
import Button from '@/components/Button'

function Calorie() {
    return (
        <div className="gap-2 p-5 flex flex-col ">
            <div
                className="basis-full border-0 rounded-lg bg-gray-50 shadow-lg
                           grid grid-cols-2 gap-4 p-5">
                <div className="col-span-2 flex justify-end ">
                    <Button type="button">History</Button>
                </div>
                <InputGroup
                    title="Age"
                    initialValue="25"
                    className="col-span-2"
                />
                <InputGroup
                    title="Gender"
                    initialValue="Male"
                    className="col-span-2"
                />
                <InputGroup
                    title="Height(ft)"
                    initialValue="5'5"
                    className="col-span-1"
                />
                <InputGroup
                    title="Height(cm)"
                    initialValue="178"
                    className="col-span-1"
                />
                <InputGroup
                    title="Weight(lbs)"
                    initialValue="116"
                    className="col-span-1"
                />
                <InputGroup
                    title="Weight(lg)"
                    initialValue="78"
                    className="col-span-1"
                />
                <InputGroup
                    title="Activity Level"
                    initialValue="Sedentary"
                    className="col-span-2"
                />
                <div className="col-span-2 ">
                    <Button
                        type="button"
                        className="w-full rounded-full flex items-center justify-center">
                        Compute
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Calorie
