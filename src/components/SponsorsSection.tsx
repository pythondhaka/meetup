
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Megaphone, Star } from "lucide-react";

export const SponsorsSection = () => {
  const sponsorshipTiers = [
    {
      title: "Gold Sponsor",
      price: "৳50,000",
      icon: Star,
      color: "from-yellow-400 to-yellow-600",
      benefits: [
        "Logo on all marketing materials",
        "5-minute speaking slot",
        "Dedicated booth space",
        "Social media mentions",
        "5 complimentary tickets",
        "Logo on event t-shirts"
      ]
    },
    {
      title: "Silver Sponsor", 
      price: "৳25,000",
      icon: Building2,
      color: "from-gray-400 to-gray-600",
      benefits: [
        "Logo on event banners",
        "Booth space",
        "Social media mentions", 
        "3 complimentary tickets",
        "Website logo placement",
        "Event day recognition"
      ]
    },
    {
      title: "Community Sponsor",
      price: "৳10,000",
      icon: Users,
      color: "from-python-blue to-python-blue-dark",
      benefits: [
        "Logo on website",
        "Social media shoutout",
        "2 complimentary tickets",
        "Networking opportunities",
        "Event day mention",
        "Community recognition"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-python-blue text-white">
            Partnership Opportunities
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sponsor <span className="text-python-blue">Python Bangladesh</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Partner with us to reach Bangladesh's growing Python community. Showcase your brand, 
            recruit top talent, and support the local tech ecosystem while gaining valuable visibility 
            among 100+ passionate developers and tech professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sponsorshipTiers.map((tier, index) => (
            <Card key={index} className={`relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${index === 0 ? 'ring-2 ring-yellow-400' : ''}`}>
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${tier.color}`}></div>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tier.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-gray-900 mb-2">{tier.title}</CardTitle>
                <div className="text-3xl font-bold text-python-blue">{tier.price}</div>
                {index === 0 && (
                  <Badge className="bg-yellow-100 text-yellow-800 mt-2">
                    Most Popular
                  </Badge>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-python-yellow rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Sponsor Python Bangladesh?
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Megaphone className="h-5 w-5 text-python-blue mr-3" />
                  <span>Reach 100+ qualified Python developers</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-python-blue mr-3" />
                  <span>Access Bangladesh's top tech talent</span>
                </li>
                <li className="flex items-center">
                  <Building2 className="h-5 w-5 text-python-blue mr-3" />
                  <span>Build brand awareness in tech community</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-python-blue mr-3" />
                  <span>Support local technology ecosystem</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                Ready to Partner?
              </h4>
              <p className="text-gray-600 mb-6">
                Join us in building Bangladesh's strongest Python community. 
                Let's discuss a custom sponsorship package that fits your goals.
              </p>
              <Button 
                size="lg" 
                className="bg-python-blue hover:bg-python-blue-dark text-white font-bold px-8 py-4 text-lg transition-all transform hover:scale-105 w-full md:w-auto"
              >
                <Building2 className="h-5 w-5 mr-2" />
                Become a Sponsor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
