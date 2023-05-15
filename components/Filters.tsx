"use client"
import { Form, Field } from 'react-final-form'
import { DateRange } from "react-day-picker"
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button"
import { DatePickerWithRange } from "@/components/ui/datePickerWithRange"
import { Dispatch, SetStateAction } from 'react'

type FiltersType = { title?:  string, tripDateRange?: DateRange,  ageFrom?: number, ageTo?: number } | undefined

type FiltersProps = {
    filters?: FiltersType,
    setFilters: Dispatch<SetStateAction<FiltersType>>,
}

export default function Filters({ filters, setFilters }: FiltersProps) {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500mb-12 p-4 pt-24 rounded">
            <div className='flex justify-between'>
                <div className='flex'>
                    <Input
                        className='rounded bg-slate-300 w-[200px] mr-2'
                        type="text"
                        placeholder='City'
                        onChange={(event) => setFilters(v => ({ ...v, title: event.target.value || undefined }))}
                    />
                    <DatePickerWithRange
                        className='rounded bg-slate-300 w-[300px] mr-2'
                        onSelect={(tripDateRange) => setFilters(v => ({ ...v, tripDateRange }) as any)}
                    />
                    <Input
                        className='rounded bg-slate-300 w-[100px] mr-2'
                        type="number"
                        placeholder='Age from'
                        min={0}
                        max={99}
                        onChange={(event) => setFilters(v => ({ ...v, ageFrom: parseInt(event.target.value) || undefined }))}
                        />
                    <Input
                        className='rounded bg-slate-300 w-[100px] mr-2'
                        type="number"
                        placeholder='Age to'
                        min={0}
                        max={99}
                        value={filters?.ageTo}
                        onChange={(event) => setFilters(v => ({ ...v, ageTo: parseInt(event.target.value) || undefined }))}
                    />
                </div>
            </div>
        </div>
    )
}

function FiltersForm({ onSubmit }: { onSubmit: any }) {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, values }) => (
                <form onSubmit={handleSubmit} className='flex justify-between'>
                    <div className='flex'>
                        <Field name="title">
                            {({ input }) => (
                                <Input {...input} className='rounded bg-slate-300 color-red w-[200px] mr-4' type="text" placeholder='City' />
                            )}
                        </Field>
                        <Field name="dateRange">
                            {({ meta, input }) => (
                                <>
                                    <DatePickerWithRange onSelect={(dateRange) => input.onChange(dateRange)} />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </>
                            )}
                        </Field>
                    </div>
                    <Button disabled={!values?.title && !values?.dateRange}>
                        Find trip
                    </Button>
                </form>
            )}
        />
    )
}