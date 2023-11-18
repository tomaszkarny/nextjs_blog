/* eslint-disable import/no-anonymous-default-export */
// import { NextApiRequest, NextApiResponse } from 'next'
// import cookie from 'cookie'

// export default {
//   async POST(req: NextApiRequest, res: NextApiResponse) {
//     const { secret } = req.body

//     // Sprawdzanie sekretu
//     if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
//       return { status: 401, body: { message: 'Invalid token' } }
//     }

//     // Usuwanie ciasteczka draft mode
//     res.setHeader(
//       'Set-Cookie',
//       cookie.serialize('draftMode', '', {
//         maxAge: -1, // Usuwa ciasteczko
//         path: '/'
//       })
//     )

//     // Zwróć odpowiedź potwierdzającą wyłączenie trybu podglądu
//     return { status: 200, body: { message: 'Draft mode disabled' } }
//   }
// }

import { draftMode } from 'next/headers'

export async function GET(request: Request) {
  draftMode().disable()
  return new Response('Draft mode is disabled')
}
