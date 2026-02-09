"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight, MagnifyingGlass, X, Users, BookOpen, Brain, Target, Calendar } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  Domain: string;
  Team_Size: string;
  Project_Number: string;
  Project_Title: string;
  Difficulty: string;
  Research_Question: string;
  Approach_Methodology: string;
  Required_Skills: string;
  Dataset_Suggestions: string;
  Timeline_Summary: string;
  Deliverables: string;
  Target_Conferences: string;
  Expected_Acceptance_Rate: string;
  Key_Papers: string;
  Potential_Challenges: string;
  Why_Publishable: string;
}

const DOMAINS = ["All Domains", "Computer Science", "Biology", "Chemistry", "Engineering", "Law", "Business"];
const DIFFICULTIES = ["All Levels", "Intermediate", "Advanced", "Intermediate-Advanced"];

export function ProjectBank() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDomain, setSelectedDomain] = useState("All Domains");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All Levels");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch("/project-list.csv")
      .then((res) => res.text())
      .then((text) => {
        const lines = text.split(/\r?\n/);
        const headers = lines[0].split(",").map((h) => h.trim());
        
        const parsedData = lines.slice(1).filter(l => l.trim()).map((line) => {
          const values: string[] = [];
          let current = "";
          let inQuote = false;
          
          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') {
              inQuote = !inQuote;
            } else if (char === ',' && !inQuote) {
              values.push(current);
              current = "";
            } else {
              current += char;
            }
          }
          values.push(current);

          const row: any = {};
          headers.forEach((header, index) => {
            let val = values[index] || "";
            // Clean up quotes
            val = val.trim();
            if (val.startsWith('"') && val.endsWith('"')) {
              val = val.slice(1, -1).replace(/""/g, '"');
            }
            row[header] = val;
          });
          return row as Project;
        });
        
        setProjects(parsedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load projects", err);
        setLoading(false);
      });
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = 
      project.Project_Title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
      project.Research_Question?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDomain = selectedDomain === "All Domains" || project.Domain === selectedDomain;
    const matchesDifficulty = selectedDifficulty === "All Levels" || project.Difficulty === selectedDifficulty; 

    return matchesSearch && matchesDomain && matchesDifficulty;
  });

  const isDefaultView = !showAll && searchTerm === "" && selectedDomain === "All Domains" && selectedDifficulty === "All Levels";

  const getDisplayedProjects = () => {
    if (!isDefaultView) return filteredProjects;

    // Select 2 projects from each domain for the default view: 1 Solo, 1 Team (if accessible)
    const selected: Project[] = [];
    const domains = DOMAINS.slice(1); // Skip "All Domains"
    
    domains.forEach(domain => {
      const domainProjects = projects.filter(p => p.Domain === domain);
      
      const solo = domainProjects.find(p => p.Team_Size.trim().startsWith("Solo"));
      const team = domainProjects.find(p => !p.Team_Size.trim().startsWith("Solo")); // First non-solo

      if (solo) selected.push(solo);
      if (team) selected.push(team);
      
      // If we didn't find one of each, just fill up to 2
      if (selected.filter(p => p.Domain === domain).length < 2) {
         const remaining = domainProjects.filter(p => !selected.includes(p)).slice(0, 2 - selected.filter(p => p.Domain === domain).length);
         selected.push(...remaining);
      }
    });
    
    return selected;
  };

  const displayedProjects = getDisplayedProjects();

  const DOMAIN_COLORS: Record<string, string> = {
    "Computer Science": "bg-blue-50 text-blue-700 border-blue-200",
    "Biology": "bg-emerald-50 text-emerald-700 border-emerald-200",
    "Chemistry": "bg-purple-50 text-purple-700 border-purple-200",
    "Engineering": "bg-orange-50 text-orange-700 border-orange-200",
    "Law": "bg-red-50 text-red-700 border-red-200",
    "Business": "bg-zinc-100 text-zinc-700 border-zinc-200",
  };

  if (loading) return null;

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-200" id="project-bank">
       {/* Details Dialog */}
       <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className={`${selectedProject ? DOMAIN_COLORS[selectedProject.Domain] : ''} border`}>
                {selectedProject?.Domain}
              </Badge>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">{selectedProject?.Difficulty}</span>
            </div>
            <DialogTitle className="text-2xl font-light font-instrument-serif leading-tight">
              {selectedProject?.Project_Title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 pt-4">
             <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 mb-2">
                  <BookOpen size={16} /> Research Question
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {selectedProject?.Research_Question}
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 mb-2">
                    <Brain size={16} /> Required Skills
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {selectedProject?.Required_Skills}
                  </p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 mb-2">
                    <Users size={16} /> Team Format
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {selectedProject?.Team_Size}
                  </p>
                </div>
             </div>

             <div>
                <h4 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 mb-2">
                  <Target size={16} /> Methodology
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {selectedProject?.Approach_Methodology}
                </p>
             </div>

             <div className="bg-zinc-50 p-4 rounded-lg border border-zinc-100">
                <h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-2">
                  Why Publishable?
                </h4>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {selectedProject?.Why_Publishable}
                </p>
             </div>
          </div>
        </DialogContent>
      </Dialog>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-12 md:flex md:items-end md:justify-between">
           <div className="max-w-2xl">
              <p className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-tight">
                Project Bank
              </p>
              <h2 className="text-4xl font-light text-zinc-900 mb-4 font-instrument-serif tracking-tight">
                Explore potential research projects.
              </h2>
              <p className="text-lg text-zinc-600 leading-relaxed tracking-tight">
                We use this exact database to guide our students. <span className="font-medium text-zinc-900">Most programs would gatekeep this level of high-signal research ideas</span>, but we believe in making it free for the world to explore.
              </p>
           </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 bg-zinc-50 py-4 border-b border-zinc-200">
           <div className="md:col-span-2 relative">
              <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <Input 
                 placeholder="Search projects by title or question..." 
                 value={searchTerm}
                 onChange={(e) => {
                   setSearchTerm(e.target.value);
                   if (e.target.value) setShowAll(true);
                 }}
                 className="pl-10 bg-white border-zinc-200 focus-visible:ring-zinc-400"
              />
           </div>
           <div>
              <Select value={selectedDomain} onValueChange={(val) => {
                 val && setSelectedDomain(val);
                 setShowAll(true);
              }}>
                <SelectTrigger className="bg-white border-zinc-200">
                  <SelectValue placeholder="Domain" />
                </SelectTrigger>
                <SelectContent>
                  {DOMAINS.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
           </div>
           <div>
              <Select value={selectedDifficulty} onValueChange={(val) => {
                 val && setSelectedDifficulty(val);
                 setShowAll(true);
              }}>
                <SelectTrigger className="bg-white border-zinc-200">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                   {DIFFICULTIES.map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                </SelectContent>
              </Select>
           </div>
        </div>

        {/* Compact Table View */}
        <div className="w-full text-sm text-left">
           {/* Controls & Count */}
           <div className="flex items-center justify-between mb-2">
             <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
               {isDefaultView ? (
                  <>Showing 12 samples of {projects.length} total projects</>
               ) : (
                  <>Showing {displayedProjects.length} projects</>
               )}
             </div>
             <div>
               {isDefaultView && (
                 <button 
                    onClick={() => setShowAll(true)}
                    className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 transition-colors"
                 >
                    View all {projects.length} projects <ArrowRight />
                 </button>
               )}
               {showAll && !isDefaultView && (searchTerm === "" && selectedDomain === "All Domains" && selectedDifficulty === "All Levels") && (
                 <button 
                  onClick={() => setShowAll(false)}
                  className="text-xs text-zinc-500 hover:text-zinc-800 flex items-center gap-1 transition-colors"
                 >
                    Show less
                 </button>
               )}
             </div>
           </div>

           {/* Header */}
           <div className="hidden md:grid md:grid-cols-[140px_1fr_140px_120px] gap-4 px-4 py-3 border-b border-zinc-300 font-medium text-zinc-500 uppercase tracking-wider text-xs bg-zinc-100/50">
              <div>Domain</div>
              <div>Project</div>
              <div>Difficulty</div>
              <div>Team Size</div>
           </div>

           <div className="divide-y divide-zinc-200 border-b border-zinc-200">
             {displayedProjects.map((project, i) => (
               <motion.div
                 key={`${project.Project_Number}-${i}`}
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 viewport={{ once: true, margin: "100px" }}
                 onClick={() => setSelectedProject(project)}
                 className="group grid grid-cols-1 md:grid-cols-[140px_1fr_140px_120px] gap-2 md:gap-4 px-4 py-3 hover:bg-zinc-100/80 cursor-pointer transition-colors items-center bg-white"
               >
                  {/* Domain */}
                  <div className="flex">
                    <span className={`inline-flex items-center rounded-sm px-2 py-0.5 text-xs font-medium border ${DOMAIN_COLORS[project.Domain] || "bg-zinc-100 text-zinc-700 border-zinc-200"}`}>
                      {project.Domain}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="min-w-0">
                     <p className="font-sans font-medium tracking-tight text-base text-zinc-900 truncate pr-4 group-hover:text-blue-600 transition-colors">
                        {project.Project_Title}
                     </p>
                     <p className="text-zinc-500 text-xs truncate md:hidden mt-0.5">
                        {project.Research_Question}
                     </p>
                  </div>

                  {/* Difficulty */}
                  <div className="text-zinc-500 text-xs font-mono uppercase tracking-wide">
                     {project.Difficulty}
                  </div>

                  {/* Team Size */}
                  <div className="text-zinc-500 text-xs font-mono uppercase tracking-wide">
                     {project.Team_Size}
                  </div>
               </motion.div>
             ))}
           </div>
        </div>

        {displayedProjects.length === 0 && (
           <div className="text-center py-20 bg-white border border-dashed border-zinc-300 rounded-lg mt-8">
              <p className="text-zinc-500">No projects found matching your criteria.</p>
           </div>
        )}

      </div>
    </section>
  );
}
