# Ansh & Vanshika — Wedding Invitation

Next.js + TypeScript + Tailwind CSS. Fully static, no backend.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # production
```

## Editing details

All names, dates, event times, venue and the Google Maps link live in
**`lib/wedding.ts`**. Set `NEXT_PUBLIC_SITE_URL` to the deployed URL so link
previews (WhatsApp, iMessage, etc.) use the correct absolute image URL.

## Structure

- `app/` — layout (fonts, metadata), page, global styles, share image, favicon
- `components/` — page sections, reusable `EventCard`, SVG `ornaments`
- `lib/` — wedding config and reveal-animation helpers
- `assets/fonts/` — fonts used only to render the share image
