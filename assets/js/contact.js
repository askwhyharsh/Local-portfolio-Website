
Moralis.initialize("2tLBbBF5Q8MkUtARNZWwD90EsdNR1uNuatwHLLHT");
Moralis.serverURL = "https://drfbxjnxskmz.usemoralis.com:2053/server";
let serverUrl = "https://drfbxjnxskmz.usemoralis.com:2053/server";
let appId = "2tLBbBF5Q8MkUtARNZWwD90EsdNR1uNuatwHLLHT";
Moralis.start({ serverUrl, appId });

let web3;;
let submit = document.getElementById("sendMessage");
// import { ethers } from "ethers";
const contractAddress = "0x944E01601B100a72E49520fB6B71EFe1072C780A";
const ABI = [
	{
		"inputs": [],
		"name": "getAllMessages",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "subject",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "message",
						"type": "string"
					}
				],
				"internalType": "struct Message.message[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "getSpecificMessage",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "email",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "subject",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "message",
						"type": "string"
					}
				],
				"internalType": "struct Message.message",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_email",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_subject",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			}
		],
		"name": "sendMessage",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];


// const form = document.querySelectorAll("form, #contactForm")[0]
 
submit.addEventListener('click', async function getDataForm(e) {
    e.preventDefault();
    web3 = await Moralis.Web3.enableWeb3()

   let bool = await login();
   
    
   console.log("hh");
   let accounts = await web3.eth.getAccounts();
   console.log(accounts[0]);

   const contract = new web3.eth.Contract(ABI, contractAddress );
   const naam = document.getElementById("naam").value;
 let email = document.getElementById("email").value;
 let subject = document.getElementById("subject").value;
 let message = document.getElementById("message").value;
   let txn = await contract.methods.sendMessage("harsh", "email", "firstMessage", "messaage").send({from: accounts[0], value: 0})
   .on("receipt", function(receipt){
    alert("message sent", receipt);
  })

     
    } )


    async function login() {
      let user = Moralis.User.current();
      if (!user) {
       try {
          user = await Moralis.authenticate({ signingMessage: "Hello World!" })
          console.log(user)
          console.log(user.get('ethAddress'))
          return true;
         
       } catch(error) {
         console.log(error)
       }
      }
      
    }

    // async function postReq(array) {
    
    //       fetch(
    //         `https://my-json-server.typicode.com/typicode/demo/posts`
    //       , {
    //           method: "POST",
    //           body: JSON.stringify({ harshsingh: {
    //               myportfoliodata: "true",
    //               name: array[0][1],
    //               email: array[1][1],
    //               subject: array[2][1],
    //               message: array[3][1]
    //           }
    //             }),
    //             headers: {
    //               "Content-Type": "application/json; charset=UTF-8" 
    //             }
    //       })
    //       .then(response => response.json())
    //       .then((data) => { console.log(data)})
    //       .catch(error => {alert(error)});
    //     }
      
      
   