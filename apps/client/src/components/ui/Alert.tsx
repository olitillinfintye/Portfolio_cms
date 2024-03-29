'use client';

import { TransitionContext } from '@client/context/TransitionContext';
import { SetStateAction, useContext, useEffect } from 'react';

export type AlertMessage = {
  type: 'success' | 'warning' | 'error';
  title: string;
  summery: string;
};
type AlertPropsType = {
  message: AlertMessage;
  setMessages: (value: SetStateAction<AlertMessage[]>) => void;
  timeout?: number;
};

function Alert({ message, setMessages, timeout }: AlertPropsType) {
  const success = message.type === 'success';
  const warning = message.type === 'warning';
  const error = message.type === 'error';

  useEffect(() => {
    let timeoutFn: any;
    if (message) {
      timeoutFn = setTimeout(() => {
        handleRemove();
      }, timeout ?? 5000);
    }
    return () => {
      if (timeoutFn) {
        clearTimeout(timeoutFn);
      }
    };
  }, [message]);
  function handleRemove() {
    setMessages((prevMessages) =>
      prevMessages.filter(
        (msg) =>
          !(
            msg.title === message.title &&
            msg.summery === message.summery &&
            msg.type === message.type
          )
      )
    );
  }
  if (success) {
    return (
      <div
        className={
          'bg-success-100 border border-success-400 text-success-700 px-4 py-3 rounded relative'
        }
        role="alert"
      >
        <strong className="font-bold">{message.title}</strong>
        <span className="">{message.summery}</span>
        <span
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
          onClick={handleRemove}
        >
          <svg
            className="fill-current h-6 w-6 text-success-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  }
  if (warning) {
    return (
      <div
        className={
          'bg-warning-100 border border-warning-400 text-warning-700 px-4 py-3 rounded relative'
        }
        role="alert"
      >
        <strong className="font-bold">{message.title}</strong>
        <span className="">{message.summery}</span>
        <span
          className="absolute top-0 bottom-0 right-0 px-4 py-3"
          onClick={handleRemove}
        >
          <svg
            className="fill-current h-6 w-6 text-warning-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  }
  if (error) {
    return (
      <>
        <div
          className={
            'bg-error-100 border border-error-400 text-error-700 px-4 py-3 rounded relative'
          }
          role="alert"
        >
          <strong className="font-bold">{message.title}</strong>
          <span className="">{message.summery}</span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={handleRemove}
          >
            <svg
              className="fill-current h-6 w-6 text-error-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      </>
    );
  }
  return <></>;
}

export default Alert;
