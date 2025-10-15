import Link from "next/link";

export const metadata = {
  title: "Features - VoltSense",
  description: "Discover all the powerful features of VoltSense smart home energy monitoring system.",
};

export default function Features() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Real-time Monitoring",
      description: "Track energy consumption with sub-second accuracy across all circuits and devices in your home."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Smart Insights",
      description: "AI-powered analytics learn your patterns and provide actionable recommendations to reduce waste."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Solar Integration",
      description: "Optimize solar panel performance and track production versus consumption in real-time."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Battery Management",
      description: "Intelligent charge/discharge cycles that extend battery life and maximize cost savings."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "MQTT Integration",
      description: "Native MQTT support for seamless integration with Home Assistant and other platforms."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Mobile Access",
      description: "Monitor and control your energy from anywhere with our responsive web interface."
    }
  ];

  const comparisonData = [
    { feature: "Real-time monitoring", voltsense: true, generic: false },
    { feature: "Solar & battery integration", voltsense: true, generic: false },
    { feature: "Home Assistant ready", voltsense: true, generic: false },
    { feature: "AI-powered insights", voltsense: true, generic: false },
    { feature: "Sub-second accuracy", voltsense: true, generic: "~5-10s" },
    { feature: "API & MQTT support", voltsense: true, generic: "Limited" }
  ];

  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-neutral-900 mb-6">
            Everything you need to master your energy
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            VoltSense combines cutting-edge hardware with intelligent software to give you complete control over your home's energy usage.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-hover">
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              How VoltSense Compares
            </h2>
            <p className="text-lg text-neutral-600">
              See why homeowners choose VoltSense over generic monitors
            </p>
          </div>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">VoltSense</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-500">Generic Monitor X</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  {comparisonData.map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm text-neutral-900">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.voltsense === 'boolean' ? (
                          row.voltsense ? (
                            <svg className="w-6 h-6 text-primary-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-neutral-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )
                        ) : (
                          <span className="text-sm text-neutral-900">{row.voltsense}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {typeof row.generic === 'boolean' ? (
                          row.generic ? (
                            <svg className="w-6 h-6 text-primary-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-6 h-6 text-neutral-300 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )
                        ) : (
                          <span className="text-sm text-neutral-500">{row.generic}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-neutral-900 mb-4">
                Built for Developers
              </h2>
              <p className="text-lg text-neutral-600">
                VoltSense provides a rich MQTT API for complete integration flexibility
              </p>
            </div>
            <div className="card bg-neutral-900 text-neutral-100 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-mono text-neutral-400">Sample MQTT Payload</span>
                <span className="text-xs px-2 py-1 bg-primary-600 text-white rounded">JSON</span>
              </div>
              <pre className="text-sm font-mono overflow-x-auto">
                <code>{`{
  "timestamp": "2025-10-15T14:32:01Z",
  "grid": {
    "power": 2456,
    "voltage": 240.2,
    "current": 10.23,
    "frequency": 60.01
  },
  "solar": {
    "power": 3850,
    "voltage": 385.4,
    "current": 9.99,
    "daily_production": 18.7
  },
  "battery": {
    "power": -1394,
    "soc": 87.5,
    "voltage": 51.2,
    "current": -27.23,
    "temperature": 23.8
  },
  "consumption": {
    "total": 2456,
    "circuits": [
      {"id": "main_hvac", "power": 1250},
      {"id": "kitchen", "power": 780},
      {"id": "office", "power": 426}
    ]
  }
}`}</code>
              </pre>
            </div>
            <div className="mt-8 text-center">
              <p className="text-neutral-600 mb-4">
                Subscribe to <code className="px-2 py-1 bg-neutral-100 rounded text-sm font-mono">voltsense/telemetry</code> to receive real-time updates
              </p>
              <Link href="/contact" className="btn-outline">
                Request API Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to experience VoltSense?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-50">
            Get started today and join the smart energy revolution.
          </p>
          <Link href="/contact" className="btn bg-white text-primary-600 hover:bg-neutral-50">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
