const {CONTRACT_ADDRESS,ALCHEMY_KEY,PRIVATE_KEY} =process.env;

const {ethers, network} = require ('hardhat');
const contract =require('../artifacts/contracts/HelloWorld.sol/HelloWorld.json');

//Provider Alchemy ....
const alchemyProvider= new ethers.providers.AlchemyProvider("goerli",ALCHEMY_KEY);

//Signer...
const signer= new ethers.Wallet(PRIVATE_KEY,alchemyProvider);

//Contract Instance...
const helloWorldContract= new ethers.Contract(CONTRACT_ADDRESS,contract.abi,signer);


//Code...

async function main(){
    const message= await helloWorldContract.message();
    console.log('Message is:', message);
    console.log('Updating message in a few....');

    const tx= await helloWorldContract.update('This is the new message');
    await tx .wait();
    const newMessage= helloWorldContract.message();
    console.log('This is the new Message:',newMessage)
};
main()
.then(()=>{
    process.exit(0)
})
.catch(error=>{
    console.log(error)
    process.exit(1)
});

