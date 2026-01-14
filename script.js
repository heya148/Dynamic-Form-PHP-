const formFields = [
    { label: "Full Name", type: "text", name: "fullName", placeholder: "Enter your name" },
    { label: "Email Address", type: "email", name: "email", placeholder: "Enter your email" },
    { label: "Password", type: "password", name: "password", placeholder: "Choose a password" },
];

const formContainer = document.getElementById('registration-form');

// Function to create and append form fields
function createForm(fields) {
    fields.forEach(field => {
        const fieldWrapper = document.createElement('div');
        
        const label = document.createElement('label');
        label.textContent = field.label;
        
        const input = document.createElement('input');
        input.type = field.type;
        input.name = field.name;
        input.placeholder = field.placeholder;
        
        fieldWrapper.appendChild(label);
        fieldWrapper.appendChild(input);
        formContainer.appendChild(fieldWrapper);
    });
    
    // Add a submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Register';
    formContainer.appendChild(submitButton);
}

// Call the function to build the form
createForm(formFields);