# AI Interview Avatar
AI Interview Avatar is an interactive platform designed to simulate technical interviews. This AI-driven avatar allows users to select a technology stack, customize the number of questions, and take a simulated interview. Questions range from easy to hard, drawn from a pre-built database. After the interview, the AI evaluates responses and provides a score based on a comparison of the user's answers with the ideal solutions from the database.

---

## 🚀 Features

- **Customizable Interviews**: Choose the tech stack and number of questions.
- **Difficulty Grading**: Questions are pulled based on the difficulty levels (easy, medium, and hard).
- **Response Tracking**: User responses are recorded and stored.
- **Automated Scoring**: After the interview, responses are evaluated using OpenAI, with scores provided based on relevance and accuracy.

## 📹 Demo

[Watch the Demo Video](Demo_Video.mp4)

## 📂 Project Structure

- `database/`: Contains the database of questions categorized by tech stack and difficulty.
- `server/`: Backend logic for fetching questions, storing responses, and managing API requests to OpenAI.
- `client/`: Frontend interface for users to interact with the AI avatar and take the interview.
- `models/`: Core models for handling user and question data.

## 🛠️ Technologies Used

- **Backend**: Node.js, Express, and OpenAI API
- **Frontend**: React, CSS, and Material UI
- **Database**: MongoDB (for storing questions and responses)

## 📝 Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (or use a remote MongoDB service)
- OpenAI API Key

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/ai-interview-avatar.git
   cd ai-interview-avatar
