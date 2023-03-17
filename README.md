# Individual Project: News Website

## Deadline
We don’t have a strict deadline, but we recommend completing the project in 2 weeks.

## Prerequisites
To participate in the project, you must have:
- Completed all the lessons in Module 1
- Completed all the lessons in Module 2
This means all of your home assignments in these modules should have been approved by mentors.

## Task Description
Imagine you are already working as a web developer. Refocus hired you to create a news website where users can read news on web development. They can mark the news as “read” and “favorite” or delete them from their newsfeed. As a web developer, you need to create this website based on the ready-made design Refocus provided.

## Development Goals

Your goal for this project is to create a news website. To do this, you should:
Check out the design on Figma, and replicate it using HTML, CSS, and Sass with the following characteristics.

This website should have a grid of cards, each representing a short preview
of a news item.

The layout should be responsive and adaptive, so users can open it both on desktop and mobile. It means the number of cards in a row should shrink as the screen size decreases. On a mobile device, there should be one card in each row.

Add the necessary functionality using JavaScript and DOM:
- Mark news as “read”
- Mark news as “favorite”
- Delete news from search results

## Design Implementation
To develop a layout, use the ready-made design on Figma. Replicate the design on your own.
If you feel confident to try something new, refer to the instruction in the next lesson to register on Figma and see the necessary CSS styles, including colors,
sizes, fonts, borders, and distances. Following this path, you will reproduce the real-life task of a front-end developer. This will help you prepare for your future work.

## Action Plan
### Step 1: Explore the design on Figma
- Open the design, and investigate its parts carefully: UI, desktop version, and mobile version.
- Analyze what approaches you may need to use to replicate the design and make the website adaptive.

### Step 2: Replicate the design using HTML, CSS, and Sass
- Create the main page layout using HTML. It should contain the menu and the container, which holds all the news cards.
- Add classnames to the menu and its elements, and implement CSS or Sass styles, so it looks as close as possible to the Figma layout.
- Create cards inside the card container, and style them using Sass. Add a heart and hover effects using the “hover” pseudo-selector.

### Step 3: Implement functions using JavaScript and DOM
- Implement the “like” functionality. When a user clicks on the heart, it should become blue.
- Create a functionality to mark news as “read.” Whenever a user hovers the mouse over the card corner, the checkmark icon shows up. It becomes visible when clicked, indicating the user has read the news.
- Add the ability to remove news from the newsfeed. A user can do this by hovering over the card corner where a cross shows up. When the cross is clicked on, the related news should be deleted from the DOM.

### Step 4: Publish your website to GitHub
Create a public repository on GitHub, and publish your files to it. The repository should contain the following files:
- index.html
- main.sass
- variables.sass
- mixins.sass
- index.js
