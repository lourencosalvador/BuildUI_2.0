import React, { useEffect, useState } from "react";
import { Avatar } from "./Avatar";
import { useOthersMapped, useSelf } from "../liveblocks.config";
import { AnimatePresence, motion } from "framer-motion";
import foto from "../public/Ellipse 11(4).svg";
import foto1 from "../public/Ellipse 11(2).svg";
import foto2 from "../public/Ellipse 11(3).svg";
import foto3 from "../public/Ellipse 11(5).svg";
import foto4 from "../public/Ellipse 11(6).svg";

/**
 * This file shows how to add live avatars like you can see them at the top right of a Google Doc or a Figma file.
 *
 * The users avatar and name are not set via the `useMyPresence` hook like the cursors.
 * They are set from the authentication endpoint.
 *
 * See pages/api/liveblocks-auth.ts and https://liveblocks.io/docs/api-reference/liveblocks-node#authorize for more information
 */

const fotos: string[] = [];

const MAX_OTHERS = 5;

export const animationProps = {
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

export const avatarProps = {
  style: { marginLeft: "-0.45rem" },
  size: 48,
  outlineWidth: 3,
  outlineColor: "white",
};

interface  LiveAvatarsProps {
  stateAtive: boolean
}
export default function LiveAvatars({stateAtive}: LiveAvatarsProps) {
  const others = useOthersMapped((other) => other.info);
  const currentUser = useSelf();
  const hasMoreUsers = others.length > MAX_OTHERS;
  const [ligado, setLigado] = useState(false);

  console.log(currentUser ? "esta ligado" : "esta desligado");
  const forma = useOthersMapped((other) => (other.info ? true : false));

  console.log(forma);

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
            <motion.div key={key} {...animationProps} className="relative">
              <Avatar {...avatarProps} src={info.color} name={info.name} />
              <span className={`relative h-3 w-3 mt-[-12px] ml-[-10px] ${stateAtive ? "flex" : "hidden"}`}>
                <span className="animate-ping absolute inline-flex  h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex  rounded-full h-3 w-3 bg-violet-500"></span>
              </span>
            </motion.div>
          ))}

        {currentUser ? (
          <motion.div key="you" {...animationProps}>
            <Avatar {...avatarProps} src={foto} name={"Lorrys"} />
            <span className={`relative h-3 w-3 mt-[-12px] ml-[-10px] ${stateAtive ? "flex" : "hidden"}`}>
                <span className="animate-ping absolute inline-flex  h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex  rounded-full h-3 w-3 bg-violet-500"></span>
              </span>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
