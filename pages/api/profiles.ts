// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //res.status(201).json({ name: 'John Doe' })
  if(req.method == 'POST') {
    res.status(201).json(req.body.json);
  } 
}
