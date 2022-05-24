//SPDX-License-Identifier: MIT
pragma solidity ^0.8.6;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract TemplateERC721 is ERC721URIStorage {
    constructor() ERC721("Template", "item") {}
}