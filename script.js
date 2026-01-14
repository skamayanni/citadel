//  WITHDRAWAL LOGIC 


		function openWithdraw() { withdrawModal.style.display = 'block'; }
		function closeWithdraw() { withdrawModal.style.display = 'none'; }


		function withdrawFunds() {
			let amount = parseInt(withdrawAmount.value);
			if (!amount || amount <= 0) {
				alert("Enter valid amount");
				return;
			}
			if (amount > balance) {
				alert("Insufficient balance");
				return;
			}

			balance -= amount;
			updateAccount();
			closeWithdraw();

			let txId = "WD" + Math.floor(Math.random() * 1000000);

			addTransaction("Withdrawal", "USD Wallet", amount, "Processing");

			document.getElementById("rId").innerText = txId;
			document.getElementById("rDate").innerText = new Date().toLocaleString();
			document.getElementById("rAmount").innerText = amount.toLocaleString();

			receiptModal.style.display = "block";
		}

	


	//  PRINT 

		function printReceipt() {
			let content = document.getElementById("receiptContent").innerHTML;
			let win = window.open('', '', 'width=600,height=600');
			win.document.write(`
    <html>
      <head><title>Withdrawal Receipt</title></head>
      <body>${content}</body>
    </html>
  `);
			win.document.close();
			win.print();
		}

		function closeReceipt() {
			receiptModal.style.display = "none";
		}
	





		let balance = 10000;
		let invested = 0;
		let returns = 0;

		function updateAccount() {
			balanceEl.innerText = `$${balance.toLocaleString()}`;
			investedEl.innerText = `$${invested.toLocaleString()}`;
			returnsEl.innerText = `$${returns.toLocaleString()}`;
		}

		const balanceEl = document.getElementById("balance");
		const investedEl = document.getElementById("invested");
		const returnsEl = document.getElementById("returns");

		updateAccount();

	




	//  ASSETS ALLOCATION (CRYPTO, REAL ESTATE) 
	
		// let allocationCtx = document
		// 	.getElementById("allocationChart")
		// 	.getContext("2d");

		// let allocationChart = new Chart(allocationCtx, {
		// 	type: 'pie',
		// 	data: {
		// 		labels: ['Real Estate', 'Crypto', 'Stocks', 'Cash'],
		// 		datasets: [{
		// 			data: [60, 20, 10, 10]
		// 		}]
		// 	},
		// 	options: {
		// 		responsive: true,
		// 		plugins: {
		// 			legend: { position: 'bottom' }
		// 		}
		// 	}
		// });
	 



		let ctx = document.getElementById('portfolioChart').getContext('2d');

		let portfolioChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
				datasets: [{
					label: 'Portfolio Value ($)',
					data: [10000, 10200, 10550, 11000, 11600, 12400],
					borderWidth: 3,
					tension: 0.4
				}]
			},
			options: {
				responsive: true,
				plugins: { legend: { display: true } }
			}
		});

	


	


	//  PROPERTY MODAL jS 

	// let currentMin = 0;
	// let currentRoi = 0;

	// function openProperty(title, desc, roi, min){
	// propTitle.innerText = title;
	// propDesc.innerText = desc;
	// propRoi.innerText = roi;
	// propMin.innerText = min;
	// currentMin = min;
	// currentRoi = roi;
	// propertyModal.style.display = 'block';
	// }

	// function closeProperty(){
	// propertyModal.style.display = 'none';
	// }


	//  TRANSACTION HISTORY 

	
// const txTable = document.getElementById("txTable");

// function addTransaction(type, asset, amount, status="Completed") {
//   const row = document.createElement("tr");
//   row.innerHTML = `
//     <td>${new Date().toLocaleDateString()}</td>
//     <td>${type}</td>
//     <td>${asset}</td>
//     <td>${amount.toLocaleString()}</td>
//     <td>${status}</td>
//   `;
//   txTable.prepend(row);
// }



		// Wallet funding
		addTransaction("Wallet Funding", "USD Wallet", amount);

		// Property investment
		addTransaction("Investment", "Real Estate", amount);

		// Monthly ROI
		addTransaction("ROI Gain", "Portfolio", monthlyGain);

	



		function investProperty(amount, roi) {
			if (balance < amount) {
				alert("Insufficient balance");
				return;
			}

			balance -= amount;
			invested += amount;

			let profit = Math.round((amount * roi) / 100);
			returns += profit;

			updateAccount();
			alert("Investment successful! Estimated return added.");
		}
	


		setInterval(() => {
			if (invested > 0) {
				let monthlyGain = Math.round(invested * 0.015); // 1.5% monthly
				returns += monthlyGain;
				updateAccount();
			}
		}, 8000); // every 8 seconds = 1 month simulation 

	



		function openWallet() { walletModal.style.display = 'block'; }
		function closeWallet() { walletModal.style.display = 'none'; }

		function fundWallet() {
			let amount = parseInt(fundAmount.value);
			if (!amount || amount <= 0) {
				alert("Enter valid amount");
				return;
			}
			balance += amount;
			updateAccount();
			closeWallet();
			alert("Wallet funded successfully");
		}
	



	


		let signupMode = false;
		function openAuth() { authModal.style.display = 'block' }
		function closeAuth() { authModal.style.display = 'none' }
		function toggleAuth() {
			signupMode = !signupMode;
			authTitle.innerText = signupMode ? 'Signup' : 'Login';
		}
	 


		function payNow() {
			let handler = PaystackPop.setup({
				key: 'pk_test_REPLACE_THIS',
				email: 'client@email.com',
				amount: 50000,
				currency: 'USD',
				callback: function () {
					alert('Investment Successful');
				}
			});
			handler.openIframe();
		}
	



		fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd')
			.then(r => r.json())
			.then(d => {
				btc.innerText = '$' + d.bitcoin.usd;
				eth.innerText = '$' + d.ethereum.usd;
				sol.innerText = '$' + d.solana.usd;
			});
	




		function openWithdraw() {

			let balance = 10000;

			const amount = prompt("Enter withdrawal amount");

			if (!amount || isNaN(amount) || amount <= 0) {
				alert("Invalid amount");
				return;
			}

			if (amount > balance) {
				alert("Insufficient balance");
				return;
			}

			withdrawFunds(parseFloat(amount));
		}

		function withdrawFunds(amount) {
			// Deduct balance
			balance -= amount;
			document.getElementById("balance").innerText = "$" + balance.toLocaleString();

			// Generate receipt data
			document.getElementById("rId").innerText =
				"TX-" + Math.floor(Math.random() * 1000000);
			document.getElementById("rDate").innerText =
				new Date().toLocaleString();
			document.getElementById("rAmount").innerText =
				amount.toLocaleString();

			// SHOW MODAL
			document.getElementById("receiptModal").style.display = "block";
		}


		function closeReceipt() {
			document.getElementById("receiptModal").style.display = "none";
		}

		function printReceipt() {
			const content = document.getElementById("receiptContent").innerHTML;
			const win = window.open("", "", "width=600,height=600");
			win.document.write("<html><body>" + content + "</body></html>");
			win.document.close();
			win.print();

        }