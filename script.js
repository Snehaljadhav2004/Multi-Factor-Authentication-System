const correctPassword = 'password123';
let generatedOTP = '';

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function validatePassword() {
    const passwordInput = document.getElementById('password').value;
    if (passwordInput === correctPassword) {
        document.getElementById('login-form').style.display = 'none';
        generatedOTP = generateOTP();
        document.getElementById('otp-display').textContent = generatedOTP;
        document.getElementById('otp-form').style.display = 'block';
    } else {
        alert('Invalid Password');
    }
}

function validateOTP() {
    const otpInput = document.getElementById('otp').value;
    if (otpInput === generatedOTP) {
        alert('Login Successful!');
        // Redirect or load next page
    } else {
        alert('Invalid OTP');
    }
}
