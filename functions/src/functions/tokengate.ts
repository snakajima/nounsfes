import { ethers } from "ethers";

const ERC721 = {
    wabi: require("../abis/AbstractERC721.json"), // wrapped abi
    address: "0xb1b25eeb1026cb947b3f65a5cc123fc28b13eee6",
    network: "homestead"
};
const nounsLoveProviderView = new ethers.providers.AlchemyProvider(
    ERC721.network
);
const nounsLoveContractView = new ethers.Contract(
    ERC721.address,
    ERC721.wabi.abi,
    nounsLoveProviderView
);

const OpenSeaERC1155 = {
    abi: require("../abis/OpenSeaERC1155.json"),
    address: "0x2953399124F0cBB46d2CbACD8A89cF0599974963",
    network: "matic"
};
const namedNounProviderView = new ethers.providers.AlchemyProvider(
    OpenSeaERC1155.network
);
const namedNounContractView = new ethers.Contract(
    OpenSeaERC1155.address,
    OpenSeaERC1155.abi,
    namedNounProviderView
);

// Because OpenSea chose to put all Polygon NFTs in a single ERC1155 contract, 
// we need to perform this hack in order to know the number of NFTs in user's wallet. 
const itemId0 = ethers.BigNumber.from("35416128211843416333493280670751952307736614476901985064732031611086890336257");
const itemId1 = ethers.BigNumber.from("35416128211843416333493280670751952307736614476901985064732031612186401964033");
const delta = itemId1.sub(itemId0);
const itemCount = 90;
const itemIds = [...Array(itemCount).keys()].map((value) => { return itemId0.add(ethers.BigNumber.from(delta.mul(value))); });


export const checkTokenGate = async (
  addr: string,
  tokenName: string,
) => {
    console.log("check tokens",tokenName, addr);
   
    if(tokenName == "nounsLove"){
        try {
            const result = (await nounsLoveContractView.functions.balanceOf(addr));
            console.log(result);
            return 0 < result[0].toNumber();
        } catch(e) {
            console.error("fetchInfo", e);
            return false;
        }
    } else if(tokenName == "namedNoun"){
        const accounts = itemIds.map(() => {return addr;});
        try {
            const results = await namedNounContractView.functions.balanceOfBatch(accounts, itemIds) as Array<Array<ethers.BigNumber>>;
            const count = results[0].reduce((total, result) => {
                return total.add(result);
              }, ethers.BigNumber.from(0));
            return 0 < count.toNumber()
        } catch(e) {
            console.error("fetchInfo", e);
            return false;
        }
    } else {
        return false
    }
}
