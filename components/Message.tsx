import { useCallback, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../@/components/ui/avatar";
import logo from "../public/Vector 1.svg";
import symbols2 from "../public/Vector 1(1).svg";
import Image from "next/image";

interface messageProps {
    urlImg: string
    name: string,
    message: string
}
export default function Message ({urlImg, name, message}: messageProps){
    const [stateReagi, setStateReagi] = useState(false);
    const [coutReagi, setCountReagi] = useState(0)

    const addRaegi = useCallback(()=> {
       setStateReagi(true)
       setCountReagi(prevValor => prevValor + 1)
    }, [])
    return(
        <>
        <div className="w-auto h-auto bg-rose-500 flex">
                    <Avatar>
                      <AvatarImage
                        src={urlImg}
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                   <div className="flex w-full space-x-3 justify-center items-center">
                   <div className="divMessage bg-zinc-800 p-2 flex flex-col gap-2">
                        <div id="name">
                            <h2
                              className="text-[13px] font-semibold text-violet-800"
                            >{name}</h2>
                        </div>
                        <div id="message" className="w-auto  flex text-[14px] text-white">
                            <p>{message}</p>
                              <p className="text-zinc-600 font-semibold mt-5">10:06</p>
                        </div>
                    </div>
                   <div className="flex space-x-1 justify-center items-center">
                   <div 
                    onClick={addRaegi}
                    className={`w-[40px] cursor-pointer h-[35px]  shadow-md shadow-violet-500/50 
                     rounded-full flex justify-center items-center ${!stateReagi ? "bg-white" : "bg-transparent shadow-violet-500/0"}`}>
                        <Image 
                          src={!stateReagi ? logo : symbols2 
                            
                            }
                          alt="..."
                          width={!stateReagi ? 12 : 20 }
                        />
                        
                   </div>
                    <h1 className={`text-white font-semibold text-[14px]  ${!stateReagi ? "hidden" : "flex"}`}>{coutReagi}</h1>
                   </div>
                  </div>
                   

                  </div>
        </>
    )
}