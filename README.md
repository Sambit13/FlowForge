# 🚀 FlowForge

<div align="center">

### Build. Connect. Automate.

A modern **open-source workflow automation platform** inspired by Zapier and n8n, enabling developers and businesses to build powerful event-driven automations using a visual workflow editor.

**Create ideas as workflows. Connect services. Let FlowForge automate the rest.**

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql)
![Inngest](https://img.shields.io/badge/Inngest-Event--Driven-black)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

---

# ✨ What is FlowForge?

FlowForge is a **visual workflow automation platform** where users can transform ideas into fully automated workflows without writing backend logic.

Instead of manually performing repetitive tasks, simply connect triggers with actions using a node-based editor.

Whether you're building AI automations, notifications, payment workflows, or custom business processes, FlowForge provides the building blocks.

Think of it as:

- ⚡ Zapier for developers
- 🔄 n8n with a modern developer experience
- 🤖 AI-first automation platform

---

# 💡 Build Anything

Imagine ideas like:

- When a Stripe payment succeeds → Send a Discord message
- When someone submits a Google Form → Summarize using Gemini AI
- Receive an HTTP request → Trigger Slack notification
- Generate AI content → Store results
- Chain multiple AI providers together
- Build custom business workflows

If you have an idea...

**FlowForge can automate it.**

---

# 🎬 Demo

> Add screenshots or GIFs here

```
📸 Workflow Builder

📸 Execution Dashboard

📸 Credentials Management

📸 AI Workflow Example
```

---

# ✨ Features

## Visual Workflow Builder

- Drag & Drop node editor
- Connect nodes visually
- Build complex automation pipelines
- Real-time execution tracking

---

## AI Integrations

- Google Gemini
- OpenAI
- Anthropic Claude

Build intelligent workflows using multiple LLM providers.

---

## Built-in Triggers

- HTTP Request
- Manual Trigger
- Stripe Events
- Google Forms

---

## Built-in Actions

- Discord Messages
- Slack Messages
- AI Generation
- Custom HTTP Calls

---

## Authentication

- Google OAuth
- GitHub OAuth
- Better Auth

---

## Workflow Engine

Powered by **Inngest**

- Durable executions
- Retry support
- Event-driven architecture
- Production ready

---

## Credentials Vault

Store sensitive credentials securely.

Supports encrypted API keys for:

- Discord
- Slack
- OpenAI
- Gemini
- Anthropic
- Stripe
- Custom APIs

---

## Execution Monitoring

- Live execution status
- Success & failure tracking
- Stack traces
- Execution duration
- Logs

---

# 🏗 Architecture

```
                User

                 │

                 ▼

        Visual Workflow Builder

                 │

                 ▼

        Workflow Definition

                 │

                 ▼

         Inngest Event Engine

                 │

      ┌──────────┴──────────┐

      ▼                     ▼

 Trigger Nodes          Action Nodes

HTTP                Discord
Stripe              Slack
Forms               Gemini
Manual              OpenAI
                    Claude

      └──────────┬──────────┘

                 ▼

        Execution History

                 ▼

           PostgreSQL
```

---

# ⚙ Tech Stack

## Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Shadcn UI

## Backend

- tRPC
- Prisma ORM
- PostgreSQL
- Better Auth

## Workflow Engine

- Inngest

## AI

- Google Gemini
- OpenAI
- Anthropic

## Monitoring

- Sentry

## Deployment

- Vercel
- Inngest Cloud

---

# 📂 Project Structure

```
src/

 ├── app/
 ├── components/
 ├── features/
 ├── inngest/
 ├── lib/
 ├── generated/
 ├── hooks/
 ├── server/
 └── styles/
```

---

# 🚀 Getting Started

## Clone

```bash
git clone https://github.com/yourusername/flowforge.git

cd flowforge
```

---

## Install

```bash
npm install
```

---

## Environment Variables

Create

```
.env
```

```env
DATABASE_URL=

BETTER_AUTH_SECRET=
BETTER_AUTH_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

OPENAI_API_KEY=

GOOGLE_GENERATIVE_AI_API_KEY=

ANTHROPIC_API_KEY=

POLAR_ACCESS_TOKEN=

INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=

ENCRYPTION_KEY=

NEXT_PUBLIC_APP_URL=
```

---

## Database

```bash
npx prisma generate

npx prisma migrate dev
```

---

## Run

```bash
npm run dev
```

Start Inngest

```bash
npx inngest-cli@latest dev
```

---

# 🚀 Production Deployment

Deploy on

- Vercel

After deployment:

### Sync your app with Inngest

```
https://YOUR_DOMAIN/api/inngest
```

Add:

```
INNGEST_EVENT_KEY
```

```
INNGEST_SIGNING_KEY
```

Redeploy.

---

# 🧩 Supported Nodes

## Trigger Nodes

- Manual Trigger
- HTTP Trigger
- Stripe Trigger
- Google Form Trigger

---

## AI Nodes

- Gemini
- OpenAI
- Anthropic

---

## Communication

- Discord
- Slack

---

## More Coming Soon

- Gmail
- WhatsApp
- Telegram
- GitHub
- Notion
- Google Sheets
- Airtable
- Supabase
- MongoDB
- PostgreSQL
- Firebase
- AWS
- Azure
- Docker
- Webhooks
- Cron Jobs

---

# 🤝 Contributing

Contributions are always welcome.

Whether it's

- Bug fixes
- New integrations
- Documentation
- Performance improvements
- UI enhancements
- New workflow nodes

Feel free to open an issue or submit a pull request.

---

# 💡 Roadmap

- [ ] Workflow Templates
- [ ] Marketplace
- [ ] Node SDK
- [ ] Team Collaboration
- [ ] Version History
- [ ] Scheduled Workflows
- [ ] Conditional Nodes
- [ ] Loop Nodes
- [ ] Variables
- [ ] Secrets Manager
- [ ] Node Marketplace
- [ ] Plugin System
- [ ] Mobile Dashboard
- [ ] WebSocket Live Updates
- [ ] Kubernetes Deployment
- [ ] Docker Image
- [ ] Workflow Analytics

---

# 🌟 Why FlowForge?

Most automation platforms are either:

- Too expensive
- Closed source
- Hard to customize

FlowForge is designed to be:

- Open Source
- Developer Friendly
- Modern
- AI Native
- Event Driven
- Extensible

---

# ❤️ Support

If you found this project useful,

⭐ Star the repository

🍴 Fork it

🐛 Report bugs

💡 Suggest new workflow nodes

---

# 📜 License

This project is licensed under the MIT License.

---

<div align="center">

## 🚀 Turn Ideas into Automations

### Build once. Automate forever.

Made with ❤️ using Next.js, Prisma, Inngest & TypeScript.

</div>
