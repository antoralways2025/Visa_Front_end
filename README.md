# Global Visa Hub - Next.js Frontend

Responsive visa consultancy / study abroad landing page built with Next.js App Router, TypeScript, and Lucide icons. It follows the two supplied visual references with a clean navy/blue palette, destination imagery, service cards, team section, bilingual English/Bangla switcher, and consultation form UI.

## Requirements
- Node.js 18.17+ (Node.js 20 LTS recommended)
- npm
- Internet connection for remote Unsplash images and Google Fonts

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Production build
```bash
npm run build
npm run start
```

## Deploy for free
### Vercel (recommended for Next.js)
1. Push this folder to a GitHub repository.
2. Sign in to Vercel and import the repository.
3. Keep Framework Preset set to Next.js.
4. Build command: `npm run build` (usually detected automatically).
5. Deploy. The free Hobby tier is suitable for personal/demo projects, subject to Vercel's current terms and limits.

### Other options
- Netlify can deploy Next.js using its Next.js adapter, subject to current plan limits.
- Cloudflare Pages is most straightforward for static exports. If you want to use static export, add `output: "export"` in `next.config.mjs`; however, this frontend currently uses no server routes and can be exported statically. Confirm image handling and hosting adapter requirements before changing the config.

## Frontend-only status
This is the frontend phase only:
- Consultation form validates in the browser and shows a demo success message. It does not send or store the submission.
- Admin / team login is only a demo alert, not real authentication.
- No MongoDB, API, authorization, or protected dashboard is included yet.
- Replace demo team details, sample testimonial, email, phone number, and brand information before launch.
- Images are served from Unsplash URLs; use approved images or download/host your own for production.

## Next backend phase
The backend can later use Express + MongoDB (MERN-style API) with secure admin/team authentication, role-based access control, inquiry assignment, and a real consultation endpoint. The frontend form can then POST to that API.
