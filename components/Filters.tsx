"use client"
import { Form, Field } from 'react-final-form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { DatePickerWithRange } from "@/components/ui/datePickerWithRange"

export default function Filters() {
    return (
        <div className="bg-slate-600 mb-12 p-2 rounded">
            <FiltersForm
                onSubmit={(values: any) => {
                    console.log(values);

                }}
            />
            {/* <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Country, City" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="NY">NY</SelectItem>
                    <SelectItem value="Chicago">Chicago</SelectItem>
                    <SelectItem value="Boston">Boston</SelectItem>
                </SelectContent>
            </Select> */}
            {/* <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Age range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">18-24</SelectItem>
                    <SelectItem value="2">24-30</SelectItem>
                    <SelectItem value="3">30-40</SelectItem>
                    <SelectItem value="4">40-50+</SelectItem>
                </SelectContent>
            </Select> */}
            {/* <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Sex" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Male</SelectItem>
                    <SelectItem value="2">Female</SelectItem>
                    <SelectItem value="3">Custom</SelectItem>
                    <SelectItem value="4">Prefer not to say</SelectItem>
                </SelectContent>
            </Select> */}
            {/* </div> */}
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