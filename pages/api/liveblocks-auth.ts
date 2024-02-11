import { Liveblocks } from "@liveblocks/node";
import { NextApiRequest, NextApiResponse } from "next";
import foto from '../../public/Ellipse 11.svg'
import foto1 from '../../public/Ellipse 11(2).svg'
import foto2 from '../../public/Ellipse 11(3).svg'
import foto3 from '../../public/Ellipse 11(5).svg'
import foto4 from '../../public/Ellipse 11(6).svg'
const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY!;

const liveblocks = new Liveblocks({ secret: API_KEY });

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // For the avatar example, we're generating random users
  // and set their info from the authentication endpoint
  // See https://liveblocks.io/docs/api-reference/liveblocks-node#authorize for more information
  const userIndex = Math.floor(Math.random() * NAMES.length);

  const session = liveblocks.prepareSession(`user-${userIndex}`, {
    userInfo: {
      name: NAMES[userIndex],
      color: COLORS[Math.floor(Math.random() * COLORS.length)],

      // Uncomment below and refresh to see with avatar graphics
      // avatar: `https://liveblocks.io/avatars/avatar-${Math.floor(Math.random() * 30)}.png`,
    },
  });

  session.allow(req.body.room, session.FULL_ACCESS);

  const { status, body } = await session.authorize();
  return res.status(status).end(body);
}

const NAMES = [
 "Romeu Cajamba",
 "Paulo Sanguli",
 "Edgar Cardoso"
];

const COLORS = [
  foto,
   foto1,
   foto2,
   foto3,
   foto4
];
