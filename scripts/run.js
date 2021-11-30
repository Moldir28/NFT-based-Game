const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Spongebob", "Krabs", "Squidward"],
        ["QmPjLAwM4QxH4udheDDEpm2urLNL9r6QdDyGsawurhWGsE",
            "QmRsgRDRAhtErRn7nzNDhqLZYzikEvT8DDgKGKCaYCwpGJ",
            "QmTozd4beeLMHsHMzY4bNfiHZQrU7YuEmJjVyUuJaJ1Hf5"
        ], [100, 200, 300], // Hp
        [100, 50, 25], // Attack damages
        "Plankton",
        "QmX3nBd9jpzUwT7QB1mxbpg6keYofLDcbwd8fRevmZtk2s",
        1000,
        50
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    // let txn;
    // // We only have three characters.
    // // an NFT w/ the character at index 2 of our array.
    // txn = await gameContract.mintCharacterNFT(2);
    // await txn.wait();
    // // Get the value of the NFT's URI.
    // let returnedTokenUri = await gameContract.tokenURI(1);
    // console.log("Token URI:", returnedTokenUri);
};



const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();