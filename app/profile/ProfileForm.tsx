"use client"
import { useState } from 'react'
import { DatePicker } from '@/components/ui/datePicker'
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ProfileForm({ dateOfBirth: defaultDateOfBirth }: { dateOfBirth?: Date }) {
    const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(defaultDateOfBirth)

    const onSubmit = async () => {
        try {
            await fetch('/api/profile/updateProfile', {
                method: 'PUT',
                body: JSON.stringify({ dateOfBirth })
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Label className='text-md font-medium block mb-2'>Date of birth</Label>
            <DatePicker value={dateOfBirth} onSelect={setDateOfBirth} />
            <Button className='block mt-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' onClick={onSubmit}>
                Save
            </Button>
        </>
    );
}