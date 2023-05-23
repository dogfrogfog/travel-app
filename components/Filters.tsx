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
        <div>
            <div className='flex mt-36'>
                <Input
                    className='p-8 text-xl rounded-[80px] bg-white border-[1px] border-black w-[300px] mr-12'
                    type="text"
                    placeholder='City'
                    onChange={(event) => setFilters(v => ({ ...v, title: event.target.value || undefined }))}
                />
                <DatePickerWithRange
                    // @ts-ignore
                    buttonClassName="bg-white border-[1px] border-black p-8 text-xl hover:bg-slate-50 rounded-[80px] w-[350px]"
                    className='rounded-[80px] bg-white text-xl bg-slate-300 w-[350px] mr-12'
                    onSelect={(tripDateRange) => setFilters(v => ({ ...v, tripDateRange }) as any)}
                />
                {/* <Input
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
                /> */}
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