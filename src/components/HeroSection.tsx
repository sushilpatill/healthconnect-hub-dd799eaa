import { Search, MapPin, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSection = () => {
  const specialties = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Psychiatry",
    "General Medicine",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-light via-background to-secondary/30" />
      
      {/* Animated Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 animate-float" />
      <div className="absolute top-1/3 right-20 w-16 h-16 rounded-full bg-accent/10 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-accent/5 animate-float" style={{ animationDelay: "0.5s" }} />

      {/* Gradient Orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full gradient-hero opacity-10 blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent opacity-5 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/20 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-secondary-foreground">
              Trusted by 10,000+ patients
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Your Health,{" "}
            <span className="gradient-text">Our Priority</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Connect with top healthcare professionals instantly. Book appointments, 
            manage your health records, and get the care you deserve—all in one place.
          </p>

          {/* Search Bar */}
          <div className="glass-card rounded-2xl p-3 md:p-4 max-w-3xl mx-auto animate-fade-up glow" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col md:flex-row gap-3">
              {/* Specialty Select */}
              <div className="flex-1">
                <Select>
                  <SelectTrigger className="h-14 border-0 bg-background/50 rounded-xl text-left pl-4">
                    <div className="flex items-center gap-3">
                      <Stethoscope className="w-5 h-5 text-primary" />
                      <SelectValue placeholder="Select Specialty" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {specialties.map((specialty) => (
                      <SelectItem key={specialty} value={specialty.toLowerCase()}>
                        {specialty}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Location Input */}
              <div className="flex-1">
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                  <Input
                    placeholder="Enter Location"
                    className="h-14 pl-12 border-0 bg-background/50 rounded-xl"
                  />
                </div>
              </div>

              {/* Search Button */}
              <Button className="h-14 px-8 gradient-hero text-primary-foreground font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group">
                <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Find Doctors
              </Button>
            </div>
          </div>

          {/* Quick Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <span className="text-sm text-muted-foreground">Popular:</span>
            {["Cardiologist", "Dermatologist", "Dentist", "Pediatrician"].map((tag) => (
              <button
                key={tag}
                className="px-4 py-1.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground text-sm font-medium transition-all hover:scale-105"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
