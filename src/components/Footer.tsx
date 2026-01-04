import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/logo.jpeg"
                alt="HEARTLINX Logo"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-lg font-bold">HEARTLINX</h3>
                <p className="text-sm text-gray-400">
                  Global Trader And Exporters
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner in exporting premium Indian commodities to
              global markets.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-green-500 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>+91 99942 45477</p>
                  <p>+91 63816 81126</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-green-500 mt-1 flex-shrink-0" />
                <a
                  href="mailto:heartlinxglobal@gmail.com"
                  className="text-sm hover:text-green-500 transition-colors"
                >
                  heartlinxglobal@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Address</h4>
            <div className="flex items-start space-x-3">
              <MapPin size={18} className="text-green-500 mt-1 flex-shrink-0" />
              <address className="text-sm text-gray-400 not-italic">
                398/12, Aravind Garden, Uthukuli Road,
                <br />
                Malapalayam (PO), Perundurai (TK),
                <br />
                Chennimalai, Erode – 638051
                <br />
                Tamil Nadu, India
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} HEARTLINX Global Trader And
            Exporters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
