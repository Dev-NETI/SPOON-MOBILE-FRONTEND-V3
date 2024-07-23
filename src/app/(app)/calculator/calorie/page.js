'use client'
import React, { useRef, useState } from 'react'
import InputGroup from '@/components/InputGroup'
import Button from '@/components/Button'
import * as Yup from 'yup'
import Modal from '@/components/Modal'
import CalorieIntakeItem from '@/components/app/calculator/CalorieIntakeItem'

function Calorie() {
    const [isEdit, setIsEdit] = useState(false)
    const [error, setError] = useState({})
    const modalRef = useRef()
    const rules = Yup.object().shape({
        age: Yup.number()
            .required('Age is required!')
            .min(18, 'Age must be at least 18!'),
        gender: Yup.string().required('Gender is required!'),
        heightStandard: Yup.string().required('Height is required!'),
        heightMetric: Yup.string().required('Height is required!'),
        weightStandard: Yup.string().required('Weight is required!'),
        weightMetric: Yup.string().required('Weight is required!'),
        activityLevel: Yup.string().required('Activity Level is required!'),
    })

    const handleSubmit = async event => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const object = Object.fromEntries(formData.entries())

        try {
            await rules.validate(object, { abortEarly: false })

            modalRef.current.open()
            setIsEdit(false)
        } catch (error) {
            const errors = error.inner.reduce((acc, curr) => {
                acc[curr.path] = curr.message
                return acc
            }, {})
            setError(errors)
        }
    }

    return (
        <div className="gap-2 p-5 flex flex-col ">
            <form
                onSubmit={handleSubmit}
                className="basis-full border-0 rounded-lg bg-gray-50 shadow-lg
                           grid grid-cols-2 gap-4 p-5">
                <div className="col-span-2 flex justify-end ">
                    <Button
                        type="button"
                        onClick={() => {
                            setIsEdit(!isEdit)
                            setError({})
                        }}>
                        {isEdit ? 'Cancel' : 'Edit'}
                    </Button>
                </div>
                <InputGroup
                    editMode={isEdit}
                    name="age"
                    type="text"
                    title="Age"
                    initialValue="25"
                    className="col-span-2"
                    error={error.age}
                    errorMessage={error.age}
                    autoFocus
                />
                <InputGroup
                    editMode={isEdit}
                    name="gender"
                    type="text"
                    title="Gender"
                    initialValue="Male"
                    className="col-span-2"
                    error={error.gender}
                    errorMessage={error.gender}
                />
                <InputGroup
                    editMode={isEdit}
                    name="heightStandard"
                    type="text"
                    title="Height(ft)"
                    initialValue="5'5"
                    className="col-span-1"
                    error={error.heightStandard}
                    errorMessage={error.heightStandard}
                />
                <InputGroup
                    editMode={isEdit}
                    name="heightMetric"
                    type="text"
                    title="Height(cm)"
                    initialValue="178"
                    className="col-span-1"
                    error={error.heightMetric}
                    errorMessage={error.heightMetric}
                />
                <InputGroup
                    editMode={isEdit}
                    name="weightStandard"
                    type="text"
                    title="Weight(lbs)"
                    initialValue="116"
                    className="col-span-1"
                    error={error.weightStandard}
                    errorMessage={error.weightStandard}
                />
                <InputGroup
                    editMode={isEdit}
                    name="weightMetric"
                    type="text"
                    title="Weight(kg)"
                    initialValue="78"
                    className="col-span-1"
                    error={error.weightMetric}
                    errorMessage={error.weightMetric}
                />
                <InputGroup
                    editMode={isEdit}
                    name="activityLevel"
                    type="text"
                    title="Activity Level"
                    initialValue="Sedentary"
                    className="col-span-2"
                    error={error.activityLevel}
                    errorMessage={error.activityLevel}
                />
                <div className="col-span-2 ">
                    {isEdit ? (
                        <Button
                            type="submit"
                            className="w-full rounded-full flex items-center justify-center">
                            Update
                        </Button>
                    ) : (
                        <Button
                            type="button"
                            onClick={() => modalRef.current.open()}
                            className="w-full rounded-full flex items-center justify-center">
                            Show Current Energy Intake
                        </Button>
                    )}
                </div>
            </form>
            <Modal ref={modalRef} title="Calorie Intake Recommendations">
                <div className="flex flex-col p-2">
                    <CalorieIntakeItem
                        description="Your maintenance calories is: 1700 Calories/Day"
                        className="bg-green-900"
                    />
                    <CalorieIntakeItem
                        description="Mild weight loss calories is: 1700 Calories/Day"
                        className="bg-yellow-600"
                    />
                    <CalorieIntakeItem
                        description="Weight loss calories is: 1700 Calories/Day"
                        className="bg-green-700"
                    />
                    <CalorieIntakeItem
                        description="Aggressive weight loss calories is: 1700 Calories/Day"
                        className="bg-red-800"
                    />
                    <CalorieIntakeItem
                        description="Mild weight gain calories is: 1700 Calories/Day"
                        className="bg-yellow-600"
                    />
                    <CalorieIntakeItem
                        description="Weight gain calories is: 1700 Calories/Day"
                        className="bg-green-700"
                    />
                    <CalorieIntakeItem
                        description="Aggresive weight gain calories is: 1700 Calories/Day"
                        className="bg-red-800"
                    />
                </div>
            </Modal>
        </div>
    )
}

export default Calorie
