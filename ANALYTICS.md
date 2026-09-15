# Free interaction analytics

The site sends page views to Google Analytics 4 (`G-SWGFTD0ZF4`). This setup adds conversion and interaction events without sending form values or other personal information.

## 1. Enable Microsoft Clarity (free heatmaps and recordings)

1. Create a project at [Microsoft Clarity](https://clarity.microsoft.com/).
2. Copy its project ID from **Settings → Setup**.
3. In Vercel, add `NEXT_PUBLIC_CLARITY_PROJECT_ID` with that ID for Production (and Preview if wanted), then redeploy.
4. Open the site and confirm a recording appears in Clarity. It can take a few minutes.

Clarity is not loaded until this variable is set. If visitors are covered by a consent requirement, only set/load it after the appropriate analytics consent.

## 2. Read the GA4 events

Open **Reports → Engagement → Events** in GA4. The useful events are:

- `lead_form_submit` — successful contact or popup lead; mark this as a key event/conversion.
- `cta_click` — source is `hero`, `pricing`, `final`, or `floating`.
- `contact_click` — phone or text intent, with placement.
- `kickstart_popup_view` / `kickstart_popup_dismiss` — whether the popup helps or interrupts.
- `scroll_depth` — 25%, 50%, and 75% page depth.
- `schedule_day_selected` and `faq_open` — content visitors actively explore.

Use the `form_location`, `cta_source`, `method`, `location`, `percent`, `day`, and `question_number` parameters as custom dimensions only if you need them in standard GA4 reports; they are visible in DebugView immediately.

GA4 Enhanced Measurement should also remain enabled for its built-in 90% scroll and outbound-click collection.
