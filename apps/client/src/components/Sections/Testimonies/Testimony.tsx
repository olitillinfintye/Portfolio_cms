import { server_host } from '@client/config/host.config';
import { ImageType, StrapiContent, TestimonyType } from '@client/types';
import Image from 'next/image';

export default function Testimony({
  testimony,
}: {
  testimony: TestimonyType & {
    avatar?:
      | {
          data: StrapiContent<ImageType>;
        }
      | undefined;
  };
}) {

  return (
    <div className="rounded-2xl border border-light-darkest dark:border-dark-lightest p-4 flex h-fit">
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="bg-light dark:bg-dark-dark aspect-square rounded-full w-36 p-2">
            {testimony.avatar?.data && (
              <Image
                src={`${server_host}${testimony.avatar.data.attributes.url}`}
                alt="Avatar"
                width={1000}
                height={400}
                className="w-full h-full aspect-square rounded-full"
              />
            )}
          </div>
          <div className="flex flex-nowrap justify-center items-center gap-1 text-sm font-bold text-center">
            <span>{testimony.name}</span>|
            <span className="text-secondary">{testimony.occupation}</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 h-full">
          <div className="text-sm mt-4 inline-block line-clamp-4">
            {testimony.message}
          </div>
        </div>
      </div>
    </div>
  );
}
