// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AeroXToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("AeroX", "AEROX") {
        _mint(msg.sender, initialSupply);
    }
}
