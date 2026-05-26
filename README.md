# Auctologue Website & Blog

This repository contains the source code for the Auctologue website. It is built using plain HTML/CSS and powered by [Eleventy (11ty)](https://www.11ty.dev/) for static site generation, which allows us to host a fully integrated, on-brand blog using [Decap CMS](https://decapcms.org/).

## How to Create and Edit Blog Posts

You do not need to edit code to publish new blog posts. You have a private, user-friendly dashboard built right into the website.

### 1. Accessing the Dashboard
Go to your website and append `/admin` to the URL:
👉 **[https://auctologue.com/admin](https://auctologue.com/admin)**

### 2. Logging In
When you visit the admin page, you will be prompted to log in via Netlify Identity.
*   If you haven't set up an account yet, you may need to click "Sign Up" or have the site administrator invite you via the Netlify Identity dashboard.
*   Once logged in, you will see the Decap CMS dashboard where you can view all existing posts.

### 3. Writing a Post
*   Click **"New Blog"** to start a new post.
*   Fill in the **Title**, **Publish Date**, and optional **Summary** and **Featured Image**.
*   Write your content in the **Body** section. The editor supports Markdown and provides a rich-text toolbar for formatting (bold, italics, lists, code blocks for tutorials, etc.).
*   When you are ready, click **Publish**. 
*   *Note: It takes Netlify about 30–60 seconds to rebuild the website. Your new post will appear live on the site after the build finishes.*

## RSS Feed (For LinkedIn Integration)

The blog automatically generates a standard RSS feed every time a new post is published. This is perfect for automatically sharing your updates to LinkedIn, newsletters, or RSS readers.

*   **Your RSS Feed URL:** `https://auctologue.com/feed.xml`

Whenever LinkedIn or any other service asks for your "Blog Feed URL" or "RSS Link," simply paste the URL above. It will automatically fetch your latest titles, summaries, and links.

## Security Statement

**Your blog and data are completely secure.**
Unlike traditional platforms (like WordPress) which rely on active databases that can be hacked, this blog uses a "Static Site Generator" architecture. 

*   **No Database to Hack:** Your blog posts are compiled into flat, static HTML files during the Netlify build process. There is no live database attached to your website for hackers to target.
*   **Secure Authentication:** The `/admin` dashboard is secured via Netlify Identity, utilizing enterprise-grade JSON Web Tokens (JWT).
*   **Encrypted Traffic:** As always, the entire site is served over HTTPS, ensuring that all traffic and login credentials are encrypted. 

## NAA 2026 Survey Pages

As part of Auctologue's marketing and outreach, there are two specialized pages dedicated to the National Auction Association (NAA) Conference & Show 2026.

### 1. The Survey Page
👉 **[https://auctologue.com/NAA_CS_2026_Survey](https://auctologue.com/NAA_CS_2026_Survey)**

This page contains a seamlessly embedded Google Form for users to share their feedback and enter a giveaway. Send this URL directly to users (via email, social media, or chat) to direct them to the survey.

### 2. The QR Code Page
👉 **[https://auctologue.com/NAA_CS_2026_Survey_QR](https://auctologue.com/NAA_CS_2026_Survey_QR)**

This page automatically generates a massive, high-quality, branded QR Code.
*   **How to use it:** You can display this page on an iPad, laptop, or TV screen at a booth during the NAA Conference. Attendees can simply point their phone cameras at the screen, which will immediately open the survey page on their mobile devices.
*   **Security & Reliability:** The QR code is drawn dynamically in the browser to ensure the highest possible resolution on any screen size.

## Local Development

If you want to run the site on your own computer to test code or design changes:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the local development server:
   ```bash
   npm run start
   ```
3. Open your browser to the localhost address provided in the terminal (usually `http://localhost:8080`).

*(Note: The `/admin` dashboard requires a live Netlify connection, so you typically manage content on the live site rather than locally).*
