// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GLRToken is ERC20, Ownable {
    // Toplam arz: 1,000,000,000 GLR (18 decimals ile)
    uint256 public constant INITIAL_SUPPLY = 1_000_000_000 * 10 ** 18;

    constructor() ERC20("GLR AI Meme Token", "GLR") Ownable(msg.sender) {
        // Tüm arz deploy eden cüzdana gidiyor
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    // İleride istersen ek mint fonksiyonu ekleyebiliriz, şimdilik sabit arz
}
