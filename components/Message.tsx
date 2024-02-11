import { Avatar, AvatarFallback, AvatarImage } from "../@/components/ui/avatar";
import logo from "../public/Vector 1.svg";
import Image from "next/image";

export default function Message (){
    return(
        <>
        <div className="w-[420px] h-auto  flex space-x-2">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                   <div className="flex w-full space-x-3 justify-center items-center">
                   <div className="divMessage bg-zinc-800 p-2 flex flex-col gap-2">
                        <div id="name">
                            <h2
                              className="text-[13px] font-semibold text-violet-800"
                            >Lorrys Code</h2>
                        </div>
                        <div id="message" className="w-auto  flex text-[14px] text-white">
                            <p>Ola tudo bem por aqui como esta indo o trabalho?</p>
                              <p className="text-zinc-600 font-semibold mt-5">10:06</p>
                        </div>
                    </div>
                    <div className="w-[40px] cursor-pointer h-[35px] bg-white rounded-full flex justify-center items-center">
                        <Image 
                          src={logo}
                          alt="..."
                        />
                   </div>
                  </div>
                  

                  </div>
        </>
    )
}