import { Calendar, UserCheck, Shield, Bell } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Easy Booking",
      description: "Book appointments in under 2 minutes with our streamlined scheduling system.",
      color: "from-primary to-primary/70",
    },
    {
      icon: UserCheck,
      title: "Verified Doctors",
      description: "All our healthcare professionals are licensed, verified, and highly reviewed.",
      color: "from-accent to-accent/70",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Multiple payment options with bank-grade encryption for your safety.",
      color: "from-primary to-accent",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Never miss an appointment with automated notifications and reminders.",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Healthcare Made{" "}
            <span className="gradient-text">Simple</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience seamless healthcare with features designed around your needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
