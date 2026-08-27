"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Analytics() {
    return (
        <section id="analytics-section" className="space-y-8">
            <h2 className="font-headline-md text-headline-md text-on-surface">Technical Impact Analytics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {/* Donut Chart Card */}
                <div className="glass-card rounded-xl p-6 h-64 flex flex-col items-center justify-center relative">
                    <h3 className="font-label-md text-label-md text-on-surface-variant absolute top-6 left-6">Project Distribution</h3>
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40" stroke="rgba(141, 144, 160, 0.3)" strokeWidth="8" fill="none" />
                            <motion.circle 
                                cx="50" cy="50" r="40" 
                                stroke="#b4c5ff" 
                                strokeWidth="8" 
                                fill="none"
                                strokeDasharray="251.2"
                                initial={{ strokeDashoffset: 251.2 }}
                                whileInView={{ strokeDashoffset: 60 }}
                                transition={{ type: "spring", duration: 2, bounce: 0, delay: 0.2 }}
                                viewport={{ once: true, margin: "-50px" }}
                            />
                        </svg>
                        <span className="absolute font-body-lg text-body-lg text-on-surface">42</span>
                    </div>
                </div>

                {/* Area Chart Card */}
                <div className="glass-card rounded-xl p-6 h-64 flex flex-col relative overflow-hidden">
                    <h3 className="font-label-md text-label-md text-on-surface-variant mb-4">System Uptime</h3>
                    <div className="flex-grow w-full border-b border-l border-outline-variant/30 flex items-end">
                        <motion.div className="w-1/4 bg-primary/20 border-t border-primary rounded-tr origin-bottom" initial={{ height: 0 }} whileInView={{ height: '50%' }} transition={{ type: "spring", delay: 0.1 }} viewport={{ once: true, margin: "-50px" }} />
                        <motion.div className="w-1/4 bg-primary/30 border-t border-primary rounded-tr origin-bottom" initial={{ height: 0 }} whileInView={{ height: '75%' }} transition={{ type: "spring", delay: 0.2 }} viewport={{ once: true, margin: "-50px" }} />
                        <motion.div className="w-1/4 bg-primary/40 border-t border-primary rounded-tr origin-bottom" initial={{ height: 0 }} whileInView={{ height: '66.66%' }} transition={{ type: "spring", delay: 0.3 }} viewport={{ once: true, margin: "-50px" }} />
                        <motion.div className="w-1/4 bg-primary/50 border-t border-primary rounded-tr origin-bottom" initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ type: "spring", delay: 0.4 }} viewport={{ once: true, margin: "-50px" }} />
                    </div>
                </div>

                {/* Bar Chart Card */}
                <div className="glass-card rounded-xl p-6 h-64 flex flex-col relative">
                    <h3 className="font-label-md text-label-md text-on-surface-variant mb-4">Certifications</h3>
                    <div className="flex-grow w-full flex items-end justify-between px-4 border-b border-outline-variant/30 gap-2">
                        <motion.div className="w-8 bg-secondary rounded-t-sm origin-bottom" initial={{ height: 0 }} whileInView={{ height: '33.33%' }} transition={{ type: "spring", delay: 0.1 }} viewport={{ once: true, margin: "-50px" }} />
                        <motion.div className="w-8 bg-secondary rounded-t-sm origin-bottom" initial={{ height: 0 }} whileInView={{ height: '50%' }} transition={{ type: "spring", delay: 0.2 }} viewport={{ once: true, margin: "-50px" }} />
                        <motion.div className="w-8 bg-secondary rounded-t-sm origin-bottom" initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ type: "spring", delay: 0.3 }} viewport={{ once: true, margin: "-50px" }} />
                        <motion.div className="w-8 bg-secondary rounded-t-sm origin-bottom" initial={{ height: 0 }} whileInView={{ height: '75%' }} transition={{ type: "spring", delay: 0.4 }} viewport={{ once: true, margin: "-50px" }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
