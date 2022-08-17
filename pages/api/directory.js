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

  // add data length field
  let dataLength = data.length;
  let pages;
  let hasNextPage;

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

    // add pages field
    pages = Math.ceil(data.length / size);
    hasNextPage = page < data.length - 1 ? true : false

    const start = page * size;
    const end = start + size;
    data = data.slice(start, end);
  }

  // build response JSON
  const resp = {
    data: data,
    pages: pages || 1,
    length: dataLength,
    hasNextPage: hasNextPage || false,
    currPage: page || 0,
    currSize: size || dataLength
  }

  // respond with data
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400');
  res.status(200).json(resp);
}

export default handler;
