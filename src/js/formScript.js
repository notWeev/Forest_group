const userName = document.querySelector("#name");
const email = document.querySelector("#email");
const msgArea = document.querySelector("#msg");
const checkbox = document.querySelector("#policy-checkbox");
const formBtn = document.querySelector(".contact__form-btn");
const msgStatus = document.querySelector(".contact__msg-status");

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector(".contact__error-text");

	formBox.classList.add("error");
	errorMsg.textContent = msg;
};

const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove("error");
};

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === "") {
			showError(el, "Pole musi być wypełnione");
		} else {
			clearError(el);
		}
	});
};

const checkMail = (email) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, "E-mail jest niepoprawny.");
	}
};

const CheckCheckbox = () => {};

const checkErrors = () => {
	const allInputs = document.querySelectorAll(".contact__form-box");
	let errorCount = 0;

	allInputs.forEach((el) => {
		if (el.classList.contains("error")) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
        if (checkbox.checked) {
            handleSuccesStatus()
        } else {
            handlerrorStatus()
        }
	}
};

const handleSuccesStatus = () => {
	msgStatus.classList.add("successStatus");
	msgStatus.textContent = "Wiadomość wysłana!";

	setTimeout(() => {
		msgStatus.classList.remove("successStatus");
	}, 3000);
};

const handlerrorStatus = () => {
	msgStatus.classList.add("errorStatus");
	msgStatus.textContent = "Musisz zgodzić sie na warunki umowy";

	setTimeout(() => {
		msgStatus.classList.remove("errorStatus");
	}, 3000);
};

formBtn.addEventListener("click", (e) => {
	e.preventDefault();

	checkForm([userName, email, msgArea]);
	checkMail(email);
	checkErrors();
});
