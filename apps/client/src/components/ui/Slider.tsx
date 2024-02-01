'use client';
import classNames from 'classnames';
import { ReactNode, useEffect, useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BsCircle, BsCircleFill } from 'react-icons/bs';
type PropsType = {
  children: ReactNode[];
  className?: string;
  gapBetween?: string;
  showItem?: number;
  navigator?: boolean;
};
function Slider({
  children,
  className,
  showItem,
  navigator,
  gapBetween,
}: PropsType) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      showNext();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  function showNext() {
    setIndex((currentIndex) => {
      if (currentIndex >= children.length - (showItem ?? 1)) {
        return 0;
      }
      return currentIndex + 1;
    });
  }

  function showPrev() {
    setIndex((currentIndex) => {
      if (currentIndex === 0) {
        return children.length - (showItem ?? 1);
      }
      return currentIndex - 1;
    });
  }

  function getTranslate() {
    if (index > children.length - (showItem ?? 1)) {
      return `${-100 * 0}%`;
    } else {
      return `${-100 * index}%`;
    }
  }

  return (
    <div className="relative z-0 h-full w-full md:px-8">
      <div className="relative w-full h-full flex overflow-hidden">
        {children.map((child, ind) => (
          <div
            key={ind}
            style={{
              paddingLeft: `${gapBetween ?? '0px'}`,
              paddingRight: `${gapBetween ?? '0px'}`,
              flexShrink: 0,
              flexGrow: 0,
              translate: getTranslate(),
              transition: 'translate 300ms ease-in-out',
            }}
            className={classNames(className ?? 'basis-full', 'w-full')}
          >
            {child}
          </div>
        ))}
      </div>
      {children.length > (showItem ?? 0) && (
        <button
          onClick={showPrev}
          className="btn-icon absolute block top-1/2 -translate-y-1/2 left-0 cursor-pointer"
        >
          <AiOutlineLeft
            color="white"
            size={30}
            className=" hover:scale-110  bg-light-darkest/50 dark:bg-dark-lightest/50   p-1 rounded-full"
          />
        </button>
      )}
      {children.length > (showItem ?? 0) && (
        <button
          onClick={showNext}
          className="btn-icon absolute block top-1/2 -translate-y-1/2 right-0 cursor-pointer"
        >
          <AiOutlineRight
            color="white"
            size={30}
            className=" hover:scale-110 bg-light-darkest/50 dark:bg-dark-lightest/50 p-1 rounded-full"
          />
        </button>
      )}
      {(navigator ?? true) && (
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-1 bottom border-light-500 mt-4">
          {children
            .slice(0, children.length - ((showItem ?? 1) - 1))
            .map((_, ind) => (
              <button
                key={ind}
                onClick={() => setIndex(ind)}
                className="rounded-full hover:scale-110"
              >
                {index === ind ? (
                  <BsCircleFill
                    size={10}
                    className="hover:scale-110 text-primary"
                  />
                ) : (
                  <BsCircle
                    size={10}
                    className="hover:scale-110 text-primary"
                  />
                )}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

export default Slider;
