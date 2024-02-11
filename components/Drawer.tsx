import { Minus, Plus } from "lucide-react";
import * as React from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import logo from "../public/Design sem nome(2).png";
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
import { Avatar, AvatarFallback, AvatarImage } from "../@/components/ui/avatar";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function DrawerDemo() {
  const [goal, setGoal] = useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>

      <DrawerContent className="w-full overflow-hidden mt-[200px] relative">
        <div className="w-full h-screen bg-black relative top-[-6px] py-4">
          <div className="mx-auto w-full max-w-sm  flex flex-col justify-center items-center">
            <div className="w-28 h-2 rounded-full bg-zinc-800"></div>
            <DrawerHeader className="flex space-x-3">
              <DrawerTitle className="titleLogo text-[20px] font-semibold">
                Chat BuildUi
              </DrawerTitle>
            </DrawerHeader>
            <div className=" pb-0 relative h-[19rem] w-[100%] space-y-3">
              <div className="w-full bg-violet-800 h-60 verflow-auto">
                <div className="w-15 h-5 hidden inset-0 z-50 absolute top-0 o left-0 bg-black/80  "></div>
                <div className="w-15 h-full bg-rose-500 flex flex-col space-y-3">
                  <div className="w-[300px] h-auto  flex space-x-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="divMessage bg-zinc-800 p-2 flex flex-col gap-2">
                        <div id="name">
                            <h2
                              className="text-[13px] font-semibold text-violet-800"
                            >Lorrys Code</h2>
                        </div>
                        <div id="message" className="w-auto  flex text-[14px]">
                            <p>Ola tudo bem por aqui como esta indo o trabalho?</p>
                              <p className="text-zinc-600 font-semibold mt-5">10:06</p>
                        </div>
                    </div>
                  </div>
                  <div className="w-[300px] h-auto  flex space-x-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="divMessage bg-zinc-800 p-2 flex flex-col gap-2">
                        <div id="name">
                            <h2
                              className="text-[13px] font-semibold text-violet-800"
                            >Lorrys Code</h2>
                        </div>
                        <div id="message" className="w-auto  flex text-[14px]">
                            <p>Ola tudo bem por aqui como esta indo o trabalho?</p>
                              <p className="text-zinc-600 font-semibold mt-5">10:06</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full bg-slate-900 px-2 rounded-full justify-between items-center">
                <input
                  type="text"
                  placeholder="Digite a sms..."
                  className="w-72 h-10 text-[15px] text-slate-200  bg-transparent outline-none"
                />
                <div className="w-8 h-8 bg-violet-800 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
