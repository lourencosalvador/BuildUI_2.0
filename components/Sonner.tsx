import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";
import { animationProps, avatarProps } from "./LiveAvatars";
import { Avatar } from "./Avatar";

interface SonnerNotifiqProps {
  name: string;
  img: string;
}

export default function SonnerNotifiq({name, img}: SonnerNotifiqProps) {
  return (
    <div>
      <Toaster />
      <button
        onClick={() =>
          toast(
      <div className='flex space-x-2 font-semibold'>
      <h1>{name}</h1>
      <motion.div key="you" {...animationProps}>
    <Avatar
      {...avatarProps}
      src={img}
      name={"Lorrys"}
      
    />
  </motion.div>
    </div>
      ,
            {
              action: {
                label: "cancelar",
                onClick: () => console.log("Cancelar"),
              },
            }
          )
        }
      >
        enviar
      </button>
    </div>
  );
}
