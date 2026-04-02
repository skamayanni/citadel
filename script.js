
		// 🔒 HARD-CODED LOGIN DETAILS
		const USERNAME = "admin";
		const EMAIL = "billionaire@gmail.com";
		const PASSWORD = "12345678";

		function login() {
			const userInput = document.getElementById("loginUser").value.trim();
			const passInput = document.getElementById("loginPass").value.trim();
			const error = document.getElementById("loginError");

			if (
				(userInput === USERNAME || userInput === EMAIL) &&
				passInput === PASSWORD
			) {
				document.getElementById("authOverlay").style.display = "none";
				document.getElementById("siteContent").style.display = "block";
			} else {
				error.textContent = "Invalid login details";
			}
		}


		document.body.classList.add("locked");


		function login() {
			const user = document.getElementById("loginUser").value.trim();
			const pass = document.getElementById("loginPass").value.trim();
			const error = document.getElementById("loginError");

			if (
				(user === "admin" || user === "billionaire@gmail.com") &&
				pass === "12345678"
			) {
				// ✅ SAVE LOGIN STATE
				sessionStorage.setItem("isLoggedIn", "true");

				document.getElementById("authOverlay").style.display = "none";
				document.getElementById("siteContent").style.display = "block";
				document.body.classList.remove("locked");

				window.scrollTo(0, 0);
			} else {
				error.textContent = "Invalid login details";
			}
		}


		document.addEventListener("DOMContentLoaded", function () {
			const loggedIn = sessionStorage.getItem("isLoggedIn");

			if (loggedIn === "true") {
				document.getElementById("authOverlay").style.display = "none";
				document.getElementById("siteContent").style.display = "block";
				document.body.classList.remove("locked");
			} else {
				document.getElementById("authOverlay").style.display = "flex";
				document.getElementById("siteContent").style.display = "none";
				document.body.classList.add("locked");
			}
		});



		function logout() {
			sessionStorage.removeItem("isLoggedIn");
			location.reload();
		}



	


	
		document.addEventListener("DOMContentLoaded", function () {
			// Get all mobile dropdown buttons
			const dropdownBtns = document.querySelectorAll(".mobile-menu .dropdown-btn");

			dropdownBtns.forEach(function (btn) {
				btn.addEventListener("click", function (e) {
					// Prevent default behavior
					e.preventDefault();

					// Find the parent LI
					const parentLi = btn.parentElement;

					// Toggle the submenu
					const submenu = parentLi.querySelector("ul");
					if (submenu) {
						// Close other open submenus
						parentLi.parentElement.querySelectorAll("ul.open").forEach(function (ul) {
							if (ul !== submenu) ul.classList.remove("open");
						});
						// Toggle current submenu
						submenu.classList.toggle("open");
					}

					// Toggle arrow icon rotation
					btn.querySelector("span").classList.toggle("rotated");
				});
			});
		});
	


	// <!-- This sends the amount to payment.html -->
	
		function openWallet() { walletModal.style.display = 'block'; }
		function closeWallet() { walletModal.style.display = 'none'; }


		function goToPayment() {
			const amount = document.getElementById("fundAmount").value;

			if (!amount || isNaN(amount) || amount <= 0) {
				alert("Please enter a valid amount");
				return;
			}

			// Redirect with amount in URL
			window.location.href = "payment.html?amount=" + encodeURIComponent(amount);
		}
	



	    // rotation logic 
	    // How it works (simple explanation)

        // First message shows immediately

        // After 1 minute, it hides

        // Second message shows for 1 minute

        // Then it loops forever ♻️ 

	
		document.addEventListener("DOMContentLoaded", function () {
			const items = document.querySelectorAll(".rotating-text");
			let currentIndex = 0;

			setInterval(() => {
				items[currentIndex].classList.remove("active");
				currentIndex = (currentIndex + 1) % items.length;
				items[currentIndex].classList.add("active");
			}, 10000); // 10 seconds 
		});
	



	// <!-- ASSETS ALLOCATION (CRYPTO, REAL ESTATE) -->
	// <!-- 
	// 	let allocationCtx = document
	// 		.getElementById("allocationChart")
	// 		.getContext("2d");

	// 	let allocationChart = new Chart(allocationCtx, {
	// 		type: 'pie',
	// 		data: {
	// 			labels: ['Real Estate', 'Crypto', 'Stocks', 'Cash'],
	// 			datasets: [{
	// 				data: [60, 20, 10, 10]
	// 			}]
	// 		},
	// 		options: {
	// 			responsive: true,
	// 			plugins: {
	// 				legend: { position: 'bottom' }
	// 			}
	// 		}
	// 	});
	//     -->


	
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

	



	
		// Wallet funding
		addTransaction("Wallet Funding", "USD Wallet", amount);

		// Property investment
		addTransaction("Investment", "Real Estate", amount);

		// Monthly ROI
		addTransaction("ROI Gain", "Portfolio", monthlyGain);

	


	// <!-- 
	// 	function investProperty(amount, roi) {
	// 		if (balance < amount) {
	// 			alert("Insufficient balance");
	// 			return;
	// 		}

	// 		balance -= amount;
	// 		invested += amount;

	// 		let profit = Math.round((amount * roi) / 100);
	// 		returns += profit;

	// 		updateAccount();
	// 		alert("Investment successful! Estimated return added.");
	// 	}
	   

	  
	// 	setInterval(() => {
	// 		if (invested > 0) {
	// 			let monthlyGain = Math.round(invested * 0.015); // 1.5% monthly
	// 			returns += monthlyGain;
	// 			updateAccount();
	// 		}
	// 	}, 8000); // every 8 seconds = 1 month simulation 

	//   -->





	
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
	



	
		let balance = 50000;

		document.getElementById("withdrawSubmitBtn").addEventListener("click", function () {
			withdrawFunds();
		});

		function withdrawFunds() {
			const amountInput = document.getElementById("withdrawAmount");
			const amount = Number(amountInput.value);

			if (!amount || amount <= 0) {
				alert("Enter a valid amount");
				return;
			}

			if (amount > balance) {
				alert("Insufficient balance");
				return;
			}

			balance -= amount;

			showReceipt(amount);
		}

		function showReceipt(amount) {
			document.getElementById("receiptAmount").innerText = amount.toFixed(2);
			document.getElementById("receiptDate").innerText = new Date().toLocaleString();
			document.getElementById("receiptModal").style.display = "block";
		}

		function closeReceipt() {
			document.getElementById("receiptModal").style.display = "none";
		}
	