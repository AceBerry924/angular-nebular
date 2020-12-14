# Scalio Web - Angular Assignment

Web App - Assignment


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
