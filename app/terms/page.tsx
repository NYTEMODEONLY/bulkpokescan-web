import type { Metadata } from "next";
import { LegalShell } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Use · BulkPokeScan",
  description:
    "The terms governing your use of BulkPokeScan. Plain English. Short.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Use" lastUpdated="May 7, 2026">
      <p>
        By installing or using BulkPokeScan (the &ldquo;App&rdquo;), you
        agree to these Terms of Use. If you don&rsquo;t agree, please
        don&rsquo;t use the App. The App is provided by NYTEMODE
        (the &ldquo;Provider&rdquo;).
      </p>

      <h2 id="what-the-app-does">1. What the App does (and doesn&rsquo;t do)</h2>
      <p>
        BulkPokeScan is a personal-productivity utility for organizing
        Pokémon Trading Card Game redemption codes that you have
        legally obtained through retail-purchased physical cards. The
        App reads QR codes printed on those cards using your
        device&rsquo;s camera and helps you compile, group, and export
        the resulting code strings.
      </p>
      <p>
        The App <strong>does not</strong>:
      </p>
      <ul>
        <li>Generate, mint, or fabricate redemption codes.</li>
        <li>
          Validate redemption codes against any Pokémon-branded
          service.
        </li>
        <li>Redeem codes on your behalf.</li>
        <li>
          Trade, sell, exchange, or transmit your codes to anyone or
          anything other than the storage on your own device.
        </li>
        <li>
          Connect to any official Pokémon service, account, or game
          (BulkPokeScan is unofficial and unaffiliated).
        </li>
      </ul>

      <h2 id="your-responsibilities">2. Your responsibilities</h2>
      <p>
        You agree to use the App only with redemption codes that you
        legally own — typically, codes printed on physical Pokémon TCG
        cards you purchased from a licensed retailer. You agree not to
        use the App to:
      </p>
      <ul>
        <li>
          Process codes you don&rsquo;t own or have permission to
          process.
        </li>
        <li>
          Attempt to decode anything other than QR codes on Pokémon
          TCG cards (the App may technically decode any QR code, but
          it&rsquo;s designed and tested only for that use case).
        </li>
        <li>
          Reverse-engineer, decompile, or extract source code from
          the App, except to the extent the law expressly permits.
        </li>
        <li>
          Resell, redistribute, or rent the App, or attempt to
          circumvent App Store license terms.
        </li>
        <li>Use the App to violate any law.</li>
      </ul>

      <h2 id="purchase">3. Purchase, refunds, billing</h2>
      <p>
        BulkPokeScan is a one-time paid purchase through the Apple
        App Store. There are no subscriptions, no in-app purchases,
        and no recurring charges from the Provider. Apple processes
        your payment, controls regional pricing, and handles
        refunds. If you want a refund, request it through{" "}
        <a
          href="https://reportaproblem.apple.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          reportaproblem.apple.com
        </a>{" "}
        — the Provider has no ability to issue App Store refunds.
      </p>

      <h2 id="updates">4. Updates and availability</h2>
      <p>
        We may release updates that fix bugs, add features, or
        change the App&rsquo;s appearance. We may also discontinue
        the App or specific features at our discretion. We&rsquo;ll
        do our best to give advance notice for material changes,
        but we don&rsquo;t guarantee continuous availability of the
        App or the worldwide-counter endpoint.
      </p>

      <h2 id="ip">5. Intellectual property</h2>
      <p>
        BulkPokeScan, including its name, design, code, icon, and
        the &ldquo;Bulk + PokeScan&rdquo; two-tone wordmark, is
        owned by NYTEMODE. You receive a personal, non-exclusive,
        non-transferable license to use the App on Apple devices
        you own or control, subject to these Terms and the App
        Store license agreement.
      </p>
      <p>
        Pokémon is a trademark of Nintendo, Creatures Inc., and
        GAME FREAK Inc. — BulkPokeScan is unofficial and
        unaffiliated. Names of cards, sets, and characters that may
        appear in your scanned codes remain the property of their
        respective owners. Nothing in these Terms grants you any
        right to those trademarks.
      </p>

      <h2 id="disclaimer">6. Disclaimer of warranties</h2>
      <p>
        THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
        AVAILABLE,&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER
        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED
        WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
        PURPOSE, NON-INFRINGEMENT, OR THAT THE APP WILL BE
        ERROR-FREE OR UNINTERRUPTED. We don&rsquo;t guarantee that
        every QR code will decode correctly, that decoded codes
        will be valid for redemption with any service, or that
        exported files will be accepted by any third-party
        platform. Some jurisdictions don&rsquo;t allow the
        exclusion of certain warranties, so this disclaimer may
        not apply to you in full.
      </p>

      <h2 id="liability">7. Limitation of liability</h2>
      <p>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL
        THE PROVIDER BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
        SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING
        LOSS OF DATA, LOSS OF VALUE OF REDEMPTION CODES, OR LOSS
        OF GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE
        APP, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        OUR TOTAL LIABILITY FOR ANY CLAIM ARISING FROM OR RELATED
        TO THE APP WILL NOT EXCEED THE AMOUNT YOU PAID FOR THE
        APP.
      </p>

      <h2 id="apple">8. Apple-specific terms</h2>
      <p>
        These Terms are between you and the Provider, not between
        you and Apple. Apple is not responsible for the App or its
        content. In the event of any conflict between these Terms
        and the Apple Media Services Terms or App Store license
        agreement applicable to the App, the Apple terms govern
        with respect to your use of the App through the App
        Store.
      </p>
      <p>
        Apple and Apple&rsquo;s subsidiaries are third-party
        beneficiaries of these Terms and have the right (and will
        be deemed to have accepted the right) to enforce these
        Terms against you.
      </p>

      <h2 id="termination">9. Termination</h2>
      <p>
        These Terms apply for as long as you use the App. You can
        end them by deleting the App from your device. We can end
        them by removing the App from the App Store or by ceasing
        to support it. Sections that by their nature should
        survive termination (intellectual property, disclaimer,
        limitation of liability, governing law) survive.
      </p>

      <h2 id="governing-law">10. Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of
        California, USA, without regard to conflict-of-laws
        principles. Any dispute arising from or related to the App
        or these Terms will be resolved in the state or federal
        courts located in San Francisco County, California, and
        you consent to personal jurisdiction in those courts.
      </p>

      <h2 id="changes">11. Changes to these Terms</h2>
      <p>
        If we update these Terms, the new version replaces the
        old at this URL and the &ldquo;Last updated&rdquo; date
        at the top changes. Continued use after a change
        constitutes acceptance.
      </p>

      <h2 id="contact">12. Contact</h2>
      <p>
        Questions about these Terms:{" "}
        <a href="mailto:support@nytemode.com">support@nytemode.com</a>.
      </p>
    </LegalShell>
  );
}
