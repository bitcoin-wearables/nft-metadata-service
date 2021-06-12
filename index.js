const express = require('express')
const path = require('path')
const moment = require('moment')
const { HOST } = require('./src/constants')
const db = require('./src/database')

const PORT = process.env.PORT || 5000

const app = express()
  .set('port', PORT)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// Static public files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
  res.send("Bitcoin Wearables' NFT metadata service is running!");
})

// api serving information for qr
app.get('/qr_lecture/token/:token_address/:token_id', function(req, res) {
  const tokenAddress = req.params.token_address
  const tokenId = parseInt(req.params.token_id).toString()

  res.redirect('https://polygonscan.com/token/'+tokenAddress+'?a='+tokenId)
})

// api serving contract-level metadata
app.get('/contract/nft', function(req, res) {
  const data = {
    'name': 'Bitcoin Wearables',
    'description': 'NFTs for the authentic Bitcoin Wearables fashion brand.',
    'image': `${HOST}/images/bitcoin_wearables_logo.png`,
    'external_link': 'https://bitcoinwearables.org'
  }
  res.send(data)
})

// api serving token-level metadata
app.get('/token/:token_id', function(req, res) {
  const tokenId = parseInt(req.params.token_id).toString()
  const wearable = db[tokenId]
  const data = {
    'name': wearable.name,
    'description': wearable.description,
    'attributes': {
      // no attributes for now
    },
    // images by default will lookup for id
    'image': wearable.image ? `${HOST}/images/${wearable.image}` : `${HOST}/images/${tokenId}.png`
  }
  res.send(data)
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
})
