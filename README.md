# Directory API (Temporary)

### Endpoints

`[GET] /api/directory`

Parameters
|Parameter|Usage|
|---|---|
|name|?name=web3|
|tags|?tags=company,defi|
|page & size (together)|?page=2&size=2|

**IMPORTANT NOTE:** page starts at 0, size starts at 1

### Response

JSON

```javascript
{
	data: DataObject[],
	pages: number,
	length: number,
	hasNextPage: bool,
	currPage: number,
	currSize: number,
	lastUpdated: number // in Unix Epoch Timestamp
}
```
Official Project Tags of the Directory
```
earn
nft
metaverse
dapp
service
community
dao
guild
defi
product
gaming
content
organization
company
education
location
```
DataObject (Sample)

```
{
    "id": "web3philippines",
    "name": "Web3 Philippines",
    "verified": true,
	  "image": "https://avatars.githubusercontent.com/u/105350478?s=200&v=4",
    "description":
      "Filipino-led community, helping Filipinos build in the Web3 space by providing free access to Web3 education, making us the first official and active Web3 community in the country. We believe that Web3 is and will always be for everyone.",
    "tags": [
      "community"
    ],
    "links": {
      "discord": {
        "id": "discord",
        "url": "https://discord.com/invite/4xbJEBKWKc"
      },
      "telegram": {
        "id": "telegram",
        "url": ""
      },
      "facebook": {
        "id": "facebook",
        "url": "https://facebook.com/web3ph"
      },
      "twitter": {
        "id": "twitter",
        "url": "https://twitter.com/web3phl"
      },
      "instagram": {
        "id": "instagram",
        "url": ""
      },
      "tiktok": {
        "id": "tiktok",
        "url": ""
      },
      "medium": {
        "id": "medium",
        "url": ""
      },
      "reddit": {
        "id": "reddit",
        "url": ""
      },
      "youtube": {
        "id": "youtube",
        "url": ""
      },
      "opensea": {
        "id": "opensea",
        "url": ""
      },
      "linkedin": {
        "id": "linkedin",
        "url": ""
      },      
      "whitepaper": {
        "id": "whitepaper",
        "url": ""
      },
      "deck": {
        "id": "deck",
        "url": ""
      },
      "github": {
        "id": "github",
        "url": ""
      },
      "website": {
        "id": "website",
        "url": "https://web3philippines.org"
      }
    }
  }
```
