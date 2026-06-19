# Snoodle Doodles HQ – checkout review page

This package adds a `/checkout/` page so customers can review their basket before going to PayPal.

Included:
- checkout review page
- basket icon now links to `/checkout/`
- quantity editing
- remove item button
- subtotal, item count, shipping, handling and total
- PayPal handoff form using the basket contents
- editable checkout settings in `src/content/checkout/settings.md`
- Pages CMS checkout settings collection

Important:
- replace `YOUR_PAYPAL_EMAIL@example.com` in `src/content/checkout/settings.md`
- this is a simple static PayPal handoff, suitable for a basic prototype
- for a serious store, use server-side PayPal Orders API checkout so prices cannot be tampered with in the browser

Run:

```sh
npm install
npm run build
```
