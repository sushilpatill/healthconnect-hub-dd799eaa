import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const CTASection = () => {
  return (
    <section id="doctors" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl animate-float" />
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/5 blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur mb-8 animate-pulse-glow">
            <Users className="w-8 h-8 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Find Your{" "}
            <span className="text-white/90 underline decoration-white/30 underline-offset-4">
              Perfect Doctor
            </span>
            ?
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto">
            Join thousands of satisfied patients who trust HealthMeet for their healthcare needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold text-lg px-8 h-14 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105 group"
            >
              Browse Doctors
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 font-semibold text-lg px-8 h-14 rounded-xl backdrop-blur transition-all hover:scale-105"
            >
              Download App
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-12 flex items-center justify-center gap-6 text-white/60">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur border-2 border-white/30 flex items-center justify-center text-xs font-bold text-white"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm">
              <span className="text-white font-semibold">500+</span> doctors already on board
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
