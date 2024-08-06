<table align="center">
  <tr>
    <td align="center">
     <img src="https://i.postimg.cc/YCjQKyyC/project-Three1.jpg" border="0" width="800" height="400">
    </td>
  </tr>
</table>

# Lost and Found Management System

## Overview

The main objective of the Lost and Found Management System is to effectively handle lost and found items. It offers a central database to keep track of lost goods and streamline the process of restoring lost objects to their rightful owners. By providing a more efficient process for managing lost and found items, the system aims to reduce the time and effort needed to manage these items, lower the number of lost items that are never claimed or returned to their owners, and improve student service.

## Scope
The scope of the Lost and Found Management System is to provide students with a platform to report lost items and enable others to look for and possibly claim items that are found. This system can be implemented as a website and used in various contexts, such as university transportation, on campus, in hostels, etc.

## Features

**1. Student Registration:**
Students can create an account by providing their name, student ID, email, and password. They will verify their email address to activate their account, enabling them to report and manage lost and found items.

**2. Item Submission:**
Students can submit details of lost or found items, including item description, date and time of loss/found, and location. This information is stored in a central database for tracking and matching purposes.

**3. Search Functionality:**
Students can search for lost items using keywords, dates, and locations. Advanced search algorithms and machine learning techniques match lost and found items, alerting students when a potential match is found.

<table align="center">
  <tr>
    <td align="center">
     <img src="https://i.postimg.cc/wM2RnSKF/Screenshot-2024-08-07-042750.png" border="0" width="400" height="250">
    </td>
     <td align="center">
     <img src="https://i.postimg.cc/bJNh3MTq/Screenshot-2024-08-07-042840.png" border="0" width="400" height="250">
    </td>
  </tr>
</table>

**4. Alerting Mechanisms:**
Automated notifications are sent to students via email or SMS when their lost items have been located, ensuring timely and efficient communication.

**5. Reporting Capabilities:**
The system generates comprehensive reports and analytics, providing insights into lost and found trends. These reports help in effective management and decision-making regarding lost and found items.

**6. Additional Features:**
Includes functionalities such as student feedback and reviews, integration with social media platforms for wider reach, and compatibility with other systems like transportation management systems for seamless operation.

<table align="center">
  <tr>
    <td align="center">
     <img src="https://i.postimg.cc/cCDDckJt/Screenshot-2024-08-07-043257.png" border="0" width="400" height="250">
    </td>
     <td align="center">
     <img src="https://i.postimg.cc/zfmxpgq7/Screenshot-2024-08-07-043611.png" border="0" width="400" height="250">
    </td>
  </tr>
</table>

## Installation and Setup
**1. Prerequisites**
  - [Node.js](https://nodejs.org/)
  - [XAMPP](https://www.apachefriends.org/index.html) (for MySQL database)

**2. Database Setup**
  - Open XAMPP and start the MySQL and Apache servers.
  - Create a database named `muntazer` in phpMyAdmin.
  - Import the database tables from the `database` folder into the `muntazer` database.

**3. Project Setup**
- Clone the repository:
     ```bash
     git clone https://github.com/your-username/lost-and-found-management-system.git
     ```
- Navigate to the project directory:
     ```bash
     cd lost-and-found-management-system
     ```
- Install the required dependencies:
     ```bash
     npm install
     ```
- Start the server:
     ```bash
     npm start
     ```
     The server will run on `http://localhost:4000`.

## Usage
**1. Reporting a Lost Item**
  - Register and log in to the system.
  - Navigate to the "Report Lost Item" section.
  - Fill in the details of the lost item and submit the form.

**2. Reporting a Found Item**
  - Log in to the system.
  - Navigate to the "Report Found Item" section.
  - Fill in the details of the found item and submit the form.

**Searching for Lost Items**
  - Log in to the system.
  - Use the search functionality to look for lost items.
  - If you find a matching item, claim it through the system.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.
