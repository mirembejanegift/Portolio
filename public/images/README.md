# Image library guide

Drop your real images here — never stock photos. Each subfolder maps to one place in the site:

| Folder       | Goes to                                        | Notes                                            |
| ------------ | ---------------------------------------------- | ------------------------------------------------ |
| `profile/`   | Hero section portrait                          | One good portrait, landscape or portrait ~4:5    |
| `ugexim/`    | UGExim project gallery                         | Approved screenshots only                        |
| `bodaboda/`  | Boda Boda Payment Tracking gallery             | Screenshots/designs — label drafts as drafts     |
| `cropxcel/`  | CropXcel project gallery                       | Screenshots from the hackathon build             |
| `achievements/` | Hackathon & certificate photographs         | Award photos, team photos, certificate scans     |

## How images get into the site

1. Copy your file into the matching folder (e.g. `ugexim/dashboard.png`).
2. Open `src/data/content.js` and add the **filename** to the project's
   `images` array (e.g. `images: ["dashboard.png", "loans.png"]`).
3. Save — the gallery updates automatically. No component changes needed.

Screenshots currently missing from a gallery automatically show a clean
"supply this image" placeholder, so you always know what is still needed.

## Tips

- Use `.png` or `.jpg`, ideally under ~500 KB per image for fast loading.
- Name files descriptively: `dashboard.png`, `payment-history.png`.
- landscape (~16:10) screenshots look best in the gallery frames.
