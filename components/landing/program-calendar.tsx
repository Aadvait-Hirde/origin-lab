"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon, CalendarIcon, ClockIcon } from "lucide-react";

// Types
type EventType = "session" | "deadline" | "milestone" | "other";

interface CalendarEvent {
  date: string; // YYYY-MM-DD
  time?: string;
  title: string;
  type: EventType;
  details?: string[];
}

// Data
const events: CalendarEvent[] = [
  // JUNE
  { date: "2026-06-01", time: "11:00 AM EST", title: "Welcome to Research", type: "session", details: ["What is research vs homework?", "Overview of structure", "Tools tour"] },
  { date: "2026-06-03", time: "11:00 AM EST", title: "Research Methodology", type: "session", details: ["Question → Lit Review → Experiment", "Hypothesis", "Baselines"] },
  { date: "2026-06-05", time: "11:00 AM EST", title: "Team Formation", type: "session", details: ["Collaboration norms", "Ice breakers", "Internal meeting setup"] },
  { date: "2026-06-08", time: "11:00 AM EST", title: "Reading Papers", type: "session", details: ["Paper structure", "Finding datasets", "Lit review summary"] },
  { date: "2026-06-10", time: "11:00 AM EST", title: "Problem Framing", type: "session", details: ["Scoping problems", "Formulating hypotheses", "Success metrics"] },
  { date: "2026-06-12", time: "11:00 AM EST", title: "Evaluating Questions", type: "session", details: ["Peer feedback", "Picking the best question"] },
  { date: "2026-06-14", title: "DUE: Project Preferences", type: "deadline" },
  { date: "2026-06-15", time: "11:00 AM EST", title: "Designing Approach", type: "session", details: ["System design vs Model training", "Baselines & Validation"] },
  { date: "2026-06-17", time: "11:00 AM EST", title: "Tools & Workflow", type: "session", details: ["Git basics", "AI tools (ChatGPT/Claude/Cursor)", "Documentation"] },
  { date: "2026-06-19", time: "11:00 AM EST", title: "Ethics & AI", type: "session", details: ["Data privacy", "Bias & Fairness", "Limitations"] },
  { date: "2026-06-21", title: "DUE: Proposal Outline", type: "deadline" },
  { date: "2026-06-22", time: "11:00 AM EST", title: "Presenting Work", type: "session", details: ["Presentation structure", "Visualizing results", "Data storytelling"] },
  { date: "2026-06-24", time: "11:00 AM EST", title: "Writing Basics", type: "session", details: ["Abstract/Intro/Methods", "Academic tone", "Citations"] },
  { date: "2026-06-27", title: "Projects Assigned", type: "milestone" },
  { date: "2026-06-28", title: "Professors Assigned", type: "milestone" },

  // JULY (Sample of recurring/key dates)
  { date: "2026-07-27", time: "2:00 PM EST", title: "Mid-Point Checkpoint", type: "milestone", details: ["Problem → Approach → Progress", "Peer & Prof Feedback"] },
  // Recurring
  ...["2026-06-29", "2026-07-06", "2026-07-13", "2026-07-20", "2026-08-03", "2026-08-10", "2026-08-17"].map(d => ({ date: d, title: "Progress Update #1 Due", type: "deadline" } as CalendarEvent)),
  ...["2026-07-03", "2026-07-10", "2026-07-17", "2026-07-24", "2026-07-31", "2026-08-07", "2026-08-14"].map(d => ({ date: d, title: "Progress Update #2 Due", type: "deadline" } as CalendarEvent)),
  ...["2026-06-30", "2026-07-07", "2026-07-14", "2026-07-21", "2026-07-28", "2026-08-04", "2026-08-11", "2026-08-18"].map(d => ({ date: d, title: "Prof. Check-in #1", type: "session" } as CalendarEvent)),
  ...["2026-07-02", "2026-07-09", "2026-07-16", "2026-07-23", "2026-07-30", "2026-08-06", "2026-08-13", "2026-08-20"].map(d => ({ date: d, title: "Prof. Check-in #2", type: "session" } as CalendarEvent)),

  // AUGUST
  { date: "2026-08-21", title: "DUE: Final Slides & Draft", type: "deadline" },
  { date: "2026-08-24", time: "11:00 AM EST", title: "Submission Prep", type: "session", details: ["Formatting", "Review process", "Next steps"] },
  { date: "2026-08-28", title: "DUE: Final Paper Submission", type: "deadline" },
  { date: "2026-08-31", time: "1:00 PM", title: "Final Presentations", type: "milestone", details: ["Awards", "Celebration", "Conference submissions"] },
];

