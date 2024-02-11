

import 'reactflow/dist/style.css';
import ReactFlow, { Background, Connection, ConnectionMode, Controls, addEdge, useEdgesState, useNodesState } from 'reactflow';
import {transparent, violet, zinc} from "tailwindcss/colors"
import { Square } from '../components/Square';
import { useCallback, useEffect, useState, useMemo, useRef } from 'react';
import { DefaultEdges } from '../components/edges/Defalutedges';
import * as Toolbar from '@radix-ui/react-toolbar'
import { PopoverRH } from '../components/Popover';
import { SquareCircle } from '../components/SquareCircle';
import { useColor } from '../hook/SelectColor';
import { SquareText } from '../components/SquareText';
import svg from '../public/seta.svg'
import { RoomProvider } from "../liveblocks.config";
import { useRouter } from "next/router";
import LiveAvatars from "../components/LiveAvatars";
import styles from "../styles/Index.module.css";
import fundo from '../public/fundo-removebg.png'
import Image from "next/image";
import axios from 'axios';
import { Skalete } from '../components/Skalete';
import { DrawerDemo } from '../components/Drawer';

const Node_Types ={
  square: Square,
  circle: SquareCircle,
  text: SquareText
}

const Edge_Types = {
  default: DefaultEdges,
}
 const Initial_Nodes = [
 
 ] satisfies Node[]



