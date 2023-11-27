// Email validator
// Adds input-error class if email is not valid
addEventListener("DOMContentLoaded", function () {
	const emailInput = document.querySelector("#email");
	const errorLabel = document.querySelector(".email-row .error-label");
  
	emailInput.addEventListener("blur", function() {
		if (emailInput.validity.typeMismatch) {
			errorLabel.style.display = "block";
			emailInput.classList.add("input-error");
		} else {
			errorLabel.style.display = "none";
			emailInput.classList.remove("input-error");
		}
	});
});

// Submit newsletter
addEventListener("submit", (event) => {
	event.preventDefault();
	const emailInput = document.querySelector("#email");

	// simulates submit
	const newsletter = document.querySelector("#newsletter");
	newsletter.style.display = "none";

	// show success alert
	showAlert("#newsletter-success", "flex", {"#user-email": emailInput.value});
});

// Append notification
/**
 * Display pre-existing hidden alert with specific id and display mode
 * If append is needed, use appends as {"#exemple": value, ...}
 * @param {String} alertId Element's ID to display
 * @param {String} display Display mode (block, flex, ...)
 * @param {Object} appends Objects to append
 */
function showAlert(alertId, display, appends){
	const success = document.querySelector(alertId);
	
	for (const [key, value] of Object.entries(appends))
		document.querySelector(key).append(value);

	success.style.display = display;
}

function hideAlert(alertId){
	document.querySelector(alertId).style.display = "none";
}