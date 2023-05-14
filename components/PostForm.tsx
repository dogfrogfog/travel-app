"use client";
import { SignedIn } from '@clerk/nextjs'
import { DateRange } from "react-day-picker"
import { Form, Field } from 'react-final-form'
import { Post } from '@/db'
import { DatePickerWithRange } from '@/components/ui/datePickerWithRange'

const createPost = async (post: Pick<Post, 'content' | 'title' | 'destination' | 'startDate' |'endDate'>) => {
  try {
    await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify(post)
    });
  } catch (error) {
    console.log(error)
  }
}

type PostFormProps = {
    mutate: () => Promise<void>
}


export default function PostForm({ mutate }: PostFormProps) {
    return (
        <SignedIn>
            <p className="text-2xl bg-yellow-200">Create new ports</p>
            <CustomForm
                onSubmit={async (values: Pick<Post, 'title' | 'content' | 'destination'> & { dateRange: DateRange | undefined }) => {
                    const formattedDate = {
                      title: values.title.trim(),
                      content: values.content.trim(),
                      destination: values.destination.trim(),
                      startDate: values.dateRange?.from || null,
                      endDate: values.dateRange?.to || null,
                    }
                      try {
                        await createPost(formattedDate)
                        await mutate()
                      } catch (error) {
                        console.error(error)
                      }
                }}
            />
        </SignedIn>
    )
}


const required = (value: string) => (value ? undefined : 'Required')

type CustomFormProps = {
    onSubmit: (v: any) => Promise<void>
}

const CustomForm = ({ onSubmit }: CustomFormProps) => (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine,  }) => (
        <form onSubmit={handleSubmit}>
          <Field name="title" validate={required}>
            {({ input, meta }) => (
              <div>
                <input {...input} className="border-4 border-slate-600 text-xl" type="text" placeholder="Title" />
                <br />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="content" validate={required}>
            {({ input, meta }) => (
              <div>
                <textarea {...input} className="border-4 border-slate-600 text-xl" placeholder="Content" />
                <br />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="destination" validate={required}>
            {({ meta, input }) => (
              <>
                <input {...input} className="border-4 border-slate-600 text-xl" type="text" placeholder="Destination" />
                {/* // todo: add real city select */}
                {/* <select {...input} className="border-4 border-slate-600 text-xl" placeholder="destination">
                  <option value="ny">ny</option>
                  <option value="chicago">chicago</option>
                  <option value="connecticut">connecticut</option>
                  <option value="boston">boston</option>
                </select> */}
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </>
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
          <div className="flex">
            <button className="p-4 bg-green-200" type="submit" disabled={submitting}>
              Submit
            </button>
            <button
            className="p-4 bg-pink-200"
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  )
