# ⚡ Velocity Sports App

Velocity Sports is a sleek, AI-powered live sports dashboard built with an authentic dark-mode workspace aesthetic.

## 🔥 Key Features

*   **🏈 Live Scoreboards:** Real-time scorecard tracking across NFL Football, Soccer, Tennis, Basketball, MLB Baseball, and Cricket.
*   **📊 Interactive Game Modals:** Click any match to inspect side-by-side comparative boxscore statistics, discipline timelines (goals, yellow & red cards), and official video highlights.
*   **🤖 Gemini AI Assistant:** Embedded sports expert AI assistant powered by Google Gemini.
*   **💬 Google Chat Workspace:** Multi-user social collaboration hub featuring direct messages, group chat rooms, Google Meet calls, live polls, message reactions, and real-time cross-tab memory sync.
*   **🕹️ Arcade Zone:** Built-in retro sports mini-games.

## 🚀 Hosting on GitHub Pages & Automation

This project runs 100% serverless on **GitHub Pages**. 

### Background Cricket Feeds (CI/CD)
Because static sites cannot execute server daemons, live cricket feeds are powered by **GitHub Actions** (`.github/workflows/update_cricket.yml`). Every 15 minutes, GitHub automatically runs `update_cricket.py` and commits fresh scores to `cricket_scores.json`.
