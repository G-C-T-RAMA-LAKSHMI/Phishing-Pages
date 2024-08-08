# Phishing Project

A simple phishing site created for educational purposes. This project demonstrates how phishing attacks work by simulating a login page that captures user credentials.

## Phishing:

**Phishing** is a cyber attack where an attacker disguises themselves as a legitimate entity to trick individuals into providing sensitive information, such as usernames, passwords, and credit card details. This is typically done through fraudulent emails, websites, or messages that appear to be from trustworthy sources. Phishing is one of the most common and dangerous forms of cybercrime.

## Features:

- **Fake Login Page**: Simulates a login form to capture email and password.
- **Credential Logging**: Stores captured credentials in `logs.json`.
- **Educational Focus**: Intended to raise awareness about the dangers of phishing attacks.

## Prerequisites:

- **Node.js**: [Download and install Node.js](https://nodejs.org/en/download/).

## Setup and Installation:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/phishing-project.git
    cd phishing-project
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the project:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure:

- `index.js`: Main server file.
- `logs.json`: Captured credentials.
- `views/phishing.ejs`: Fake login page.
- `views/success.ejs`: Success message page.

## Ethical Disclaimer:

This project is for educational purposes only. Phishing is illegal and unethical if used for malicious purposes. The intent of this project is to educate individuals about phishing tactics and to help them recognize and avoid such attacks.

## License:

This project is licensed under the MIT License.