export default function Home() {
  const roomId = useOverrideRoomId("nextjs-live-avatars-advanced");
  const statusFundo = useRef({ value: true })
  const [userConectInternt, setUserConectInternt] = useState(false);
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const { colorDefinida, setColor } = useColor();
  const [node, setNode, onNodesChange] = useNodesState(
   Initial_Nodes
 )
 const [name, setName] = useState('')
 const [img, setImg] = useState('')
 const keyLocal = 'valuesUsers'

 const checkInternetConnection = useCallback(() => {
  setUserConectInternt(navigator.onLine);
}, []);

useEffect(() => {
  window.addEventListener('online', checkInternetConnection);
  window.addEventListener('offline', checkInternetConnection);

  return () => {
    window.removeEventListener('online', checkInternetConnection);
    window.removeEventListener('offline', checkInternetConnection);
  };
}, [checkInternetConnection]);

useEffect(() => {

  const intervalId = setInterval(checkInternetConnection, 5000);

  return () => clearInterval(intervalId);
}, [checkInternetConnection]);


 
 const GetLocalDados = () => {
   const storedValues = localStorage.getItem(keyLocal);
   const parsedValues: { name: string; imgUrl: string; }[] = storedValues ? JSON.parse(storedValues) : [];
   parsedValues.map((item) => {
     setName(item.name)
     setImg(item.imgUrl)
   })
 }
  
  const onConnect = useCallback((connection: Connection)=> {
     return setEdges(edges => addEdge(connection, edges))
  }, [])
  
 useEffect(()=> {
  GetLocalDados()
 }, [GetLocalDados])


  function addNewEdge(tipoNode: string){
     setNode(nodes => [
       ...nodes,
       {
         id: crypto.randomUUID(),
         type: tipoNode,
         position: {
           x: 750,
           y:350,
         },
         data: {},
        }
     ])

      statusFundo.current.value = statusFundo.current.value = false
      console.log(statusFundo.current.value)
     
  }

 
  return (
    <RoomProvider id={roomId} initialPresence={{}}>
      <main className={styles.main}>
        {
          userConectInternt === true ? (
            <>
            <div className="w-screen h-screen bg-zinc-900" >
        <ReactFlow
         nodeTypes={Node_Types}
         edgeTypes={Edge_Types}
         nodes={node}
         edges={edges}
         onEdgesChange={onEdgesChange}
         onConnect={onConnect} 
         onNodesChange={onNodesChange}
         connectionMode={ConnectionMode.Loose}
         defaultEdgeOptions={{
          type: 'default',
         }}
         style={{ backgroundColor: colorDefinida }}
        >
          <Background 
          gap={18}
            size={0}
            color={transparent}
          />
          <Controls 
           color='bg-white'
          />
           <div className='text-white fixed flex justify-center  w-[450px] px-4 items-center gap-4 ml-[400px] mt-[40px]'>
           <div className='h-[51px] w-[115px] flex justify-center items-center rounded-[50px] bg-[#FFFFFF1A]'>
           <LiveAvatars />
      
           </div>
           
              <div className='w-[199px] h-[43px] flex justify-center items-center rounded-[30px] bg-[#F77CB11A]'>
                <h2 className='text-[12px] text-[#F77CB1] font-medium'>Olá {name}, bem vindo</h2>
              </div>
           </div>
        </ReactFlow>
        

        {
          statusFundo.current.value === true ? (
            <>
             <div className='fixed flex flex-col justify-center items-center  top-[70px] left-[450px] w-[400px] h-[400px] overflow-hidden'>
        <Image
      alt="img fundo ..."
      src={fundo}
      height={1000}
      width={1000}
      className='img'
      />
      <h1 className='text-slate-100 text-[20px] mt-[-55px]'>Começa a sua <span className='text-violet-600'>criatividade</span></h1>
        </div>
            </>
          ) : (
            <>
              <div></div>
            </>
          )
        }

        <Toolbar.Root className='fixed rotate-90 top-[200px] left-[60px] -translate-x-1/2 bg-zinc-700  rounded-2xl shadow-lg  px-8 h-20 w-96 overflow-hidden flex gap-8'>
          <Toolbar.Button 
          onClick={() => addNewEdge('square')}
          className='w-32 h-32 bg-violet-500  rounded transition-transform mt-6 hover:-translate-y-2 '
          />
           <Toolbar.Button 
          onClick={() => addNewEdge('circle')}
          className='w-32 h-32 bg-rose-500  rounded-full transition-transform mt-6 hover:-translate-y-2 '
          />
           <Toolbar.Button 
          onClick={() => addNewEdge('text')}
          className='w-32 h-32 bg-cyan-500 flex justify-center py-4  rounded transition-transform mt-6 hover:-translate-y-2 '>
            <h1 className='text-slate-300 text-[13px] font-semibold'>Create Text</h1>
            
          </Toolbar.Button>
        </Toolbar.Root>
   
        <div className='fixed flex justify-center items-center top-[40px] left-[1050px] -translate-x-1/2 bg-zinc-700 rounded shadow-lg  px-8  w-[60px] transition-[1s]  h-[50px]  hover:w-[200px] '>
        <DrawerDemo />
            <PopoverRH />
         
        </div>
        <div className='fixed flex justify-center items-center top-[40px] left-[1130px] -translate-x-1/2 bg-zinc-700 rounded shadow-lg  px-8  w-[60px] transition-[1s]  h-[50px] hover:h-[170px] overflow-hidden'>
           <h2 className='fixed top-[12px] left-[8px] text-violet-300 font-semibold'>Colors</h2>
           <ul id='bodyColor' className='w-auto h-auto fixed top-[80px] left-[7px] flex flex-col gap-2 hover:cursor-pointer'>
                <li onClick={() => setColor('ROSE')} className='w-[50px] h-[20px] bg-blue-900' title='zinc' />
                <li onClick={() => setColor('VIOLET')} className='w-[50px] h-[20px] bg-cyan-900' title='violet' />
                <li onClick={() => setColor('DEFAULT')} className='w-[50px] h-[20px] bg-zinc-400' title='violet' />
            </ul>
        </div>
      </div>
            </>
          ) : (
            <>
             <Skalete />
            </>
          )
        }
      </main>
    </RoomProvider>
  );
}

/**
 * This function is used when deploying an example on liveblocks.io.
 * You can ignore it completely if you run the example locally. 942 759 561
 */
function useOverrideRoomId(roomId: string) {
  const { query } = useRouter();
  const overrideRoomId = useMemo(() => {
    return query?.roomId ? `${roomId}-${query.roomId}` : roomId;
  }, [query, roomId]);

  return overrideRoomId;
}
