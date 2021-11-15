# Lujam-Jersey Project Handover Notes

This is more detailed look at the project. Reviewing the structure, functionality and any unresolved issues with the project.

## Folder Structure

The `src` folder contains the following:

**Assets**: each page of the website has a folder with the relevant images, there is a global folder for images used all over the site. Variables, mixins and typography scss files are kept in the Styles folder.

**Components**: all of the website’s reusable UI components. Each of the components has its own folder with `.jsx` and `.scss` files within.

**Containers**: the files are either pages containing the business logic, or files that link together multiple components. Each of the containers has its own folder with `.jsx` and `.scss` files within.

**Context**: contains the authenticated user state which is passed to the rest of the website. The Firebase SDK is used to handle the authentication in this context file.

**Data**: has the data file Richard sent over plus mock data created to show how various components would work – eg user data to show the security score, alert data to fill up the alerts page.

**firebase.js**: contains the firebase SDK config to setup authentication.

## App Features & Pages

Each page has been built component based. This means that the components on the page have been made to be reusable. These dynamic components are able to adapt to different situations. For example the graph is able to react to different data and show the results.

Below we break down each of the features / pages of the project. We also show how you can make the components respond to different bits od data. In order to do this you will have had to set up the project. Follow the setup steps in the [readme](./README.md) to get the project going.

### Sign up & login:

A user is able to sign up, create a password and use this to login in to the website. The sign up form checks for password length, that it has at least one uppercase letter and that it doesn't match a password already in use. The website is inaccessible without logging in. If a user has forgotten their password, they can reset their password by providing their email address. They will be sent a link which will take them to a page to set a new password. Once complete they will be logged in again.

### Security Page:

Once logged in the user will land on the security page. This displays a security score chart with a key, the calculation summary and the devices can be accessed from the bottom of the page. The security score has been hooked up to a mock data file of users with different scores. Different users can then be passed in to the chart and it will display their score. This can be done from the ‘SecurityScore.jsx’ file in the components folder.

1. Open the SecurityScore.jsx file in the components folder.
2. Find the following code block on line 10:

```jsx
// SecurityScore.jsx
// line 10
const userScore = users[0].score;
```

3. Passing an index between 0 and 4 will give the chart a different score to display. The mock data currently has five users to represent the five score ranges.

```jsx
// SecurityScore.jsx
// Changing the [0] will demo different scores
const userScore = users[1].score;
```

4. The mock user data can be found in the users.js file in the data folder.

### Header:

The page header will have the user’s name in the top right corner and a dropdown menu will give the option to logout.

### Navigation:

Each link will take the user through to the correct page. User can logout using the logout out button at the bottom of the nav bar.

### Dashboard:

This contains four graphs built using the chart package Chart.js. The three line graphs are built using a reusable component which we have given mock data. The data is in the ‘Dashboard.jsx’ file in the containers folder. Data points, labels, icons, titles can be changed and the y-axis will respond dynamically to the inputs.

1.  Open Dashboard.jsx in the containers folder.
2.  On line 9 you'll find the following code block:

```jsx
// Dashboard.jsx
// line 9
const largeLineGraphTitle = "Devices on Network";
const largeLineGraphSubtitle = "Provides an overview of the number of devices on the network over the past week";
const largeLineGraphData = [60, 125, 190, 160, 100, 140, 50];
const largeLineGraphLabels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const largeLineGraphMax = 300;
const largeLineGraphHoverLabel = "Devices on Network";
```

3.  Here you can change the inputs and the graph will re-render with the new information. This code block is for the 'Devices on Network' graph. Below in 'Dashboard.jsx' you find the data for the other graphs on the dashboard page that can also be changed if required.

### Devices:

This page contains a list of devices on the network, supplied with a data file sent over by Lujam (devicesResponse.js). The user can search for device by name using the search bar above the table. Clicking on a device name will take the user to a new page with further information – including the ability to block the device, see the last location on a map (if available) and go through to an edit device form. The location comes from the the last IP address key found in the (devicesResponse.js) file, and uses an api response to calculate the position. We added a few new key value pairs to each object in the array so that we could render the information the same as the wire-frame design.

1.  Open devicesResponse.js in the data folder.
2.  On line 33 you'll see the new data we added to the first device:

```js
"deviceType": "mobile",
"model": "iPhone X",
"opSystem": "OSX",
"securityRisk": "Low"
```

3.  Similar information was added to the other devices in the data file.

### Alerts:

A table of all the alerts on the network. The information displayed renders from a mock data file(alerts.js). The filter icon provides options to filter by alert type, when the alert was created and importance level. The user can reset any selected filters and once the filter box is closed there will be a small number above the filter icon to let the user know that filters have been applied and how many. The user can also search the alerts by summary.

---

## Outstanding Bugs

- The project is not connected to any back end so all of the data has been mocked.

- The Sort and Filter functionality on the Device List component does not function. They are just placeholders at the moment. The search by device name is functioning.

- The application has been design to work on two view-ports, mobile and desktop this means between those view ports the styles could do with some tweaks.

- If the application is frequently refreshed the authenticated user can be lost and will have to log in again.

- On a mobile viewport the log out button on the navigation drop down will not log you out.

---

## Resources

- [Live Site](https://lujam-jersey.web.app/)

- [Github](https://github.com/nology-tech/jersey-client-project)

- [Trello board](https://trello.com/b/i8XdG2dy/lujam)

- [Wireframes](https://www.figma.com/file/RV6ZK8nzvqFlTZoG37TwUU/Lujam-Portal-V2?node-id=82%3A5204)

- [Component Tree](https://app.mural.co/t/nology9400/m/nology9400/1633956427717/269b5197e35226c963e0b12c400b3d4e320d472a?sender=7c279945-50d0-47df-836c-0152f8cf5bad)

---
