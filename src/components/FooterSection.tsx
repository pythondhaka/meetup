
import { Button } from "@/components/ui/button";

export const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-python-blue-dark to-python-blue text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand & Event Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Python <span className="text-python-yellow">Dhaka</span></h3>
            <p className="text-blue-100 mb-4 leading-relaxed">
              Bangladesh's premier Python community event bringing together developers, 
              data scientists, and tech enthusiasts for learning and networking.
            </p>
            <div className="text-sm text-blue-200">
              <p>📅 July 2025 (Date TBA)</p>
              <p>⏰ 4:00 PM - 7:00 PM</p>
              <p>📍 MEC Conference Hall, Shewrapara</p>
              <p>🎫 ৳300 | 50 spots available</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-python-yellow">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#register" className="hover:text-python-yellow transition-colors">Register for Event</a></li>
              <li><a href="#speakers" className="hover:text-python-yellow transition-colors">Call for Speakers</a></li>
              <li><a href="#sponsors" className="hover:text-python-yellow transition-colors">Sponsorship Opportunities</a></li>
              <li><a href="#venue" className="hover:text-python-yellow transition-colors">Venue Information</a></li>
              <li><a href="#about" className="hover:text-python-yellow transition-colors">About the Event</a></li>
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-python-yellow">Join Our Community</h4>
            <p className="text-blue-100 mb-4 text-sm">
              Stay connected with Bangladesh's Python community through our various channels:
            </p>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full border-python-yellow text-python-yellow hover:bg-python-yellow hover:text-python-blue-dark transition-all"
              >
                🎮 Join Discord Server
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-python-yellow text-python-yellow hover:bg-python-yellow hover:text-python-blue-dark transition-all"
              >
                📘 Python Bangladesh FB Group
              </Button>
              <Button 
                variant="outline" 
                className="w-full border-python-yellow text-python-yellow hover:bg-python-yellow hover:text-python-blue-dark transition-all"
              >
                💼 LinkedIn Page
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 Python Dhaka Community. Made with 🐍 and ❤️ in Bangladesh.</p>
            </div>
            <div className="flex space-x-6 text-sm text-blue-200">
              <a href="#" className="hover:text-python-yellow transition-colors">Code of Conduct</a>
              <a href="#" className="hover:text-python-yellow transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-python-yellow transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-python-yellow py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-python-blue-dark font-bold text-lg mb-2">
            Ready to join Bangladesh's biggest Python event?
          </p>
          <Button 
            size="lg" 
            className="bg-python-blue hover:bg-python-blue-dark text-white font-bold px-8 py-3"
          >
            Register Now - Only ৳300
          </Button>
        </div>
      </div>
    </footer>
  );
};
