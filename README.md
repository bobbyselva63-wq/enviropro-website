# EnviroPro Solutions — Website (with Backend)

A full website for EnviroPro Solutions built with **Python (Flask)** and
**SQLite**, including a public site and a password-protected Admin Panel.

## Pages

| Page | URL | Description |
|---|---|---|
| Home | `/` | Hero, sectors, services, approach, featured projects, why-us |
| Projects | `/projects` | Full project list (pulled from the database) |
| Contact | `/contact` | Enquiry form — submissions are saved to the database |
| Admin Login | `/admin/login` | Login to the admin panel |
| Admin Dashboard | `/admin` | View/manage enquiries, add/remove projects, change password |

A **WhatsApp floating button** (bottom-right, on every page) opens a chat
with **+91 74188 95070**, the same number used throughout the site.

## Requirements

- Python 3.9+
- pip

## Setup

```bash
cd enviropro-site
pip install -r requirements.txt
python3 app.py
```

The site will be available at **http://localhost:5000**

The database file `enviropro.db` (SQLite) is created automatically on first
run, along with:
- A default admin account
- 3 sample projects (with placeholder Unsplash images)

## Default Admin Login

```
Username: admin
Password: EnviroPro@2026
```

**Change this password immediately** after your first login, using the
"Change Password" panel inside the Admin Dashboard.

## What the Admin Panel Can Do

- View every enquiry submitted through the Contact page (name, email,
  phone, message, date)
- Update an enquiry's status: New → Contacted → Closed
- Delete enquiries
- Add new projects (title, sector, summary, optional image URL) — these
  appear instantly on the Home and Projects pages
- Delete projects
- Change the admin password

## Project Structure

```
enviropro-site/
├── app.py                  # Flask app (routes, DB logic, auth)
├── requirements.txt
├── enviropro.db             # SQLite database (auto-created)
├── templates/
│   ├── base.html            # Shared layout, nav, WhatsApp button, footer
│   ├── index.html           # Home page
│   ├── projects.html        # Projects page
│   ├── contact.html         # Contact page + form
│   ├── admin_login.html
│   └── admin_dashboard.html
└── static/
    ├── css/style.css        # Shared classic forest/gold theme
    └── js/main.js           # Nav toggle + scroll animations
```

## Notes on Images

The seeded sample projects use free stock photography from **Unsplash**
(loaded directly from `images.unsplash.com`, no download needed). Replace
these with your own project photography any time by pasting an image URL
when adding a project in the Admin panel, or by editing the `image_url`
values directly in the database.

## Deploying Beyond Your Own Computer

This ships with Flask's built-in development server, which is fine for
local use or a demo, but is **not meant for production**. To put this
online for real visitors, deploy it behind a production WSGI server such
as **gunicorn** or **waitress**, for example:

```bash
pip install gunicorn
gunicorn -w 2 -b 0.0.0.0:8000 app:app
```

...and host it on a platform like Render, Railway, PythonAnywhere, or a
VPS, pointing your domain at it. Also remember to:
- Set a strong, random `ENVIROPRO_SECRET` environment variable
  (used to sign login sessions)
- Change the default admin password
- Consider switching from SQLite to PostgreSQL/MySQL if traffic grows

## Security Notes

- Passwords are hashed with Werkzeug's `generate_password_hash` (not
  stored in plain text)
- Admin routes are protected by a login-required session check
- This is a lightweight app meant to get you running quickly — for a
  public production launch, have it reviewed before going live with real
  customer data
