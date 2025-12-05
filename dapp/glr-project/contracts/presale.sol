// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IGLR {
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract GLRPresale {
    address public owner;
    address public tokenAddress;

    uint256 public price = 0.00001 ether; // 1 GLR = 0.00001 ETH
    uint256 public soldTokens;

    constructor(address _tokenAddress) {
        owner = msg.sender;
        tokenAddress = _tokenAddress;
    }

    receive() external payable {
        buyTokens();
    }

    function buyTokens() public payable {
        require(msg.value > 0, "ETH gonder");

        uint256 amount = msg.value / price;

        require(
            IGLR(tokenAddress).balanceOf(address(this)) >= amount,
            "Kontratta yeterli token yok"
        );

        IGLR(tokenAddress).transfer(msg.sender, amount);
        soldTokens += amount;
    }

    function withdrawETH() external {
        require(msg.sender == owner, "Sen sahibi degilsin");
        payable(owner).transfer(address(this).balance);
    }

    function withdrawTokens(uint256 amount) external {
        require(msg.sender == owner, "Sen sahibi degilsin");
        IGLR(tokenAddress).transfer(owner, amount);
    }
}