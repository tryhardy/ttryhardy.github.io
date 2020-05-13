(function () {
    let formOrder = document.querySelector('#form-order');
    const submitBtn = formOrder.querySelector('#submit');
    const resetBtn = formOrder.querySelector('#reset');

    const template = document.querySelector("#overlayTemplate").innerHTML;
    const overlay = createOverlay(template);



    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (validateForm(formOrder)) {
            let comment; 

            if (formOrder.elements.comment.value) {
                comment = formOrder.elements.comment.value;
            } else {
                comment = 'Посетитель не оставил комментария';
            }

            let newData = new FormData();
            newData.append('name', formOrder.elements.name.value);
            newData.append('phone', formOrder.elements.phone.value);
            newData.append('comment', comment);
            newData.append('to', 'empty@email.ru');


            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            //xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/fail');
            xhr.send(newData);

            xhr.addEventListener('load', () => {
                    if(xhr.response) {
                        //console.log(xhr.response.message);

                        overlay.open();
                        overlay.setContent(xhr.response.message);
                        resetBtn.click();
                    }

                
            });

        }
        
        function validateForm(form) {
            let valid = true;

            if (!validateField(formOrder.elements.name)) {
                valid = false;
            }

            /*if (!validateField(formOrder.elements.email)) {
                valid = false;
            }*/

            if (!validateField(formOrder.elements.phone)) {
                valid = false;
            }

            /*if (!validateField(formOrder.elements.house)) {
                valid = false;
            }
            if (!validateField(formOrder.elements.housing)) {
                valid = false;
            }
            if (!validateField(formOrder.elements.apartment)) {
                valid = false;
            }
            if (!validateField(formOrder.elements.floor)) {
                valid = false;
            }*/

            return valid;
        }

        function validateField(field) {
                field.nextElementSibling.textContent = field.validationMessage;
                return field.checkValidity;
        }

    });


    function createOverlay(template) {

        const fragment = document.createElement('div');
        let bodyWrapper = document.querySelector(".wrapper");
    
        fragment.innerHTML = template;
    
        const overlayElement = fragment.querySelector(".overlay");
        const contentElement = fragment.querySelector(".overlay__content");
        const closeElement = fragment.querySelector(".overlay__close");
        
        overlayElement.addEventListener("click", e => {
        if (e.target === overlayElement) {
            closeElement.click();
        }
        });
        closeElement.addEventListener("click", () => {
            console.log(closeElement);
            bodyWrapper.removeChild(overlayElement);

        });
    
        return {
        open() {
            bodyWrapper.appendChild(overlayElement);
        },
        close() {
            closeElement.click();
        },
        setContent(content) {
            contentElement.innerHTML = content;
        }
        };
    }
    
})()

