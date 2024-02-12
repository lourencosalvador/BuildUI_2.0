import { useCallback, useState } from "react";
import { AvatarFallback, AvatarImage } from "../@/components/ui/avatar";
import logo from "../public/Vector 1.svg";
import symbols2 from "../public/Vector 1(1).svg";
import foto from "../public/Ellipse 11(4).svg";
import foto2 from "../public/Ellipse 11(5).svg";

import Image from "next/image";
import { useOthersMapped, useSelf } from "../liveblocks.config";
import { animationProps, avatarProps } from "./LiveAvatars";
import { motion } from "framer-motion";
import { Avatar } from "./Avatar";

interface messageProps {
  urlImg: string;
  name: string;
  message: string;
}
export default function Message({ urlImg, name, message }: messageProps) {
  const [stateReagi, setStateReagi] = useState(false);
  const [coutReagi, setCountReagi] = useState(0);
 
  const currentUser = useSelf();
  const others = useOthersMapped((other) => other.info);

  const addRaegi = useCallback(() => {
    setStateReagi(true);
    setCountReagi((prevValor) => prevValor + 1);
  }, []);

  return (
    <>
  <div className="w-auto h-auto flex space-x-2 ml-[20px]">
  {currentUser ? (
    <motion.div key="you" {...animationProps}>
    <Avatar
      {...avatarProps}
      src={foto}
      name={"Lorrys"}
      
    />
  </motion.div>
  ) : currentUser ? (
    others.map(([key, info]) => (
      <motion.div key={key} {...animationProps}>
        <Avatar {...avatarProps} src={info.color} name={info.name} />
      </motion.div>
    ))
  ) : null}

  
        <div className="flex w-auto  space-x-3 justify-center items-center">
          <div className="divMessage bg-zinc-800 p-2 flex flex-col gap-1">
            <div id="name">
              <h2 className="text-[13px] font-semibold text-violet-800">
                {name}
              </h2>
            </div>
            <div id="message" className="w-auto  flex text-[14px] text-white">
              <p>{message}</p>
              <p className="text-zinc-600 font-semibold mt-5">10:06</p>
            </div>
          </div>
          <div className="flex space-x-1 justify-center items-center">
            <div
              onClick={addRaegi}
              className={`w-[40px] cursor-pointer h-[35px]  shadow-md 
                     rounded-full flex justify-center items-center ${
                       !stateReagi
                         ? "bg-white"
                         : "bg-transparent shadow-violet-500/0"
                     }`}
            >
              <Image
                src={!stateReagi ? logo : symbols2}
                alt="..."
                width={!stateReagi ? 12 : 20}
              />
            </div>
            <h1
              className={`text-white font-semibold text-[14px]  ${
                !stateReagi ? "hidden" : "flex"
              }`}
            >
              {coutReagi}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
