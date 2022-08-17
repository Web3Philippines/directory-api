// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { xor } = require('../../modules/utils');

// error codes
// 200 OK
// 400 Bad Request

// model imports
const Directory = require("../../modules/directoryModel");


const handler = async (req, res) => {
  // get parameters
  let { name, tags, page, size } = req.query;

  // page and size must both be present
  if (
    xor(
      page === undefined,
      size === undefined
    )
  ) {
    res.status(400).send("Page and Size must both be present");
  }

  // retrieve data from model
  let data = Directory
    .name(name)
    .tags(tags)
    .get();

  // handle pagination
  // page starts at 0
  // size starts at 1
  if (page && page !== undefined) {
    page = parseInt(page);
    size = parseInt(size);

    if (isNaN(page) || isNaN(size)) {
      res.status(400).send("Page and Size must valid unsigned integers");
    }

    if (size <= 0) {
      res.status(400).send("Invalid size provided");
    }

    const start = page * size;
    const end = start + size;
    data = data.slice(start, end);
  }

  // respond with data
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400');
  res.status(200).json(data);
}

export default handler;
