# Bitcoin Wearables Metadata API <!-- omit in toc -->

The source code in this repo is used to make the API that serves metadata about Bitcoin Wearables' tokens to marketplaces like [OpenSea](https://opensea.io) and other third parties. 
This small solution is based on the ([ERC-721](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md) or [ERC-1155](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md)) standard. The metadata for each token only includes a title, a description and an image.

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Update Metadata](#update-metadata)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Requirements
You need node.js (8.11.* or later) and npm installed to run it locally

1. Import the repository and `cd` into the new directory.
2. Run `npm install`.
3. Run `node index.js`.
4. Visit the token's metadata at http://localhost:5000/api/token/1 (for token 1).

### Update Metadata
Change metadata information by modifying:

1. Images on `public/images`.
2. Name and description on `src/database.js`.

## Troubleshooting

If you have any questions, send a hi to hello@bitcoinwearables.org.
