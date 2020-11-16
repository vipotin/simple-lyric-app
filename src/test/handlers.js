import { rest } from 'msw'
import config from '../config'

// const search = 'lady%20gaga%20poker%20face'


export const handlers = [
  rest.get(`https://api.genius.com/search`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ response: { hits: []} }));
  }),
  rest.get(`https://api.lyrics.ovh/v1/test/test`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ lyrics: 'Test lyrics' }));
  }),
  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "You must add request handler." })
    );
  })
]

export { handlers }