const months = [
  { name: "June 2026", startDay: 0, days: 30, year: 2026, monthIdx: 5 }, // Month index 0-11
  { name: "July 2026", startDay: 2, days: 31, year: 2026, monthIdx: 6 },
  { name: "August 2026", startDay: 5, days: 31, year: 2026, monthIdx: 7 },
];

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function ProgramCalendar() {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const activeMonth = months[activeMonthIndex];
  
  // Handlers
  const nextMonth = () => setActiveMonthIndex(prev => Math.min(prev + 1, months.length - 1));
  const prevMonth = () => setActiveMonthIndex(prev => Math.max(prev - 1, 0));

  // Determine events for the active month
  const getEventsForDay = (day: number) => {
    const monthStr = (activeMonth.monthIdx + 1).toString().padStart(2, '0');
    const dayStr = day.toString().padStart(2, '0');
    const dateStr = `${activeMonth.year}-${monthStr}-${dayStr}`;
    return events.filter(e => e.date === dateStr);
  };

  return (
    <div className="bg-white border border-zinc-200 shadow-sm w-full mx-auto overflow-hidden">
      
      {/* Calendar Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 bg-zinc-50/50">
        <h3 className="text-xl font-instrument-serif text-zinc-900 tracking-tight">
          {activeMonth.name}
        </h3>
        <div className="flex gap-1">
          <button 
            onClick={prevMonth} 
            disabled={activeMonthIndex === 0}
            className="p-2 hover:bg-zinc-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors rounded-sm"
          >
            <ChevronLeftIcon className="w-4 h-4 text-zinc-600" />
          </button>
          <button 
            onClick={nextMonth} 
            disabled={activeMonthIndex === months.length - 1}
            className="p-2 hover:bg-zinc-200 disabled:opacity-30 disabled:hover:bg-transparent transition-colors rounded-sm"
          >
            <ChevronRightIcon className="w-4 h-4 text-zinc-600" />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[auto]">
          {/* Grid Section */}
          <div className="flex-1 p-6 overflow-y-auto w-full lg:w-2/3 border-b lg:border-b-0 lg:border-r border-zinc-200">
            <div className="grid grid-cols-7 gap-px mb-2 text-center">
                {daysOfWeek.map(d => (
                    <div key={d} className="text-xs font-mono text-zinc-400 uppercase tracking-wider py-2">
                        {d}
                    </div>
                ))}
            </div>
            
            <div className="grid grid-cols-7 gap-px bg-zinc-200 border border-zinc-200">
                {/* Empty cells for start padding */}
                {Array.from({ length: activeMonth.startDay }).map((_, i) => (
                    <div key={`empty-${i}`} className="bg-zinc-50/30 aspect-square" />
                ))}

                {/* Days */}
                {Array.from({ length: activeMonth.days }).map((_, i) => {
                    const day = i + 1;
                    const dayEvents = getEventsForDay(day);
                    const isSelected = selectedDate === `${activeMonth.year}-${(activeMonth.monthIdx + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

                    return (
                        <div 
                            key={day} 
                            onClick={() => setSelectedDate(`${activeMonth.year}-${(activeMonth.monthIdx + 1).toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`)}
                            className={cn(
                                "group bg-white aspect-square p-2 relative cursor-pointer hover:bg-zinc-50 transition-colors flex flex-col gap-1 overflow-hidden",
                                isSelected && "bg-zinc-50 ring-1 ring-inset ring-zinc-900 z-10"
                            )}
                        >
                            <span className={cn(
                                "text-xs font-mono mb-1 block w-fit px-1.5 py-0.5 rounded-sm",
                                isSelected || dayEvents.length > 0 ? "text-zinc-900 font-bold" : "text-zinc-400"
                            )}>
                                {day}
                            </span>
                            
                            {/* Desktop Event Snippets */}
                            <div className="flex flex-col gap-1">
                                {dayEvents.slice(0, 3).map((e, idx) => (
                                    <div 
                                        key={idx} 
                                        className={cn(
                                            "text-[10px] truncate px-1 py-0.5 rounded-sm border leading-none tracking-tight",
                                            e.type === "session" && "bg-blue-50 text-blue-700 border-blue-100",
                                            e.type === "deadline" && "bg-red-50 text-red-700 border-red-100",
                                            e.type === "milestone" && "bg-amber-50 text-amber-700 border-amber-100",
                                            e.type === "other" && "bg-zinc-50 text-zinc-600 border-zinc-100",
                                        )}
                                    >
                                        {e.time ? `${e.time.split(' ')[0]} ` : ''}{e.title}
                                    </div>
                                ))}
                                {dayEvents.length > 3 && (
                                    <div className="text-[9px] text-zinc-400 px-1">+ {dayEvents.length - 3} more</div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
          </div>

          {/* Details Sidebar */}
          <div className="w-full lg:w-1/3 bg-zinc-50/50 p-6 overflow-y-auto">
             <div className="sticky top-0">
                <h4 className="text-sm font-medium text-zinc-500 tracking-tighter mb-6">
                    {selectedDate 
                        ? new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' }) 
                        : "Select a date to view details"
                    }
                </h4>

                {selectedDate ? (
                     <div className="space-y-6">
                        {events.filter(e => e.date === selectedDate).length > 0 ? (
                            events.filter(e => e.date === selectedDate).map((e, i) => (
                                <div key={i} className="bg-white p-4 border border-zinc-200 shadow-sm animate-in fade-in slide-in-from-bottom-2 duration-300 fill-mode-both" style={{ animationDelay: `${i * 100}ms` }}>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge eventType={e.type} />
                                        {e.time && (
                                            <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                                                <ClockIcon className="w-3 h-3" />
                                                {e.time}
                                            </span>
                                        )}
                                    </div>
                                    <h5 className="text-lg text-zinc-900 mb-3 leading-tight tracking-tighter">{e.title}</h5>
                                    {e.details && (
                                        <ul className="space-y-1.5">
                                            {e.details.map((detail, idx) => (
                                                <li key={idx} className="text-sm text-zinc-600 flex items-start gap-2 leading-snug tracking-tight">
                                                    <span className="block w-1 h-1 rounded-full bg-zinc-300 mt-1.5 shrink-0" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-zinc-400 text-sm">No events scheduled for this day.</p>
                            </div>
                        )}
                     </div>
                ) : (
                    <div className="text-zinc-400 text-sm leading-relaxed">
                        <p>Click on any date in the calendar to see the full schedule, including session topics, deliverables, and professor time slots.</p>
                    </div>
                )}
             </div>
          </div>
      </div>
    </div>
  );
}

function Badge({ eventType }: { eventType: EventType }) {
    const styles = {
        session: "bg-blue-100 text-blue-700 border-blue-200",
        deadline: "bg-red-100 text-red-700 border-red-200",
        milestone: "bg-amber-100 text-amber-700 border-amber-200",
        other: "bg-zinc-100 text-zinc-600 border-zinc-200"
    };

    const labels = {
        session: "Live Session",
        deadline: "Deadline",
        milestone: "Milestone",
        other: "Event"
    };

    return (
        <span className={cn("text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-sm border", styles[eventType])}>
            {labels[eventType]}
        </span>
    );
}
