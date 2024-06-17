 const codeInputs = document.querySelectorAll(".code");

        codeInputs.forEach((input, index) => {
            input.addEventListener("input", (event) => {
                const inputValue = event.target.value;

                if (inputValue.length === 1) {
                    if (index < codeInputs.length - 1) {
                        codeInputs[index + 1].focus();
                    }
                }
            });

            input.addEventListener("keydown", (event) => {
                if (event.key === "Backspace" && index > 0) {
                    codeInputs[index - 1].focus();
                }
            });
        });