const { ethers } = require("ethers");

/**
 * Encodes a transaction to be included in a Snapshot proposal description
 * for the oSnap bot to read and execute.
 */
function buildOSnapPayload(target, value, signature, args) {
    const iface = new ethers.Interface([`function ${signature}`]);
    const data = iface.encodeFunctionData(signature.split('(')[0], args);
    
    return {
        to: target,
        value: value.toString(),
        data: data
    };
}

const payload = buildOSnapPayload(
    "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", // USDC
    0,
    "transfer(address,uint256)",
    ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8", ethers.parseUnits("500", 6)]
);

console.log("oSnap Transaction Payload:", JSON.stringify(payload, null, 2));
