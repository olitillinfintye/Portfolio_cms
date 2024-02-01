'use client';

import Spinner from '@client/components/ui/Spinner';
import { TransitionContext } from '@client/context/TransitionContext';
import handleCreateSubscribe from '@client/libs/client/subscribe/handleCreateSubscribe';
import { FormEvent, useContext, useRef } from 'react';

function SubscribeForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleServerMutation, isMutating, toast } =
    useContext(TransitionContext);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleServerMutation(async () => {
      const response = await handleCreateSubscribe({
        email: inputRef.current?.value,
      });

      if (response?.error) {
        if (response.error?.name === 'ValidationError') {
          toast.info('You Are Already Subscribed');
        } else {
          toast.error(response.error.message??"");
        }
        return;
      }

      toast.success('You Have Subscribed successfully');
      if (inputRef.current) {
        inputRef.current.value = '';
      }
    });
  }
  return (
    <form
      onSubmit={onSubmit}
      className="relative w-full flex rounded-r-md rounded-l-md "
    >
      <input
        ref={inputRef}
        type="email"
        placeholder="example@domain"
        className="input h-16 px-4 rounded-r-md rounded-l-md "
      />
      <button className="absolute right-2 inset-y-2 btn-primary py-1 px-6 flex gap-2 items-center rounded-r-md rounded-l-md">
        {isMutating && <Spinner />}
        <span>Subscribe</span>
      </button>
    </form>
  );
}

export default SubscribeForm;
