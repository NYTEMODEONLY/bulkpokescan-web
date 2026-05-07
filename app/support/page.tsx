import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Support · BulkPokeScan",
  description:
    "Help, troubleshooting, and contact information for BulkPokeScan — the Pokémon TCG redemption-code scanner.",
};

export default function SupportPage() {
  return (
    <LegalShell title="Support" lastUpdated="May 7, 2026">
      <p>
        BulkPokeScan is built and maintained by NYTEMODE. If you run into
        a problem the troubleshooting below doesn&rsquo;t solve, email
        us — we read every message.
      </p>

      <div className="callout">
        <strong>Contact</strong>
        <a href="mailto:support@nytemode.com">support@nytemode.com</a> —
        please include your device model, iOS version, and app version
        (Settings &rsaquo; About on iOS) so we can reproduce the issue.
      </div>

      <h2 id="getting-started">Getting started</h2>
      <h3>How does BulkPokeScan work?</h3>
      <p>
        Open the app, tap <strong>Start Camera</strong>, and hold a
        Pokémon TCG redemption card 6&ndash;12 inches from the lens with
        even lighting. The QR code on the back of the card decodes
        automatically and is added to your list with a number tag like
        <code>#001</code>. When you&rsquo;re done, switch to the{" "}
        <strong>Code Blocks</strong> tab to grab them in groups of ten,
        or use <strong>Export</strong> to save a TXT or Markdown file
        you can paste into your collection tracker, the official
        Pokémon TCG Live app&rsquo;s redemption screen, or anywhere
        else.
      </p>

      <h3>Does it work without internet?</h3>
      <p>
        Yes. All scanning, code storage, and export are 100% local. The
        only thing the network is used for is reading and incrementing
        the worldwide counter shown on the About screen — and the app
        works fine without that too.
      </p>

      <h3>Is it really $4.99 forever?</h3>
      <p>
        Yes. One-time purchase, no subscriptions, no in-app purchases,
        no upsells. You buy it once, you own it. Future updates are
        free as long as the app is supported.
      </p>

      <h2 id="troubleshooting">Troubleshooting</h2>

      <h3>The camera doesn&rsquo;t start, or the screen is black</h3>
      <p>
        Open <strong>Settings &rsaquo; Privacy &amp; Security &rsaquo;
        Camera</strong> on your iPhone and confirm BulkPokeScan is
        enabled. If the toggle is off, the app shows a black scanner
        view. If you accidentally denied the prompt the first time you
        opened the app, you can re-enable it here.
      </p>

      <h3>QR codes aren&rsquo;t being recognized</h3>
      <ul>
        <li>
          Hold the card 6&ndash;12 inches from the lens. Closer or
          farther reduces detection accuracy.
        </li>
        <li>
          Make sure the QR code is well-lit. Dim or angled lighting
          can cause the camera to focus past the code.
        </li>
        <li>
          Tap the viewfinder to refocus. The autofocus prefers the
          tap target.
        </li>
        <li>
          Use the torch button if you&rsquo;re in low light.
        </li>
        <li>
          Pinch to zoom in if the code is small or the card is far
          away.
        </li>
        <li>
          If the QR code itself is damaged or printed poorly, tap
          <strong>Add Code</strong> and type the redemption code
          manually.
        </li>
      </ul>

      <h3>Scanning the same card adds it twice</h3>
      <p>
        BulkPokeScan dedupes by code value — the second scan of the
        same card is silently ignored and you&rsquo;ll feel a
        warning haptic. If you&rsquo;re still seeing duplicates, the
        printed QR codes might genuinely encode different values
        (this happens occasionally with damaged or smudged codes).
        You can long-press a code in the list to remove it.
      </p>

      <h3>Sound or haptics aren&rsquo;t firing on capture</h3>
      <p>
        Both are toggleable in <strong>Settings</strong>. Sound also
        respects your iPhone&rsquo;s ringer switch — flip the
        side-switch to ring mode to hear the capture chime.
      </p>

      <h3>Share Sheet is empty or missing options</h3>
      <p>
        BulkPokeScan exports a real text file via Share Sheet, so
        you should see Files, Mail, Notes, Messages, AirDrop, and any
        other app that accepts <code>.txt</code> attachments. If a
        specific app isn&rsquo;t showing up, that app may not be
        registered for plain text — we can&rsquo;t add apps to the
        sheet from our side. Try AirDropping to a Mac, or copy to
        clipboard via the <strong>Copy All</strong> button as a
        fallback.
      </p>

      <h3>The worldwide counter says 0 or won&rsquo;t load</h3>
      <p>
        The counter requires a network connection. If you&rsquo;re
        offline, it shows the last known value (or zero). If you
        capture codes while offline, the increment doesn&rsquo;t
        retry when you reconnect — your local list is still saved,
        only the global tally bump is dropped. This is intentional
        to keep the privacy posture as simple as possible.
      </p>

      <h3>I lost my codes after restarting the app</h3>
      <p>
        BulkPokeScan persists every captured code to local storage
        immediately. If your list is empty after a restart, either
        (a) you tapped <strong>Clear</strong> from the codes view —
        try Undo (shake your device or use the Undo control); or
        (b) the storage was wiped by iOS due to extreme storage
        pressure, which is rare but possible. We do not currently
        sync to iCloud (by design — see Privacy Policy). If a
        recovery feature would help you, email us; we&rsquo;ll
        consider it.
      </p>

      <h2 id="feature-requests">Feature requests &amp; bugs</h2>
      <p>
        We read every email at{" "}
        <a href="mailto:support@nytemode.com">support@nytemode.com</a>.
        Useful information to include:
      </p>
      <ul>
        <li>iPhone model (e.g. iPhone 15 Pro Max)</li>
        <li>iOS version (Settings &rsaquo; General &rsaquo; About)</li>
        <li>App version (BulkPokeScan &rsaquo; Settings &rsaquo; About)</li>
        <li>What you were doing, and what happened vs. what you expected</li>
        <li>A screenshot or short screen recording, if relevant</li>
      </ul>

      <h2 id="legal">Legal</h2>
      <p>
        <a href="/privacy">Privacy Policy</a> &middot;{" "}
        <a href="/terms">Terms of Use</a>
      </p>

      <h2 id="trademark">Trademark notice</h2>
      <p>
        Pokémon is a trademark of Nintendo, Creatures Inc., and GAME
        FREAK Inc. — this app is unofficial and unaffiliated.
      </p>
    </LegalShell>
  );
}
