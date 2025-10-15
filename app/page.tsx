import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-neutral-900 mb-6">
              Control your energy. Save every month.
            </h1>
            <p className="text-xl sm:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              VoltSense learns your home's patterns to cut waste without cutting comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link href="/features" className="btn-outline">
                View Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-neutral-50 border-y border-neutral-200">
        <div className="container-custom">
          <p className="text-center text-sm text-neutral-500 mb-8 uppercase tracking-wide font-semibold">
            Trusted by leading home automation enthusiasts
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-16">
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor" aria-label="Home Assistant">
                <path d="M24 8L8 18v16l16 10 16-10V18L24 8zm0 4l12 7.5v11L24 38l-12-7.5v-11L24 12z"/>
                <circle cx="24" cy="24" r="4"/>
              </svg>
              <span className="text-lg font-semibold">Home Assistant</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor" aria-label="MQTT Protocol">
                <rect x="12" y="20" width="8" height="8" rx="1"/>
                <rect x="28" y="20" width="8" height="8" rx="1"/>
                <path d="M20 24h8M24 20v8"/>
              </svg>
              <span className="text-lg font-semibold">MQTT Ready</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <svg className="w-12 h-12" viewBox="0 0 48 48" fill="currentColor" aria-label="Solar Compatible">
                <circle cx="24" cy="24" r="8"/>
                <path d="M24 8v4M24 36v4M40 24h-4M12 24H8M35.3 12.7l-2.8 2.8M15.5 32.5l-2.8 2.8M35.3 35.3l-2.8-2.8M15.5 15.5l-2.8-2.8"/>
              </svg>
              <span className="text-lg font-semibold">Solar Compatible</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Three simple steps to smarter energy management
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Install & Connect
              </h3>
              <p className="text-neutral-600">
                Connect VoltSense to your electrical panel and configure it with your Wi-Fi network in minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Learn Your Patterns
              </h3>
              <p className="text-neutral-600">
                VoltSense monitors your energy usage 24/7 and learns when and how you use electricity.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                Optimize & Save
              </h3>
              <p className="text-neutral-600">
                Get intelligent recommendations and automated controls to reduce waste and lower your bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-video bg-gradient-to-br from-primary-400 to-accent-400 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white opacity-90" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="50" cy="50" r="35"/>
                    <path d="M50 20v60M20 50h60"/>
                    <circle cx="50" cy="50" r="8" fill="currentColor"/>
                    <path d="M50 35l-8 15h16l-8 15" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow">
                  <div className="text-xs text-neutral-500">Current Usage</div>
                  <div className="text-2xl font-bold text-neutral-900">2.4 kW</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-neutral-900 mb-6">
                Real-time insights that matter
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">Real-time inverter & grid monitoring</div>
                    <div className="text-neutral-600">Track solar production, grid consumption, and battery status with sub-second accuracy.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">Battery-friendly charge/discharge logic</div>
                    <div className="text-neutral-600">Intelligent algorithms maximize battery life while optimizing your energy savings.</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">Home Assistant via MQTT, out of the box</div>
                    <div className="text-neutral-600">Seamless integration with your existing smart home setup. No custom code required.</div>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/features" className="btn-primary">
                  Explore All Features
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to take control of your energy?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-50">
            Join thousands of homeowners saving money and reducing their carbon footprint.
          </p>
          <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-50">
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
