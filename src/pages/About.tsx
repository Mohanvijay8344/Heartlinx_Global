import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description:
        'We ensure the highest quality standards for all our exported commodities',
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description:
        'Building long-term relationships through trust and transparency',
    },
    {
      icon: Target,
      title: 'Timely Delivery',
      description:
        'Committed to meeting deadlines and ensuring smooth logistics',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-green-50 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              About HEARTLINX
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed animate-fade-in">
              Global Trader And Exporters
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
                <p className="text-gray-700 leading-relaxed">
                  HEARTLINX Global Trader And Exporters is a trusted name in the
                  export of premium Indian commodities. Based in Erode, Tamil
                  Nadu, we specialize in connecting international markets with
                  India's finest agricultural products.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We are interested in exporting Indian commodities like
                  Turmeric, Spices, Cold Pressed Oils and Rice to international
                  markets as a commission agent. Our commitment to quality,
                  transparency, and customer satisfaction sets us apart in the
                  global trading landscape.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-green-400 to-amber-400 rounded-2xl opacity-20 absolute inset-0 blur-2xl"></div>
                <img
                  src="/src/assets/whatsapp_image_2026-01-04_at_8.14.29_am_(1).jpeg"
                  alt="HEARTLINX Logo"
                  className="relative w-full h-full object-contain p-8"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="text-green-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Vision
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become a leading global exporter of Indian agricultural
                  commodities, recognized for our quality, reliability, and
                  commitment to bridging international markets with India's rich
                  agricultural heritage.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="text-amber-600" size={32} />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Our Mission
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide international buyers with access to premium quality
                  Indian commodities through transparent, efficient, and reliable
                  export services while supporting local farmers and producers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <Icon className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Us?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Direct Source Access
                  </h4>
                  <p className="text-gray-600">
                    Located in Erode, the heart of turmeric and agricultural
                    production in India, we have direct access to the finest
                    quality products.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Quality Assurance
                  </h4>
                  <p className="text-gray-600">
                    Every product undergoes rigorous quality checks to meet
                    international standards and customer expectations.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Competitive Commission Rates
                  </h4>
                  <p className="text-gray-600">
                    As commission agents, we offer competitive rates and
                    transparent pricing for all our export services.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Global Network
                  </h4>
                  <p className="text-gray-600">
                    Our established network enables smooth export operations to
                    multiple international markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
