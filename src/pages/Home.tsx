import { Globe, TrendingUp, Shield, ArrowRight, Package } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const products = [
    {
      name: 'Turmeric & Spices',
      description: 'Premium quality Indian spices with authentic flavor',
      icon: '🌿',
    },
    {
      name: 'Cold Pressed Oils',
      description: 'Pure and natural edible oils',
      icon: '🫒',
    },
    {
      name: 'Basmati & Organic Rice',
      description: 'Finest quality rice varieties from India',
      icon: '🌾',
    },
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Export to international markets worldwide',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'Premium quality products with certifications',
    },
    {
      icon: TrendingUp,
      title: 'Commission Agent',
      description: 'Competitive rates and reliable service',
    },
    {
      icon: Package,
      title: 'Safe Delivery',
      description: 'Secure packaging and timely shipping',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-green-50 via-white to-amber-50 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Connecting India's
                <span className="text-green-600"> Finest Commodities</span> to
                the World
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                We are interested in exporting Indian commodities like Turmeric,
                Spices, Cold Pressed Oils and Rice to international markets as a
                commission agent.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>Contact Us</span>
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={() => onNavigate('products')}
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Products
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="relative w-full h-96 md:h-[500px]">
                <img
                  src="/src/assets/whatsapp_image_2026-01-04_at_8.14.29_am.jpeg"
                  alt="HEARTLINX Business Card"
                  className="w-full h-full object-contain rounded-2xl shadow-2xl animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Premium Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our range of high-quality Indian commodities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-green-100"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="text-6xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button
                  onClick={() => onNavigate('products')}
                  className="text-green-600 font-semibold hover:text-green-700 flex items-center space-x-2 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose HEARTLINX?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your trusted export partner for Indian commodities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <Icon className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can help you import premium Indian commodities
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
