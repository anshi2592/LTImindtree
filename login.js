class FormHandler {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.initialize();
    }

    initialize() {
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting normally
        // Here you can add further validation or processing logic
        console.log('Email:', this.form.email.value);
        console.log('Password:', this.form.password.value);
        // Normally, you'd handle the login logic here
    }
}

// If you have other forms that might inherit some basic behaviors
class AdvancedFormHandler extends FormHandler {
    constructor(formId) {
        super(formId);
    }

    // You can override the handleSubmit to do more complex tasks
    handleSubmit(event) {
        super.handleSubmit(event); // Call the base class method
        // Additional tasks can be added here
        console.log('Advanced form processing...');
    }
}

// Create an instance of the form handler
new FormHandler('loginForm');
