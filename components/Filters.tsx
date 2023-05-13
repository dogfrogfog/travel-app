"use client"
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/ui/datePickerWithRange"
import { Checkbox } from "@/components/ui/checkbox"

export default function Filters() {
    return (
        <div className="border-2 border-green-300 mb-12 p-2 rounded">
            <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Country, City" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="NY">NY</SelectItem>
                    <SelectItem value="Chicago">Chicago</SelectItem>
                    <SelectItem value="Boston">Boston</SelectItem>
                </SelectContent>
            </Select>
            <DatePickerWithRange onSelect={(v) => console.log(v)} />
            <Checkbox /> cant figure out
            <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Age range" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">18-24</SelectItem>
                    <SelectItem value="2">24-30</SelectItem>
                    <SelectItem value="3">30-40</SelectItem>
                    <SelectItem value="4">40-50+</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Sex" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Male</SelectItem>
                    <SelectItem value="2">Female</SelectItem>
                    <SelectItem value="3">Custom</SelectItem>
                    <SelectItem value="4">Prefer not to say</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}