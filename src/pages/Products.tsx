import { CheckCircle } from 'lucide-react';

interface ProductsProps {
  onNavigate: (page: string) => void;
}

export default function Products({ onNavigate }: ProductsProps) {
  const products = [
    {
      name: 'Turmeric',
      category: 'Spices',
      icon: '🌿',
      description:
        'Premium quality turmeric from Erode, known as the turmeric capital of India. Rich in curcumin and natural goodness.',
      features: [
        'High curcumin content',
        'Natural and organic',
        'Vibrant golden color',
        'Export quality grading',
      ],
      gradient: 'from-yellow-100 to-amber-100',
    },
    {
      name: 'Indian Spices',
      category: 'Spices',
      icon: '🌶️',
      description:
        'A wide variety of authentic Indian spices including cardamom, cinnamon, cloves, and more. Sourced from the best regions.',
      features: [
        'Authentic flavor profiles',
        'Carefully selected varieties',
        'Proper packaging for freshness',
        'International quality standards',
      ],
      gradient: 'from-red-100 to-orange-100',
    },
    {
      name: 'Cold Pressed Oils',
      category: 'Edible Oils',
      icon: '🫒',
      description:
        'Pure and natural cold pressed oils extracted using traditional methods. Includes coconut oil, groundnut oil, sesame oil, and more.',
      features: [
        'Chemical-free extraction',
        'Retains natural nutrients',
        'Pure and unrefined',
        'Health-conscious choice',
      ],
      gradient: 'from-green-100 to-emerald-100',
    },
    {
      name: 'Basmati Rice',
      category: 'Rice',
      icon: '🌾',
      description:
        'Premium long-grain Basmati rice known for its distinctive aroma and fluffy texture. Perfect for international markets.',
      features: [
        'Extra long grain',
        'Aromatic fragrance',
        'Non-sticky texture',
        'Premium grade quality',
      ],
      gradient: 'from-amber-100 to-yellow-100',
    },
    {
      name: 'Brown Organic Rice',
      category: 'Rice',
      icon: '🍚',
      description:
        'Nutritious brown rice grown organically without chemical fertilizers. Rich in fiber and essential nutrients.',
      features: [
        'Certified organic',
        'High fiber content',
        'Nutrient-rich',
        'Naturally grown',
      ],
      gradient: 'from-stone-100 to-neutral-100',
    },
    {
      name: 'Edible Oils',
      category: 'Oils',
      icon: '🌻',
      description:
        'Various edible oils including sunflower, mustard, and other varieties. High quality and suitable for different culinary needs.',
      features: [
        'Food-grade quality',
        'Proper refining process',
        'Long shelf life',
        'Export packaging',
      ],
      gradient: 'from-yellow-100 to-orange-100',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <section className="bg-gradient-to-br from-green-50 to-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our Premium Products
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed animate-fade-in">
              Discover our range of high-quality Indian commodities ready for
              export to international markets
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${product.gradient} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="p-8">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle
                            size={18}
                            className="text-green-600 flex-shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white/50 px-8 py-4 border-t border-gray-200">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Custom Requirements?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Looking for specific products or quantities? We can help source
              and export custom requirements based on your needs.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Contact Us for Custom Orders
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
