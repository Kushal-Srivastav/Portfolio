'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { SkillsGrid } from "./SkillsGrid";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '@/data/confetti.json';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";
import { getImageUrl } from "@/utils/imageUtils";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img: string;
  imgClassName: string;
  titleClassName: string;
  spareImg: string;
}) => {

 const [copied, setCopied] = useState(false)

 const handleCopy = () =>{
  navigator.clipboard.writeText('kushalsrijan17@gmail.com')
    setCopied(true); // <-- this triggers the animation

     setTimeout(() => {
    setCopied(false); // stops it after 2 seconds
  }, 2000);
 }

  return (
    <div
      className={cn(
        "row-span-1 flex flex-col justify-between space-y-4 relative overflow-hidden rounded-3xl  transition duration-200 hover:shadow-xl border border-white/[0.1]  dark:shadow-none",
        className,
      )}
      style={{
        background: "linear-gradient(90deg, rgba(4, 7, 29, 1) 0%, rgba(12, 14, 35, 1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <div className="relative w-full h-full">
              <Image
                src={getImageUrl(img)}
                alt={typeof title === 'string' ? title : 'Project image'}
                fill
                className={cn(imgClassName, "object-cover object-center")}
                unoptimized={img.endsWith('.svg')}
              />
            </div>
          )}
        </div>
        
        <div className={`absolute right-0 -bottom-5 ${id
          ===5 && 'w-full opacity-80'}`}>
         {spareImg && (
          <div className="relative w-full h-full">
            <Image
              src={getImageUrl(spareImg)}
              alt=""
              fill
              className="object-cover object-center"
              unoptimized={spareImg.endsWith('.svg')}
            />
          </div>
         )}

        </div>

        {id===6 && (
          <BackgroundGradientAnimation>
           { /* <div className="absolute z-50 flex items-center
            justify-center text-white font-bold "/> */}
          </BackgroundGradientAnimation>
        )}

        <div className={cn(
          titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
        )}>

          <div className="font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base z-10">
            {description}
          </div>

          <div className={`font-sans font-bold text-lg  lg:text-3xl max-w-96 z-10`}>
          {title}
        </div>
        

        {id === 2 && <GlobeDemo />}

        {id === 3 && <SkillsGrid />}

      { id === 6 && (
  <div className="mt-5">
    <div className="relative inline-block w-fit">
      {copied && (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
          />
        </div>
      )}

      <MagicButton 
        title={copied ? 'Email copied' : 'Copy my email.'}
        icon={<IoCopyOutline />}
        position="left"
        otherClasses="bg-[#161a31]"
        handleClick={handleCopy}
      />
    </div>
  </div>
)}
      </div>
    </div>
    </div>
  );
};
