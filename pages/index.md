<div className="w-screen h-screen" >
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