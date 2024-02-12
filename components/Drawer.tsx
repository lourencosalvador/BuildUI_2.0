import * as React from "react";
import symbols from "../public/Symbol.svg";
import { Socket, io } from "socket.io-client";
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
import { useCallback, useEffect, useState } from "react";
import Message from "./Message";
import iconMessage from "../public/Vector.svg";
import LiveAvatars from "./LiveAvatars";


interface Message {
    author: string;
    text: string;
    id: string;
  }

let speechRecognition: SpeechRecognition | null = null

export function DrawerDemo() {
  const [goal, setGoal] = useState(350);
  const [socket, setSocket] = useState<Socket | null>(null);
  const messageRef = React.useRef<HTMLInputElement>(null);
  const btngeRef = React.useRef<HTMLInputElement>(null);
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [liveIconMessage, setLiveIconMessage] = useState(false)
  const keyLocal = 'valuesUsers'

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  const scrollDrwom = () => {
    btngeRef.current?.scrollIntoView({ behavior: "smooth"})
  }

  const GetLocalDados = () => {
    const storedValues = localStorage.getItem(keyLocal);
    const parsedValues: { name: string; imgUrl: string; }[] = storedValues ? JSON.parse(storedValues) : [];
    parsedValues.map((item) => {
      setName(item.name)
      setImg(item.imgUrl)
    })
  }

  useEffect(()=> {
    GetLocalDados()
   }, [GetLocalDados])
  
  const connectSocket = async () => {
    const socketInstance = await io.connect("http://localhost:3002");
    socketInstance.emit("set_username", name)
    socketInstance.on("connect", () => {
      console.log("Socket conectado");
    });

    setSocket(socketInstance);
  }

  useEffect(() => {
    if (socket) {
      socket.on("receive_message", data => {
        console.log(data);
        setMessageList((current) => [...current, data]);
      });
      
      return () => {
        socket.off("receive_message");
      };
    
    }
    
  }, [socket]);

  useEffect(()=> {
    scrollDrwom()
  }, [messageList])

  const handleSubmit = () => {
    if (socket && messageRef.current) {
      const messageUser = messageRef.current.value;
      if (!messageUser.trim()) return;
      
      socket.emit("message", messageUser );
       clearInput();
    }
    if(speechRecognition !== null && messageRef.current){
      speechRecognition.stop()
      messageRef.current.value = ""
    }
    clearInput();
   
  };

  const clearInput = () => {
    if (messageRef.current) {
      messageRef.current.value = "";
    }
  };

  const verifiqInput = useCallback(() => {
    if (messageRef.current?.value !== "") {
      setLiveIconMessage(true);
    } else {
      setLiveIconMessage(false)
    }
  }, []);

  const handleChange = () => {
    verifiqInput();
  };

  const handleSubmitVoice = () => {
   

    const isSpeechRecognitionAPIvailable = 'SpeechRecognition' in window
    || 'webkitSpeechRecognition' in window


    if(!isSpeechRecognitionAPIvailable){
      console.log("Infilismente seu navegador não suporta a API de voice")
      return
    }
    setLiveIconMessage(true)
    
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition

      speechRecognition = new SpeechRecognitionAPI()

    speechRecognition.lang = 'pt-BR'
    speechRecognition.continuous = true
    speechRecognition.maxAlternatives = 1
    speechRecognition.interimResults = true


    speechRecognition.onresult = (event) => {
     const transcripition = Array.from(event.results).reduce((text, result) => {
         return text.concat(result[0].transcript);
     }, '')


     if(messageRef.current){
      messageRef.current.value = transcripition
     }
    }

    speechRecognition.onerror = (event) => {
      console.log(event)
     }


     speechRecognition.start();
  }

 

  return (
    <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button
          onClick={connectSocket}
          variant="outline"
          className="w-auto h-auto border-none"
        >
          🚀
        </Button>
      </DrawerTrigger>

      <DrawerContent className="w-full overflow-hidden mt-[200px] relative">
        <div className="w-full  h-screen bg-black relative top-[-6px] py-4">
          <div className="absolute top-2 left-[71rem]">
            <LiveAvatars />
          </div>
          <div className="mx-auto  w-full max-w-sm  flex flex-col justify-center items-center">
            <div className="w-28 h-2 rounded-full bg-zinc-800 mb-[10px]"></div>
            <DrawerHeader className="flex space-x-3">
              <DrawerTitle className="titleLogo text-[20px] font-semibold mb-[25px]">
                Chat BuildUi
              </DrawerTitle>
            </DrawerHeader>
            <div className=" pb-0 relative h-[19rem] w-[110%]  space-y-5">
              <div className="w-full h-60 ">
                <div className="w-15 h-5 hidden inset-0 z-50 absolute top-0 o left-0 bg-black/80  "></div>
                <div className="w-full h-full  overflow-auto flex flex-col space-y-3">
                  {messageList.map((message, index) => (
                    <div key={index}>
                      <Message
                        urlImg="https://github.com/shadcn.png"
                        name={message.author}
                        message={message.text}
                      />
                    </div>
                  ))}
                
                </div>
                
                
              </div>
              <div className="flex w-full bg-slate-900 px-2 rounded-full justify-between items-center">
                <input
                  type="text"
                  ref={messageRef}
                  onChange={handleChange}
                  
                  placeholder="Digite a sms..."
                  className="w-72 h-10 text-[14px] px-3 text-slate-200  bg-transparent outline-none"
                />
                <div
                  onClick={liveIconMessage ? handleSubmit : handleSubmitVoice}
                  className="w-8 h-8 bg-violet-800 rounded-full flex justify-center items-center"
                >
                  <Image src={liveIconMessage ? iconMessage : symbols} alt="..." width={12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
