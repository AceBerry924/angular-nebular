# Scalio Web - Angular Assignment

Web App - Assignment

## Instruction

### Package Insall

Run `npm install` for installing all packages.

### Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Environment

- Node version `v14.11.0`
- Angular version `v10.1.5`

### Structure

- `components` folder to keep shared components
- `models` folder to keep model of variables
- `pages` folder to keep every pages (ex: Home, Details, ...)
- `services` folder to keep services to handle API control and post data management

## Overview
The goal is to create a simple web application which makes a request to an API, parses the response, and displays the result in the UI. The app will consist of two modules - one home entry module that contains a root index page and one **lazy loaded** detail module.  

## Problem

The app should consist of **two** screens:

A **Home** screen containing two elements

- Text field for entering an 'Id' Integer Value
- 'Send' Button for initiating the request to *`https://jsonplaceholder.typicode.com/posts/{id}`*

A Lazy-loading **Details** screen containing three elements

- Back button/link for returning to the first screen
- Title for displaying the 'title' text of the JSON response
- Text field (non-editable) for displaying the 'body' text of the JSON response

## UI

The UI should appear modern and simple while following best practices around HTML + CSS/SCSS. Creativity is encouraged, so feel free design the UI in any way you wish. However, the app must be functionally complete. 

## Use-Case

- After the app is launched, the **Home** screen is displayed
- The user enters a random Integer value into to the 'Id' field and taps the `Send` button
- The app sends a https request to `https://jsonplaceholder.typicode.com/posts/{id}`, where {id} is the integer value entered by the user
- The app then parses the response from the server. If both the 'title' and 'body' fields exists, the **Details** screen should open and display the corresponding values. If either of the fields are *null*/empty/absent, an error message should be displayed on the **Home** screen.

## Requirements

- The app has to compile and run without issue. It should be stable and reasonably fool-proof, handling all obvious test cases.

## Deliverables

The final deliverable should be a fully-functioning Angular project that compiles and runs locally. A public GitHub repository is the preferred delivery method.


__________________________________________________________________________________________________________________________________________________

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
