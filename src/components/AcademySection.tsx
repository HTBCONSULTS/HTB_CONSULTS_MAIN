import React, { useState } from 'react';
import { ACADEMY_COURSES } from '../config/siteData';
import { AcademyCourse } from '../types';
import { ArrowRight, BookOpen, Layers, Award, Sparkles, Check, CheckCircle2 } from 'lucide-react';

interface AcademySectionProps {
  onEnquireTraining: (courseName: string) => void;
}

export const AcademySection: React.FC<AcademySectionProps> = ({ onEnquireTraining }) => {
  const [selectedCourse, setSelectedCourse] = useState<AcademyCourse | null>(null);

  return (
    <section id="academy" className="py-20 lg:py-24 bg-[#F8FAFC] bg-blueprint-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B45309] mb-3">
              <span className="w-5 h-[2px] bg-[#FFB81C]" />
              <span>HTB Consult Academy</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-[#001F3F] leading-tight">
              Build Practical Skills for{' '}
              <span className="text-[#0A2E5C] italic">Real Opportunities.</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Flexible, practical and industry-relevant training for professionals, aspiring analysts and growing businesses.
            </p>
          </div>

          <div className="font-script text-[#B45309] text-2xl hidden md:block">
            “Learn. Apply. Grow. Create Opportunities.”
          </div>
        </div>

        {/* 4 Featured Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ACADEMY_COURSES.map((course) => (
            <div
              key={course.id}
              className="htb-card bg-white rounded-xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-xs transition-colors group"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#FFF8E7] flex items-center justify-center text-[#B45309] mb-4 group-hover:bg-[#FFB81C] group-hover:text-[#001F3F] transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-500 mb-1 font-semibold uppercase">
                  <span>{course.level}</span>
                  <span aria-hidden="true">·</span>
                  <span>{course.modules} Modules</span>
                </div>

                <h3 className="font-editorial text-lg font-semibold text-[#001F3F] leading-snug">
                  {course.title}
                </h3>

                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onEnquireTraining(course.title)}
                  className="w-full py-2 px-3 text-xs font-bold text-[#001F3F] bg-slate-100 hover:bg-[#FFB81C] rounded-md transition-colors flex items-center justify-center gap-1.5 focus-visible-brand cursor-pointer"
                >
                  <span>Enquire for Team</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Pillars Strip */}
        <div className="htb-card htb-card--dark mt-12 bg-[#001F3F] text-white rounded-xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 border border-white/10">
          <div className="flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-[#FFB81C] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white">Expert-Led Content</div>
              <p className="text-xs text-slate-300 mt-0.5">
                Designed and delivered by experienced consultants with live enterprise practice.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-[#FFB81C] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white">Practical Templates</div>
              <p className="text-xs text-slate-300 mt-0.5">
                Use proven frameworks, BRD templates, and ready-to-deploy workshop artefacts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <CheckCircle2 className="w-5 h-5 text-[#FFB81C] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-bold text-white">Supportive Learning</div>
              <p className="text-xs text-slate-300 mt-0.5">
                Mentorship and real-world project coaching for individual analysts and corporate teams.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
