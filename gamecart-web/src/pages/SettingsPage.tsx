import { motion } from "framer-motion";
import { SectionHeader } from "../components/SectionHeader";

interface SettingsPageProps {
  region: string;
  currency: string;
  onRegionChange: (value: string) => void;
  onCurrencyChange: (value: string) => void;
  priceAlerts: boolean;
  onPriceAlertsChange: (value: boolean) => void;
}

export function SettingsPage({
  region,
  currency,
  onRegionChange,
  onCurrencyChange,
  priceAlerts,
  onPriceAlertsChange
}: SettingsPageProps): JSX.Element {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.24 }}>
      <SectionHeader title="Settings" subtitle="Control shelf region, pricing view, and alert behavior." />

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="surface-card space-y-3 p-4">
          <h3 className="text-sm font-semibold">Store Defaults</h3>

          <label className="block text-sm text-muted">
            Region
            <select
              value={region}
              onChange={(event) => onRegionChange(event.target.value)}
              className="mt-1 w-full rounded-lg border border-line/80 bg-bg/70 px-3 py-2 text-sm text-ink outline-none focus:border-neon/60"
            >
              <option value="US">US</option>
              <option value="JP">JP</option>
              <option value="GB">GB</option>
            </select>
          </label>

          <label className="block text-sm text-muted">
            Currency
            <select
              value={currency}
              onChange={(event) => onCurrencyChange(event.target.value)}
              className="mt-1 w-full rounded-lg border border-line/80 bg-bg/70 px-3 py-2 text-sm text-ink outline-none focus:border-neon/60"
            >
              <option value="USD">USD</option>
              <option value="JPY">JPY</option>
              <option value="GBP">GBP</option>
            </select>
          </label>
        </section>

        <section className="surface-card space-y-4 p-4">
          <h3 className="text-sm font-semibold">Alerts & Presence</h3>

          <label className="flex items-center justify-between rounded-lg border border-line/80 bg-bg/60 px-3 py-2">
            <div>
              <p className="text-sm font-medium">Price drop alerts</p>
              <p className="text-xs text-muted">Notify when wishlist titles hit historical low windows.</p>
            </div>
            <input
              type="checkbox"
              checked={priceAlerts}
              onChange={(event) => onPriceAlertsChange(event.target.checked)}
              className="h-4 w-4 accent-cyan-300"
            />
          </label>

          <div className="rounded-lg border border-line/80 bg-bg/60 p-3 text-xs text-muted">
            Theme locked to dark premium mode with a single neon accent for contrast consistency.
          </div>
        </section>
      </div>
    </motion.div>
  );
}
