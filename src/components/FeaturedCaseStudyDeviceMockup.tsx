import React from 'react';

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const scheduleRows = [
  ['09:00', '', 'Review', '', 'Call'],
  ['10:00', 'Visit', '', 'Follow-up', ''],
  ['11:00', '', 'Referral', '', 'Visit'],
  ['12:00', 'Call', '', '', 'Review'],
];

export const FeaturedCaseStudyDeviceMockup: React.FC = () => (
  <div
    role="img"
    aria-label="Illustrative care appointment dashboard shown on a laptop with a companion mobile booking screen"
    className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_48%_40%,#FFFFFF_0%,#F4F7FA_58%,#E7EDF4_100%)] px-4 sm:aspect-[16/10] lg:aspect-auto lg:min-h-[420px]"
  >
    <div aria-hidden="true" className="absolute inset-x-[12%] bottom-[13%] h-7 rounded-full bg-[#17344D]/10 blur-xl" />
    <div aria-hidden="true" className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-[#FFB81C]/10 blur-3xl" />

    <div aria-hidden="true" className="relative z-10 flex w-full max-w-[680px] items-end justify-center pb-7 sm:px-5">
      <div className="relative w-[88%]">
        <div className="overflow-hidden rounded-t-[0.85rem] border-[5px] border-b-0 border-[#172C40] bg-[#172C40] p-[3px] shadow-xl shadow-[#001F3F]/20 sm:border-[7px] sm:p-1">
          <div className="aspect-[16/10] overflow-hidden rounded-t-[0.35rem] bg-white font-sans text-[#24384B]">
            <div className="flex h-full min-h-0">
              <aside className="flex w-[22%] shrink-0 flex-col gap-2 bg-[#F2F5F9] px-1.5 py-2 sm:gap-3 sm:px-2.5 sm:py-3">
                <div className="mb-1 flex items-center gap-1 text-[6px] font-extrabold text-[#12385B] sm:text-[9px]">
                  <span className="grid h-3.5 w-3.5 place-items-center rounded bg-[#0B63CE] text-[7px] text-white sm:h-5 sm:w-5 sm:text-[9px]">C</span>
                  CareDesk
                </div>
                <div className="rounded bg-[#DCEBFB] px-1 py-1 text-[5px] font-bold text-[#075CB8] sm:px-1.5 sm:text-[7px]">Appointments</div>
                <div className="px-1 py-0.5 text-[5px] text-slate-500 sm:px-1.5 sm:text-[7px]">Service users</div>
                <div className="px-1 py-0.5 text-[5px] text-slate-500 sm:px-1.5 sm:text-[7px]">Referrals</div>
                <div className="px-1 py-0.5 text-[5px] text-slate-500 sm:px-1.5 sm:text-[7px]">Reports</div>
                <div className="mt-auto border-t border-slate-200 px-1 pt-2 text-[5px] text-slate-500 sm:px-1.5 sm:text-[7px]">Settings</div>
              </aside>

              <main className="min-w-0 flex-1 bg-white px-2 py-2 sm:px-3 sm:py-3">
                <div className="flex items-start justify-between gap-1">
                  <div>
                    <p className="text-[8px] font-bold leading-tight sm:text-[12px]">Appointments</p>
                    <p className="mt-0.5 text-[5px] text-slate-500 sm:text-[7px]">Team schedule · This week</p>
                  </div>
                  <div className="rounded bg-[#0B63CE] px-1.5 py-1 text-[5px] font-semibold text-white sm:px-2 sm:text-[7px]">+ New</div>
                </div>

                <div className="mt-2 flex gap-1 sm:mt-3 sm:gap-1.5">
                  <div className="flex-1 rounded border border-slate-100 bg-[#F8FAFC] px-1 py-1">
                    <p className="text-[4px] text-slate-500 sm:text-[6px]">Today</p>
                    <p className="text-[6px] font-bold sm:text-[8px]">18 visits</p>
                  </div>
                  <div className="flex-1 rounded border border-slate-100 bg-[#F8FAFC] px-1 py-1">
                    <p className="text-[4px] text-slate-500 sm:text-[6px]">Referrals</p>
                    <p className="text-[6px] font-bold sm:text-[8px]">06 new</p>
                  </div>
                  <div className="flex-1 rounded border border-slate-100 bg-[#F8FAFC] px-1 py-1">
                    <p className="text-[4px] text-slate-500 sm:text-[6px]">Team</p>
                    <p className="text-[6px] font-bold sm:text-[8px]">12 active</p>
                  </div>
                </div>

                <div className="mt-2 overflow-hidden rounded border border-slate-100 sm:mt-3">
                  <div className="grid grid-cols-[20px_repeat(5,minmax(0,1fr))] bg-[#F8FAFC] text-center text-[4px] font-semibold text-slate-500 sm:grid-cols-[28px_repeat(5,minmax(0,1fr))] sm:text-[6px]">
                    <span className="py-1" />
                    {weekDays.map((day) => <span key={day} className="py-1">{day}</span>)}
                  </div>
                  {scheduleRows.map((row) => (
                    <div key={row[0]} className="grid h-4 grid-cols-[20px_repeat(5,minmax(0,1fr))] border-t border-slate-100 sm:h-5 sm:grid-cols-[28px_repeat(5,minmax(0,1fr))]">
                      <span className="self-center text-center text-[4px] text-slate-400 sm:text-[5px]">{row[0]}</span>
                      {row.slice(1).map((appointment, index) => (
                        <span key={`${row[0]}-${index}`} className="border-l border-slate-100 p-[2px]">
                          {appointment && <span className={`block truncate rounded px-0.5 py-0.5 text-[4px] leading-tight sm:text-[5px] ${index % 2 ? 'bg-[#D8F1E8] text-[#26775B]' : 'bg-[#DDEBFB] text-[#285E97]'}`}>{appointment}</span>}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
        <div className="relative h-3 rounded-b-[0.45rem] bg-gradient-to-b from-[#CCD3DA] via-[#AEB8C2] to-[#7E8B97] shadow-md sm:h-4">
          <div className="absolute left-[42%] top-0 h-1 w-[16%] rounded-b-md bg-[#8D99A4]/80" />
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[1%] z-20 w-[22%] max-w-[130px] min-w-[72px]">
        <div className="rounded-[1rem] border-[3px] border-[#1B2936] bg-[#1B2936] p-[2px] shadow-xl shadow-[#001F3F]/25 sm:rounded-[1.2rem] sm:border-4 sm:p-[3px]">
          <div className="relative aspect-[0.53] overflow-hidden rounded-[0.8rem] bg-white px-1.5 pb-2 pt-4 font-sans text-[#24384B] sm:rounded-[1rem] sm:px-2 sm:pt-5">
            <div className="absolute left-1/2 top-1.5 h-1 w-7 -translate-x-1/2 rounded-full bg-[#1B2936] sm:top-2 sm:h-1.5 sm:w-9" />
            <p className="text-[6px] font-bold sm:text-[8px]">Care appointments</p>
            <p className="mt-1 text-[5px] text-slate-500 sm:text-[6px]">Book a support visit</p>
            <div className="mt-2 rounded-md bg-[#EFF5FC] p-1.5 sm:mt-3 sm:p-2">
              <p className="text-[4px] font-semibold uppercase tracking-wide text-[#55718E] sm:text-[5px]">Next available</p>
              <p className="mt-0.5 text-[7px] font-bold text-[#12385B] sm:text-[9px]">Thu, 15 Oct</p>
              <p className="text-[5px] text-slate-600 sm:text-[6px]">09:30 · Community team</p>
            </div>
            <p className="mt-2 text-[5px] font-semibold sm:mt-3 sm:text-[6px]">Choose a time</p>
            <div className="mt-1 grid grid-cols-2 gap-1">
              <span className="rounded border border-[#B9D0EA] px-1 py-0.5 text-center text-[4px] text-[#285E97] sm:text-[5px]">09:30</span>
              <span className="rounded border border-slate-200 px-1 py-0.5 text-center text-[4px] text-slate-500 sm:text-[5px]">10:45</span>
            </div>
            <div className="mt-2 rounded bg-[#0B63CE] py-1 text-center text-[5px] font-bold text-white sm:mt-3 sm:py-1.5 sm:text-[6px]">Request visit</div>
          </div>
        </div>
        <div className="mx-auto h-1.5 w-1/2 rounded-b-md bg-[#7E8B97]" />
      </div>
    </div>

    <span aria-hidden="true" className="absolute bottom-3 left-3 rounded-full border border-slate-200 bg-white/90 px-2.5 py-1 text-[9px] font-medium text-slate-500 shadow-sm sm:bottom-4 sm:left-4 sm:text-[10px]">
      Illustrative interface concept
    </span>
  </div>
);
