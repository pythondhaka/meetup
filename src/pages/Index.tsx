
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Mic, Building2 } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SpeakersSection } from "@/components/SpeakersSection";
import { SponsorsSection } from "@/components/SponsorsSection";
import { VenueSection } from "@/components/VenueSection";
import { FooterSection } from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-yellow-50">
      <HeroSection />
      <AboutSection />
      <SpeakersSection />
      <SponsorsSection />
      <VenueSection />
      <FooterSection />
    </div>
  );
};

export default Index;
