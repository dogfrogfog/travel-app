'use client'
import { Form, Field } from 'react-final-form';
import { DatePicker } from '@/components/ui/datePicker'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function ProfileForm({ dateOfBirth }: { dateOfBirth?: Date }) {
    return (
        <Form
            initialValues={{ dateOfBirth }}
            onSubmit={async (values: any) => {
                try {
                    await fetch('/api/profile/updateProfile', {
                        method: 'PUT',
                        body: JSON.stringify(values)
                    })
                } catch (error) {
                    console.log(error)
                }
            }}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <Label className='text-md font-medium block mb-2'>Date of birth</Label>
                    <Field name="dateOfBirth">
                        {({ input }) => (
                            <DatePicker
                                {...input}
                                onSelect={(date?: Date) => input.onChange(date)}
                            />
                        )}
                    </Field>
                    <Button className='block mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                        Save
                    </Button>
                </form>
            )}
        />
    );
}