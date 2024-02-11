import React from "react";
import { Avatar } from "./Avatar";
import { useOthersMapped, useSelf } from "../liveblocks.config";
import { AnimatePresence, motion } from "framer-motion";
import foto from '../public/Ellipse 11(4).svg'
import foto1 from '../public/Ellipse 11(2).svg'
import foto2 from '../public/Ellipse 11(3).svg'
import foto3 from '../public/Ellipse 11(5).svg'
import foto4 from '../public/Ellipse 11(6).svg'

/**
 * This file shows how to add live avatars like you can see them at the top right of a Google Doc or a Figma file.
 *
 * The users avatar and name are not set via the `useMyPresence` hook like the cursors.
 * They are set from the authentication endpoint.
 *
 * See pages/api/liveblocks-auth.ts and https://liveblocks.io/docs/api-reference/liveblocks-node#authorize for more information
 */

const fotos: string[] = [
  
]

const MAX_OTHERS = 5;

const animationProps = {
  initial: { width: 0, transformOrigin: "left" },
  animate: { width: "auto", height: "auto" },
  exit: { width: 0 },
  transition: {
    type: "spring",
    damping: 15,
    mass: 1,
    stiffness: 200,
    restSpeed: 0.01,
  },
};

const avatarProps = {
  style: { marginLeft: "-0.45rem" },
  size: 48,
  outlineWidth: 3,
  outlineColor: "white",
};
const names =
[
  "Carla",
  "Paulo"
]
export default function LiveAvatars() {

  const others = useOthersMapped((other) => other.info);
  const currentUser = useSelf();
  const hasMoreUsers = others.length > MAX_OTHERS;

  return (
    <div
      style={{
        minHeight: avatarProps.size + "px",
        display: "flex",
        marginTop: "5px",
        paddingLeft: "0.75rem",
        overflow: "hidden",
      }}
     
    >
      <AnimatePresence>
        {hasMoreUsers ? (
          <motion.div key="count" {...animationProps}>
            <Avatar {...avatarProps} variant="more" count={others.length - 3} />
          </motion.div>
        ) : null}

        {others
          .slice(0, MAX_OTHERS)
          .reverse()
          .map(([key, info]) => (
            <motion.div key={key} {...animationProps}>
              <Avatar
                {...avatarProps}
                src={info.color}
                name={info.name}
             
              />
            </motion.div>
          ))}

        {currentUser ? (
          <motion.div key="you" {...animationProps}>
            <Avatar
              {...avatarProps}
              src={foto}
              name={"Lorrys"}
              
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
