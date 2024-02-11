
import * as React from "react";
import symbols from "../public/Symbol.svg";
import Image from "next/image";
import { Button } from "../@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "../@/components/ui/drawer";
import { useState } from "react";
import Message from "./Message";
import LiveAvatars from "./LiveAvatars";




export function DrawerDemo() {
  const [goal, setGoal] = useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-auto h-auto border-none">💆🏽‍♂️🎵</Button>
      </DrawerTrigger>
     
      <DrawerContent className="w-full overflow-hidden mt-[200px] relative">
        <div className="w-full h-screen bg-black relative top-[-6px] py-4">
        <div className="absolute top-2 left-[71rem]">
        <LiveAvatars />
        </div>
          <div className="mx-auto w-full max-w-sm  flex flex-col justify-center items-center">
            <div className="w-28 h-2 rounded-full bg-zinc-800"></div>
            <DrawerHeader className="flex space-x-3">
              <DrawerTitle className="titleLogo text-[20px] font-semibold">
                Chat BuildUi
              </DrawerTitle>
            </DrawerHeader>
            <div className=" pb-0 relative h-[19rem] w-[110%] space-y-5">
              <div className="w-full h-60 ">
                <div className="w-15 h-5 hidden inset-0 z-50 absolute top-0 o left-0 bg-black/80  "></div>
                <div className="w-full h-full  overflow-auto flex flex-col space-y-3">
                  <Message />
                  <Message />
                 
                </div>
              </div>
              <div className="flex w-full bg-slate-900 px-2 rounded-full justify-between items-center">
                <input
                  type="text"
                  placeholder="Digite a sms..."
                  className="w-72 h-10 text-[15px] text-slate-200  bg-transparent outline-none"
                />
                <div className="w-8 h-8 bg-violet-800 rounded-full flex justify-center items-center">
                <Image 
                          src={symbols}
                          alt="..."
                          width={12}
                        />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
