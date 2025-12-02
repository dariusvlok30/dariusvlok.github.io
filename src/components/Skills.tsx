import { Card } from "@/components/ui/card";
import { Code2 } from "lucide-react";

export const Skills = () => {
  const allTechImages = [
    { name: "Claude", image: "/claude.png" },
    { name: "OpenAI", image: "/openai.png" },
    { name: "Ollama", image: "/ollama.png" },
    { name: "vLLM", image: "/vllm.png" },
    { name: "Google AI", image: "/google.png" },
    { name: "n8n", image: "/n8n.png" },
    { name: "LangFlow", image: "/langflow.png" },
    { name: "Open WebUI", image: "/openweb.png" },
    { name: "Docker", image: "/docker.png" },
    { name: "PostgreSQL", image: "/postgres.png" },
    { name: "MySQL", image: "/mysql.png" },
    { name: "MS SQL Server", image: "/mssql.png" },
    { name: "Microsoft", image: "/microsoft.png" },
    { name: "WhatsApp", image: "/whatsapp.png" },
  ];

  const languages = [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "C#", level: 80 },
    { name: "Java", level: 75 },
    { name: "SQL", level: 85 },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Tech <span className="text-primary">Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern tools and technologies powering enterprise AI solutions
            </p>
          </div>

          {/* Scrolling Tech Stack Ribbon */}
          <div className="mb-16 overflow-hidden">
            <style>{`
              @keyframes scroll-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll-left 30s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="flex gap-8 animate-scroll" style={{ width: 'max-content' }}>
              {[...allTechImages, ...allTechImages].map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 group cursor-default flex-shrink-0"
                >
                  <div className="w-20 h-20 rounded-xl bg-background border-2 border-border p-3 flex items-center justify-center transition-all duration-300 group-hover:border-primary group-hover:scale-110 group-hover:shadow-lg">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-center whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Languages with Progress Bars */}
          <Card className="p-8 bg-gradient-card border-border">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Code2 className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">Programming Languages</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {languages.map((lang, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-sm text-muted-foreground font-mono">{lang.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                      style={{ width: `${lang.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
