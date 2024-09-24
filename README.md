# Text Analyzer Tool

## Project Overview
**Text Analyzer Tool** is a React-based web application that provides real-time text analysis and string replacement functionality. It allows users to:
- Count the number of **unique words**.
- Display the number of **characters**, excluding spaces and punctuation.
- Replace any given string with a user-specified string.
- Highlight the replaced text in the input area.

## Features
- **Unique Word Count**: Displays the number of unique words entered in the textarea.
- **Character Count**: Displays the number of characters (letters and numbers only) excluding spaces and punctuation.
- **String Replacement**: Allows the user to search and replace text with another string.
- **Highlight Replaced Text**: Replaced strings are highlighted in the output for better visual tracking.

## Installation and Setup
To run this project locally, follow these steps:

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation Steps
1. **Clone the repository**:
   ```bash
   git clone <your-repository-link>

2. **Navigate to the project directory**:
   ```bash
   cd vite-project

3. **Install dependencies**:
   ```bash
   npm install
4. **Build the project: If you want to build a production-ready version**:
   ```bash
   npm run build
5. **Start the development server**:
   ```bash
   npm start
6. Open the app: Open your browser and go to http://localhost:3000 to interact with the app.

## Usage
- Type text into the provided textarea..
- View real-time statistics on unique word count and character count.
- Use the two input fields to search for a string and replace it with another.
- Click the Replace button to see the changes reflected in the textarea, with replaced words highlighted.

## Deployment
- You can deploy the app on platforms like Netlify or Vercel. Before deploying, run npm run build to create an optimized version of the app in the build/ folder.
  Then, follow the deployment steps specific to the platform you're using.

### Technologies Used
- React: Frontend framework.
- CSS: For styling the user interface.
- JavaScript: For core functionality and text processing.



