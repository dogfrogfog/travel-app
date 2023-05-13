"use client";
import { useUser } from "@clerk/nextjs";
import { SignedIn } from '@clerk/nextjs'
import { Form, Field } from 'react-final-form'
import { Post } from '@/db'

const createPost = async (post: Post) => {
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
    const { user } = useUser();

    return (
        <SignedIn>
            <p className="text-2xl bg-yellow-200">Create new ports</p>
            <CustomForm
                onSubmit={async (values: any) => {
                  try {
                    await createPost({
                      ...values,
                      userId: user?.id,
                    })

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
  <>
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine }) => (
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
  </>
)
