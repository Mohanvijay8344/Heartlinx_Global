import {
  Ship,
  FileCheck,
  TrendingUp,
  Package,
  Search,
  Handshake,
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Ship,
      title: 'Export Services',
      description:
        'Complete export management including documentation, shipping, and logistics coordination to ensure your products reach international markets safely and on time.',
      features: [
        'Complete export documentation',
        'Customs clearance assistance',
        'Shipping & logistics coordination',
        'International trade compliance',
      ],
    },
    {
      icon: Handshake,
      title: 'Commission Agent Services',
      description:
        'As experienced commission agents, we facilitate smooth transactions between Indian suppliers and international buyers with transparent and competitive rates.',
      features: [
        'Competitive commission rates',
        'Transparent pricing',
        'Buyer-seller coordination',
        'Contract facilitation',
      ],
    },
    {
      icon: Search,
      title: 'Product Sourcing',
      description:
        'Access to quality Indian commodities from trusted sources. We help you find the exact products that meet your specifications and quality standards.',
      features: [
        'Direct access to suppliers',
        'Quality verification',
        'Best price negotiation',
        'Custom product requirements',
      ],
    },
    {
      icon: FileCheck,
      title: 'Quality Assurance',
      description:
        'Rigorous quality control processes to ensure all products meet international standards and customer expectations before shipment.',
      features: [
        'Pre-shipment inspection',
        'Quality certificates',
        'Lab testing coordination',
        'International standards compliance',
      ],
    },
    {
      icon: Package,
      title: 'Packaging & Labeling',
      description:
        'Professional packaging solutions designed to preserve product quality during transit and meet destination country requirements.',
      features: [
        'Export-grade packaging',
        'Custom labeling',
        'Compliance with import regulations',
        'Secure and protective materials',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Market Insights',
      description:
        'Stay informed with market trends, pricing intelligence, and trade opportunities to make informed business decisions.',
      features: [
        'Market analysis',
        'Price trend reports',
        'Trade opportunity alerts',
        'Industry insights',
      ],
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Initial Consultation',
      description:
        'Discuss your requirements, quantities, and specifications',
    },
    {
      step: '2',
      title: 'Product Sourcing',
      description: 'We source the best quality products matching your needs',
    },
    {
      step: '3',
      title: 'Quality Check',
      description: 'Rigorous quality inspection and certification',
    },
    {
      step: '4',
      title: 'Documentation',
      description: 'Complete export documentation and customs clearance',
    },
    {
      step: '5',
      title: 'Shipping',
      description: 'Safe packaging and timely shipment to your destination',
    },
    {
      step: '6',
      title: 'Delivery & Support',
      description: 'Track shipment and post-delivery support',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-green-50 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed animate-fade-in">
              Comprehensive export and commission agent services for Indian
              commodities
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-scale-in group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Icon className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-12 text-center text-white shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Exporting?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Partner with us for reliable and professional export services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Started
                </button>
                <button
                  onClick={() => onNavigate('products')}
                  className="bg-green-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-900 transition-all duration-300 border-2 border-white"
                >
                  View Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
