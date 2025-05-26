
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Mic, Building2 } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { OrganizersSection } from "@/components/OrganizersSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { VenueSection } from "@/components/VenueSection";
import { FooterSection } from "@/components/FooterSection";
import { BackToTop } from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-yellow-50">
      <div id="register">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="speakers">
        <SpeakersSection />
      </div>
      <div id="organizers">
        <OrganizersSection />
      </div>
      <div id="sponsors">
        <SponsorsSection />
      </div>
      <div id="venue">
        <VenueSection />
      </div>
      <FooterSection />
      <BackToTop />
    </div>
  );
};

export default Index;
