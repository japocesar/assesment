# Requirements
1. Angular CLI: https://github.com/angular/angular-cli
2. NodeJS: https://nodejs.org/es/

# Assesment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

# Clone repo
git clone https://github.com/japocesar/assesment.git

# Install dependencies
In command propmt go to project folder and run
    - npm install

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Functional Requirements

### Transfer Money

The user is be able to transfer money using the Transfer Money form.

---

As a user I should be able to:

1. The "FROM ACCOUNT" field is pre-filled with account information - (account type, id, and balance)
2. When user press on Submit button the form is disabled and the Transfer button appears.
3. When user press "Transfer" on the preview screen:
    - The new transfer is pushed to the transactions list
    - The balance in the "FROM ACCOUNT" field is updated
    - A confirmation message is displayed
    - The form is reset

Non-functional requirements:

- Form is reset to its initial state after the transfer has been completed successfully
- A user is not able to transfer an amount greater than the balance
- If form is invalid the Submit button is disabled

### Transaction History

User is able to view recent transactions in an ordered list.

User is able to search the recent transactions by typing a merchant name in the search field.

User is able to sort by recent transactions by Date, Amount and Beneficiary by clicking the corresponding sorting action.

---

As a user I should be able to:

1. View a list of my recent transactions.
2. See the transactions list updated with the new transaction when a new money transfer has taken place.
3. Filter by merchant name the transactions list
    - The transactions list should update immediately at every keystroke
    - If there is no results a message is shown
4. Clear the filter by clicking an 'x' icon in the Search field.
4. Sort (ascending/descending) the transactions list by Date, Beneficiary and Amount.

Non-functional requirements (bonus points):

- The Sorting order (ascending/descending) is persistent across all sorting options; i.e. If you are sorting by beneficiary ASC and switch the sorting option to Amount, the sorting order should stay ASC
- i18n: We can find the option for languages ( En | Es) in the navbar
- Remote repository: https://github.com/japocesar/assesment.git
- Github Pages: https://japocesar.github.io/assesment/home
    - I couldn't fix the path for i18 :(
