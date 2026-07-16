# Aaron Johns - Engineering Portfolio

A highly polished, production-ready portfolio website for Aaron Johns, showcasing experience and projects in Artificial Intelligence, Data Science, and Robotics.

## Project Architecture

This project was built utilizing modern web technologies to ensure performance, SEO, and developer experience.

*   **Framework:** Next.js 15+ (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (Dark Mode enforced)
*   **Animations:** Motion (Framer Motion)
*   **Icons:** Lucide React

## Development Setup

To run this project locally, ensure you have Node.js installed, then execute the following commands:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    npm run start
    ```

## Structure Overview

*   `app/page.tsx`: The primary portfolio view, constructed with a clean layout and semantic HTML elements. It contains interactive sections for Leadership, Projects, Skills, Awards, and Education.
*   `app/layout.tsx`: Contains the root structural setup, SEO metadata, and enforces the deep dark mode aesthetic (`bg-zinc-950`).
*   `app/globals.css`: Imports Tailwind CSS and sets up the global scope.

## Design Philosophy

The aesthetic is designed to be deeply professional, modern, and clean. It uses a high-contrast dark theme by default, ensuring readability while providing a premium feel. Smooth transition states and crisp layouts reinforce a strong visual hierarchy, avoiding generic portfolio templates in favor of a customized engineering showcase.
