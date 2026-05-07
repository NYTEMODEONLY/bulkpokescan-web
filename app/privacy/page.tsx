import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy · BulkPokeScan",
  description:
    "How BulkPokeScan handles your data. Short version: it doesn't. All scanning is on-device, nothing is collected, nothing is tracked.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" lastUpdated="May 7, 2026">
      <div className="callout">
        <strong>The short version</strong>
        BulkPokeScan does not collect, store, transmit, sell, or share any
        personal data. The QR codes you scan never leave your device. There
        are no accounts, no analytics, no advertising, and no third-party
        trackers. The single network request the app makes is a counter
        increment that does not contain user data.
      </div>

      <p>
        This policy describes how the BulkPokeScan iOS app, desktop app, and
        web app (together, &ldquo;BulkPokeScan&rdquo; or &ldquo;the app&rdquo;)
        handle information. It applies to all three flavors. BulkPokeScan is
        operated by NYTEMODE.
      </p>

      <h2 id="data-collection">1. What we collect</h2>
      <p>
        <strong>Nothing personal.</strong> BulkPokeScan does not collect names,
        email addresses, account credentials, payment details, location data,
        contacts, photos, or device identifiers. We do not assign you an
        account. We do not use cookies, advertising identifiers (IDFA),
        analytics SDKs, crash reporters, or third-party trackers.
      </p>
      <p>
        The redemption codes you scan are the entire content of the app, and
        they are stored only on your device.
      </p>

      <h2 id="camera">2. Camera access</h2>
      <p>
        BulkPokeScan requests permission to use your camera for one purpose:
        decoding QR codes printed on Pokémon TCG redemption cards in real
        time. This is disclosed in the iOS permission prompt as:
      </p>
      <blockquote>
        BulkPokeScan uses the camera to scan QR codes on Pokémon TCG
        redemption cards.
      </blockquote>
      <p>
        Camera frames are processed entirely on-device by Apple&rsquo;s
        AVFoundation framework. No frames are saved to disk, sent to a
        server, or otherwise transmitted. When you stop the camera or close
        the app, no record of what was on screen remains.
      </p>
      <p>
        You may revoke camera access at any time in
        Settings &rsaquo; Privacy &amp; Security &rsaquo; Camera &rsaquo;
        BulkPokeScan. The app will continue to work for manually-entered codes
        without camera access.
      </p>

      <h2 id="local-storage">3. Local storage</h2>
      <p>
        Your scanned codes, manually-entered codes, and app settings are
        stored locally on your device using Apple&rsquo;s standard
        <code>UserDefaults</code> mechanism (or, on the web app, browser{" "}
        <code>localStorage</code>). This data:
      </p>
      <ul>
        <li>Stays on your device. It is not synced to iCloud or any server.</li>
        <li>Is deleted when you uninstall the app or clear browser storage.</li>
        <li>
          Is not encrypted at rest by BulkPokeScan beyond the protections iOS
          and your browser provide. Treat scanned codes as you would any other
          sensitive information stored locally.
        </li>
      </ul>

      <h2 id="network">4. The one network request we make</h2>
      <p>
        BulkPokeScan maintains a single global counter showing roughly how
        many codes have been scanned by all users worldwide. The counter
        endpoint is hosted at{" "}
        <code>https://bulkpokescan.app/api/tally</code>. The app interacts
        with it in two ways:
      </p>
      <ul>
        <li>
          <strong>GET</strong> — reads the current global total to show in
          the &ldquo;Cards scanned worldwide&rdquo; counter on the About
          screen.
        </li>
        <li>
          <strong>POST</strong> — sends an empty body when you successfully
          capture a code, incrementing the counter by one.
        </li>
      </ul>
      <p>
        The POST does <strong>not</strong> include the scanned code, your
        name, your email, an account ID, an advertising ID, your device
        model, or any payload that could identify you or what you scanned.
        On the server, the request body is discarded; only the increment is
        persisted, as a single integer in a Redis key named{" "}
        <code>bulkpokescan:total</code>.
      </p>
      <p>
        Like any HTTP request, the connection itself reveals your IP address
        to our hosting provider (Vercel) and to the underlying datastore
        (Upstash Redis). We do <strong>not</strong> log this IP, store it
        with your scan, or retain it for analytics. The only short-lived use
        of your IP is in our rate limiter, which exists solely to prevent
        automated abuse:
      </p>
      <ul>
        <li>
          A sliding-window key (60 requests per minute) is held in Redis
          with your IP as part of the key name.
        </li>
        <li>
          That key auto-expires within the rate-limit window (typically
          under one minute).
        </li>
        <li>
          The key is not associated with any user identity, account, or
          scanned content.
        </li>
      </ul>
      <p>
        If you want to opt out of the global tally entirely, use the
        desktop or web app and block the request via your network firewall,
        or simply do not use the app over a network. The app continues to
        function fully without the counter — the counter is decorative
        social proof, not a feature.
      </p>

      <h2 id="third-parties">5. Third-party services</h2>
      <p>
        BulkPokeScan does not integrate any third-party SDKs in the iOS,
        desktop, or web clients. The web infrastructure that hosts the
        tally endpoint relies on:
      </p>
      <ul>
        <li>
          <strong>Vercel</strong> — hosts the web app and tally API.
          Vercel&rsquo;s privacy policy is at{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            vercel.com/legal/privacy-policy
          </a>
          .
        </li>
        <li>
          <strong>Upstash</strong> — provides the Redis store that holds
          the counter integer and rate-limit keys. Upstash&rsquo;s privacy
          policy is at{" "}
          <a
            href="https://upstash.com/trust/privacy.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            upstash.com/trust/privacy.pdf
          </a>
          .
        </li>
      </ul>
      <p>
        These providers see HTTP requests to our domain. They do not see
        your scanned codes (which never leave your device), do not connect
        requests to user identities, and act only as transport / storage
        infrastructure for the global counter.
      </p>

      <h2 id="children">6. Children&rsquo;s privacy</h2>
      <p>
        BulkPokeScan is rated 4+ on the App Store. We do not knowingly
        collect personal information from anyone, regardless of age. The
        app does not require an account, does not ask for personal
        information, and does not have user-generated content visible to
        other users.
      </p>

      <h2 id="data-rights">7. Your rights</h2>
      <p>
        Because we do not collect personal data, there is nothing for us
        to delete, export, correct, or stop processing on your behalf. To
        remove the only data BulkPokeScan stores anywhere — your local
        codes and settings — uninstall the app or clear your browser
        storage. The action is immediate and irreversible.
      </p>

      <h2 id="changes">8. Changes to this policy</h2>
      <p>
        If we change this policy, the new version replaces the old
        version at this URL and the &ldquo;Last updated&rdquo; date at
        the top changes. Material changes (e.g. introducing any form of
        data collection) will additionally be flagged in the app&rsquo;s
        next release notes. Continued use of the app after a change
        constitutes acceptance of the updated policy.
      </p>

      <h2 id="contact">9. Contact</h2>
      <p>
        Questions about this policy or about BulkPokeScan&rsquo;s
        privacy practices: <a href="mailto:support@nytemode.com">support@nytemode.com</a>.
      </p>

      <h2 id="trademark">10. Trademark notice</h2>
      <p>
        Pokémon is a trademark of Nintendo, Creatures Inc., and GAME
        FREAK Inc. — this app is unofficial and unaffiliated.
        BulkPokeScan does not connect to or interact with any
        Pokémon-branded service.
      </p>
    </LegalShell>
  );
}
