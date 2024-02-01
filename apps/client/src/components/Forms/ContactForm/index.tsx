'use client';

import Alert, { AlertMessage } from '@client/components/ui/Alert';
import { TransitionContext } from '@client/context/TransitionContext';
import handleCreateContact from '@client/libs/client/contact/handleCreateContact';
import { ErrorMessage, Formik } from 'formik';
import { useContext, useState } from 'react';
import * as yup from 'yup';
import { allPhoneNumberRegex } from '../../../utils/phoneNumberRegex';
import Spinner from '@client/components/ui/Spinner';

function ContactForm() {
  const { handleServerMutation, isMutating, toast } =
    useContext(TransitionContext);
  const [messages, setMessages] = useState<AlertMessage[]>([]);
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };
  let yupSchema = yup.object({
    name: yup.string().required('This field is required'),
    email: yup.string().email().required('This field is required'),
    phone: yup
      .string()
      .required('This field is required')
      .matches(
        allPhoneNumberRegex,
        "Phone number must be entered in the format: '+199999999'. Up to 15 digits allowed."
      ),
    subject: yup.string().required('This field is required'),
    message: yup.string().required('This field is required'),
  });

  async function onSubmit(
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) {
    handleServerMutation(async () => {
      const response = await handleCreateContact(values);

      if (response?.error) {
        setMessages([
          {
            type: 'error',
            summery: `${response.error?.message}`,
            title: 'Error ',
          },
        ]);
        return;
      }
      toast.success('Message is sent successfully');
      resetForm();
    });
  }

  return (
    <>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={yupSchema}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            onSubmit={handleSubmit}
            className=" w-full grid grid-cols-2 gap-4"
          >
            {messages.map((message, ind) => (
              <div key={ind} className="col-span-2">
                <Alert message={message} setMessages={setMessages} />
              </div>
            ))}
            <div className="col-span-2 flex flex-col gap-1 w-full">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="name..."
                className={`input  ${
                  !!touched.name && !!errors.name
                    ? 'bg-red-300/50 border border-red-500'
                    : ''
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 dark:text-red-300"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1 w-full">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="email..."
                className={`input ${
                  !!touched.email && !!errors.email
                    ? 'bg-red-300/50 border border-red-500'
                    : ''
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 dark:text-red-300"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-1 w-full">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="phone..."
                className={`input ${
                  !!touched.phone && !!errors.phone
                    ? 'bg-red-300/50 border border-red-500'
                    : ''
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 dark:text-red-300"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-1 w-full">
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="subject..."
                className={`input ${
                  !!touched.subject && !!errors.subject
                    ? 'bg-red-300/50 border border-red-500'
                    : ''
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
              />
              <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 dark:text-red-300"
              />
            </div>
            <div className="col-span-2 flex flex-col gap-1 w-full">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="message.."
                className={`input h-auto ${
                  !!touched.message && !!errors.message
                    ? 'bg-red-300/50 border border-red-500'
                    : ''
                }`}
                rows={6}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message ?? ''}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-red-500 dark:text-red-300"
              />
            </div>
            <div className="col-span-2 flex gap-1 w-full">
              <button
                type="submit"
                className="btn-primary w-full py-4 px-4  flex gap-2 items-center rounded-md"
                disabled={isSubmitting}
              >
                {isMutating && <Spinner />}
                <span>Send Message</span>
              </button>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

export default ContactForm;
