'use client';

import Spinner from '@client/components/ui/Spinner';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
  useTransition,
} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const TransitionContext = createContext({
  toast,
  isPending: false,
  isMutating: false,
  handleServerMutation: (callBack: () => Promise<void>) => {},
  startTransition: (e: any) => {},
});

const ConfirmationProvider = ({ children }: { children: any }) => {
  const [isPending, setPending] = useState(false);
  const [isMutating, setMutating] = useState(false);
  const [isTransitionStarted, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    startTransition(console.log);
  }, [pathname, searchParams]);

  useLayoutEffect(() => {
    setMutating(isPending || isTransitionStarted);
  }, [isPending, isTransitionStarted]);

  async function handleServerMutation(callBack: () => Promise<void>) {
    setPending(true);
    await callBack();
    startTransition(router.refresh);
    setPending(false);
  }

  const values = {
    toast,
    isPending,
    startTransition,
    handleServerMutation,
    isMutating,
  };
  return (
    <TransitionContext.Provider value={values}>
      <ToastContainer />
      {isMutating && (
        <div className="fixed top-2 right-2 z-[1000]">
          <Spinner className="text-primary-500" />
        </div>
      )}
      {children}
    </TransitionContext.Provider>
  );
};

export default ConfirmationProvider;
