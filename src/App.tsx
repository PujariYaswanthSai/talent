import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  ShieldCheck, 
  BarChart3, 
  Settings, 
  Search, 
  Bell, 
  Rocket, 
  BrainCircuit, 
  PieChart, 
  FileText, 
  Gavel, 
  History, 
  ArrowRight, 
  Download, 
  RefreshCw, 
  Target, 
  Zap, 
  CheckCircle2,
  Terminal,
  Database,
  Layers,
  Code2,
  Globe,
  Share2,
  School,
  User,
  ChevronRight,
  Info,
  Activity,
  FlaskConical,
  Scale
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  LineChart,
  Line,
  Cell
} from 'recharts';
import { cn } from './lib/utils';

// --- Types ---

type Page = 'home' | 'how-it-works' | 'features' | 'dashboard' | 'performance' | 'tech-stack' | 'ethics';

// --- Mock Data ---

const dashboardStats = [
  { label: 'Total Candidates', value: '12,842', change: '+12%', trend: 'up' },
  { label: 'Mean Success Score', value: '84.2%', progress: 84.2 },
  { label: 'Fairness Index', value: '0.98', subtext: 'Optimized Range' },
  { label: 'Models Active', value: '6', subtext: 'XGBoost, Random Forest' },
];

const hiringForecastData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 900 },
  { name: 'Jul', value: 700 },
];

const featureImportance = [
  { name: 'Technical Skills Mastery', value: 42.4 },
  { name: 'Years of Experience', value: 28.1 },
  { name: 'Cultural Alignment Score', value: 15.5 },
  { name: 'Educational Level', value: 9.2 },
  { name: 'Previous Tenure Avg.', value: 4.8 },
];

const foldData = [
  { id: '#FOLD-01', samples: '1,240', accuracy: '88.9%', f1: '0.86', precision: '0.84', recall: '0.88', status: 'Validated' },
  { id: '#FOLD-02', samples: '1,240', accuracy: '87.2%', f1: '0.85', precision: '0.83', recall: '0.87', status: 'Validated' },
  { id: '#FOLD-03', samples: '1,240', accuracy: '89.4%', f1: '0.88', precision: '0.86', recall: '0.90', status: 'Validated' },
  { id: '#FOLD-04', samples: '1,240', accuracy: '88.1%', f1: '0.86', precision: '0.84', recall: '0.88', status: 'Validated' },
  { id: '#FOLD-05', samples: '1,240', accuracy: '88.9%', f1: '0.87', precision: '0.85', recall: '0.89', status: 'Validated' },
];

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => (
  <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-primary/10 bg-background-dark/80 backdrop-blur-md lg:px-20">
    <div className="flex items-center gap-4 cursor-pointer" onClick={() => setPage('home')}>
      <div className="text-primary">
        <Layers className="w-8 h-8" />
      </div>
      <h2 className="text-xl font-bold tracking-tight text-white">TalentSelect Pro</h2>
    </div>
    
    <nav className="hidden md:flex items-center gap-9">
      {[
        { id: 'home', label: 'Platform' },
        { id: 'how-it-works', label: 'How It Works' },
        { id: 'features', label: 'Features' },
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'performance', label: 'Performance' },
        { id: 'tech-stack', label: 'Tech Stack' },
        { id: 'ethics', label: 'Ethics' },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => setPage(item.id as Page)}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            currentPage === item.id ? "text-primary border-b-2 border-primary pb-1" : "text-slate-400"
          )}
        >
          {item.label}
        </button>
      ))}
    </nav>

    <div className="flex items-center gap-4">
      <button className="hidden sm:flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold transition-all hover:bg-primary/90 shadow-lg shadow-primary/20">
        Get Started
      </button>
      <div className="relative group">
        <div className="w-10 h-10 rounded-full border-2 border-primary/20 p-0.5 overflow-hidden">
          <img 
            src="https://picsum.photos/seed/talent/100/100" 
            alt="User" 
            className="w-full h-full rounded-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="border-t border-slate-800 bg-background-dark/50 px-6 py-12 lg:px-20">
    <div className="max-w-7xl mx-auto flex flex-col items-center gap-10 text-center">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
          <Layers className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-white">TalentSelect Pro</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {['Privacy Policy', 'Terms of Service', 'Contact Support', 'System Status'].map((link) => (
            <a key={link} href="#" className="text-sm font-medium text-slate-400 hover:text-primary transition-colors">{link}</a>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6">
        {[Share2, Globe, Code2].map((Icon, i) => (
          <a key={i} href="#" className="p-2 rounded-full border border-slate-800 text-slate-400 hover:text-primary hover:border-primary transition-all">
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <div className="w-full max-w-2xl pt-8 border-t border-slate-800 space-y-4">
        <p className="text-base font-semibold text-slate-100">
          TalentSelect Pro | Final Year Engineering Project © 2025
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>Author: TalentSelect Team</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-700"></div>
          <div className="flex items-center gap-2">
            <School className="w-4 h-4" />
            <span>AI Innovation Institute</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// --- Page Sections ---

const HeroSection = ({ setPage }: { setPage: (p: Page) => void }) => (
  <section className="relative flex flex-col items-center justify-center py-20 px-6 text-center overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </span>
      Next-Gen Hiring
    </motion.div>

    <motion.h1 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white max-w-4xl mb-8"
    >
      Hire Smarter. <br />
      <span className="gradient-text">Hire Fairer.</span> <br />
      Hire with AI.
    </motion.h1>

    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12"
    >
      TalentSelect Pro is an AI-powered recruitment decision support system that delivers transparent, bias-aware, and explainable hiring insights.
    </motion.p>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="flex flex-col sm:flex-row gap-4 w-full justify-center"
    >
      <button 
        onClick={() => setPage('dashboard')}
        className="flex items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold transition-all hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/25"
      >
        Get Started <ArrowRight className="ml-2 w-5 h-5" />
      </button>
      <button 
        onClick={() => setPage('how-it-works')}
        className="flex items-center justify-center rounded-lg h-14 px-8 bg-slate-800 text-white text-base font-bold transition-all hover:bg-slate-700 border border-transparent hover:border-primary/30"
      >
        View Demo <Activity className="ml-2 w-5 h-5" />
      </button>
    </motion.div>

    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
      {[
        { icon: Zap, title: 'Predictive Power', desc: 'Our models process thousands of data points to predict candidate performance with industry-leading precision.' },
        { icon: Scale, title: 'Bias Detection', desc: 'Continuous monitoring for 24+ protected attributes ensuring every hiring decision is equitable and legal.' },
        { icon: ShieldCheck, title: 'True Transparency', desc: 'No black boxes. Get a clear report on why every candidate was scored, backed by explainable AI modules.' },
      ].map((feature, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.1 }}
          className="glass-panel p-8 rounded-2xl text-left group hover:border-primary/40 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
            <feature.icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const HowItWorksSection = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto w-full">
    <div className="mb-16 text-center lg:text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
        <Settings className="w-4 h-4 text-primary" />
        <span className="text-primary text-xs font-bold uppercase tracking-widest">Our Methodology</span>
      </div>
      <h2 className="text-4xl lg:text-6xl font-black leading-tight tracking-tight mb-6 text-white">How It Works</h2>
      <p className="text-slate-400 text-lg lg:text-xl max-w-2xl leading-relaxed">
        Our enterprise-grade AI evaluation process ensures precision, transparency, and fairness at every step of the talent acquisition pipeline.
      </p>
    </div>

    <div className="relative w-full py-10">
      <div className="hidden lg:block absolute top-[92px] left-0 w-full h-0.5 bg-slate-800 z-0">
        <div className="step-connector h-full w-full opacity-50" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
        {[
          { icon: Download, title: '1. Upload Candidate Data', desc: 'Securely ingest structured or unstructured talent data via API or direct upload. Supporting resumes, portfolios, and assessment results.' },
          { icon: BrainCircuit, title: '2. AI Model Evaluation', desc: 'Proprietary neural networks score candidates against role-specific benchmarks using deep semantic understanding.' },
          { icon: PieChart, title: '3. SHAP-Based Explanation', desc: 'Full transparency with feature attribution explaining every AI decision. Understand exactly \'why\' a candidate was ranked.' },
          { icon: ShieldCheck, title: '4. Fairness & Reporting', desc: 'Automated bias detection ensures EEO compliance. Generate detailed reports for auditing and stakeholder review.' },
        ].map((step, i) => (
          <div key={i} className="relative group z-10 flex flex-col items-center lg:items-start">
            <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center mb-6 shadow-xl shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
              <step.icon className="w-8 h-8" />
            </div>
            {i < 3 && <div className="hidden lg:block absolute top-[36px] -right-4 w-3 h-3 rounded-full bg-primary ring-4 ring-background-dark z-20" />}
            <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed text-center lg:text-left">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-20 p-8 rounded-2xl bg-primary/5 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <FileText className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-white font-bold">Deep Dive into our API</h4>
          <p className="text-slate-400 text-sm">Read the full technical whitepaper on our scoring methodology.</p>
        </div>
      </div>
      <button className="flex min-w-[160px] items-center justify-center rounded-lg h-12 px-6 bg-slate-800 text-white text-sm font-bold transition-all hover:bg-slate-700">
        View Documentation
      </button>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto w-full">
    <div className="flex flex-col mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6 w-fit">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Core Infrastructure
      </div>
      <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
        Advanced AI-Driven <br /><span className="gradient-text">Recruitment Analytics</span>
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
        Leverage enterprise-grade predictive modeling and explainable AI to transform your hiring funnel into a precision-engineered talent engine.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      {[
        { icon: BrainCircuit, title: 'Machine Learning Predictions', desc: 'Predict candidate long-term success and cultural alignment with high-fidelity algorithms trained on millions of data points.', footer: 'ACCURACY: 94.2%' },
        { icon: Activity, title: 'SHAP Waterfall Visualizations', desc: 'Explainable AI providing deep transparency for every prediction. Understand exactly which features drove a candidate\'s score.', footer: 'XAI COMPLIANT' },
        { icon: Scale, title: 'Disparate Impact Analysis', desc: 'Ensure fairness and bias mitigation across your hiring funnel with automated 4/5ths rule monitoring and impact reporting.', footer: 'EEOC AUDIT READY' },
        { icon: FileText, title: 'Resume Skill Extraction (NLP)', desc: 'Automated skill mapping using advanced linguistics to extract hidden competencies and experience levels beyond keywords.', footer: 'BERT TRANSFORMER' },
        { icon: FlaskConical, title: 'What-If Simulation', desc: 'Simulate hiring scenarios to see how adjusting selection weights or criteria affects your talent pool diversity and performance.', footer: 'REAL-TIME ENGINE' },
        { icon: RefreshCw, title: 'Model Comparison', desc: 'Benchmark multiple ML models side-by-side to find the optimal fit for specific departments, seniority levels, or regions.', footer: 'A/B TESTING ACTIVE' },
      ].map((feature, i) => (
        <div key={i} className="glass-panel rounded-2xl p-8 flex flex-col group hover:border-primary/50 transition-all">
          <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
            <feature.icon className="w-8 h-8 text-primary group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 leading-snug">{feature.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">{feature.desc}</p>
          <div className="mt-auto pt-6 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-500">{feature.footer}</span>
            <ArrowRight className="w-4 h-4 text-primary" />
          </div>
        </div>
      ))}
    </div>

    <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Model Performance Overview</h2>
          <p className="text-slate-400 text-sm">System-wide metrics across active predictive models.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-2.5 px-6 rounded-lg transition-all flex items-center gap-2">
          <Download className="w-4 h-4" /> Export System Report
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {[
          { label: 'Average Lift', val: '34%', sub: '+2.4%', subCol: 'text-emerald-500' },
          { label: 'Bias Score', val: '0.02', sub: 'Excellent', subCol: 'text-slate-500' },
          { label: 'Active Profiles', val: '852k', sub: 'Global', subCol: 'text-slate-500' },
          { label: 'Inference Time', val: '12ms', sub: '-5ms', subCol: 'text-emerald-500' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white">{stat.val}</span>
              <span className={cn("text-xs font-bold", stat.subCol)}>{stat.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const DashboardSection = () => (
  <section className="py-12 px-6 max-w-7xl mx-auto w-full">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
          Enterprise Edition
        </div>
        <h2 className="text-4xl font-black tracking-tight text-white mb-2">Live Dashboard Preview</h2>
        <p className="text-slate-400 max-w-2xl">Real-time AI talent intelligence and predictive analytics suite.</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
          <Activity className="w-5 h-5" /> Live Demo
        </button>
        <button className="flex items-center gap-2 bg-slate-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-700 transition-all">
          Documentation
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {dashboardStats.map((stat, i) => (
        <div key={i} className="glass-panel p-6 rounded-xl">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">{stat.label}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-black text-white">{stat.value}</span>
            {stat.change && <span className="text-emerald-500 text-xs font-bold">{stat.change}</span>}
          </div>
          {stat.progress && (
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-4 overflow-hidden">
              <div className="bg-primary h-full rounded-full" style={{ width: `${stat.progress}%` }} />
            </div>
          )}
          {stat.subtext && <p className="text-slate-500 text-xs mt-2">{stat.subtext}</p>}
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 glass-panel p-8 rounded-2xl">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-bold text-white">Hiring Probability Forecast</h3>
          <button className="text-slate-500 hover:text-white"><Settings className="w-5 h-5" /></button>
        </div>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={hiringForecastData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ backgroundColor: '#111022', border: '1px solid #6764f2', borderRadius: '8px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Bar dataKey="value" fill="#6764f2" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass-panel p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-white mb-8">Feature Importance</h3>
        <div className="space-y-6">
          {featureImportance.map((feature, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-slate-400">{feature.name}</span>
                <span className="text-primary">{feature.value}%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-full rounded-full" 
                  style={{ width: `${feature.value}%`, opacity: 1 - i * 0.15 }} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const PerformanceSection = () => (
  <section className="py-12 px-6 max-w-7xl mx-auto w-full space-y-8">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2 uppercase tracking-widest">
          <span>Models</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-primary">Random Forest v2.4</span>
        </nav>
        <h2 className="text-4xl font-black tracking-tight text-white">Model Performance & Validation</h2>
        <p className="text-slate-400 mt-2 max-w-2xl">Enterprise-grade machine learning diagnostics. Real-time evaluation of recruitment prediction accuracy and validation metrics.</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg font-medium hover:bg-slate-700 transition-all">
          <Download className="w-4 h-4" /> Export Report
        </button>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg font-medium hover:brightness-110 transition-all">
          <RefreshCw className="w-4 h-4" /> Re-train Model
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { icon: Target, label: 'Accuracy', val: '88.5%', sub: '+1.2%', color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
        { icon: Activity, label: 'ROC-AUC', val: '0.942', sub: '-0.005', color: 'text-orange-500', bg: 'bg-orange-500/10' },
        { icon: Users, label: 'Agreement', val: '92.3%', sub: '+2.1%', color: 'text-blue-500', bg: 'bg-blue-500/10' },
      ].map((metric, i) => (
        <div key={i} className="glass-panel p-6 rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <div className={cn("p-2 rounded-lg", metric.bg)}>
              <metric.icon className={cn("w-5 h-5", metric.color)} />
            </div>
            <span className={cn("text-xs font-bold px-2 py-1 rounded", metric.bg, metric.color)}>{metric.sub}</span>
          </div>
          <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wider">{metric.label}</h3>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-4xl font-black text-white">{metric.val}</span>
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full mt-4 overflow-hidden">
            <div className={cn("h-full rounded-full", i === 0 ? 'bg-emerald-500' : i === 1 ? 'bg-primary' : 'bg-blue-500')} style={{ width: metric.val.includes('%') ? metric.val : '94.2%' }} />
          </div>
        </div>
      ))}
    </div>

    <div className="glass-panel rounded-xl overflow-hidden">
      <div className="p-6 border-b border-slate-800">
        <h3 className="text-lg font-bold text-white">Cross-Validation Folds</h3>
        <p className="text-sm text-slate-500">Internal performance consistency across 5-fold stratification</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-primary/10 text-slate-400 text-xs font-bold uppercase">
              <th className="px-6 py-4">Fold ID</th>
              <th className="px-6 py-4">Samples</th>
              <th className="px-6 py-4">Accuracy</th>
              <th className="px-6 py-4">F1 Score</th>
              <th className="px-6 py-4">Precision</th>
              <th className="px-6 py-4">Recall</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800 text-sm">
            {foldData.map((fold, i) => (
              <tr key={i} className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-4 font-bold text-primary">{fold.id}</td>
                <td className="px-6 py-4 text-slate-300">{fold.samples}</td>
                <td className="px-6 py-4 text-slate-300">{fold.accuracy}</td>
                <td className="px-6 py-4 text-slate-300">{fold.f1}</td>
                <td className="px-6 py-4 text-slate-300">{fold.precision}</td>
                <td className="px-6 py-4 text-slate-300">{fold.recall}</td>
                <td className="px-6 py-4">
                  <span className="flex items-center gap-2 text-emerald-500 font-medium">
                    <CheckCircle2 className="w-3 h-3" /> {fold.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

const TechStackSection = () => (
  <section className="py-20 px-6 max-w-6xl mx-auto w-full">
    <div className="flex flex-col gap-4 max-w-2xl mb-16">
      <span className="text-primary font-semibold tracking-wider text-xs uppercase">Engineering Excellence</span>
      <h2 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Technology Stack</h2>
      <p className="text-slate-400 text-lg leading-relaxed">
        A robust, high-performance infrastructure built on industry-leading open source technologies to power next-generation AI recruitment and predictive talent analytics.
      </p>
    </div>

    <div className="space-y-16">
      <section>
        <div className="flex items-center gap-3 mb-8">
          <Layers className="w-6 h-6 text-primary" />
          <h3 className="text-white text-2xl font-bold">Backend & Infrastructure</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Terminal, title: 'Python', desc: 'Our primary high-level language for robust backend logic and AI orchestration.' },
            { icon: Globe, title: 'Flask', desc: 'Lightweight and flexible WSGI micro-framework for high-performance API services.' },
            { icon: Database, title: 'SQLAlchemy', desc: 'Production-grade SQL toolkit and Object Relational Mapper for data persistence.' },
          ].map((tech, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-all">
              <tech.icon className="w-10 h-10 text-slate-500 mb-4 transition-colors group-hover:text-primary" />
              <h4 className="text-white text-lg font-bold mb-2">{tech.title}</h4>
              <p className="text-slate-400 text-sm">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-8">
          <BrainCircuit className="w-6 h-6 text-primary" />
          <h3 className="text-white text-2xl font-bold">Machine Learning & Data Science</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Activity, title: 'scikit-learn', desc: 'Industry standard tools for predictive data analysis and candidate matching algorithms.' },
            { icon: Search, title: 'SHAP', desc: 'Explainable AI framework to ensure fairness and transparency in talent scoring.' },
            { icon: BarChart3, title: 'pandas', desc: 'High-performance data manipulation for complex resume and profile datasets.' },
          ].map((tech, i) => (
            <div key={i} className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-all">
              <tech.icon className="w-10 h-10 text-slate-500 mb-4 transition-colors group-hover:text-primary" />
              <h4 className="text-white text-lg font-bold mb-2">{tech.title}</h4>
              <p className="text-slate-400 text-sm">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  </section>
);

const EthicsSection = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto w-full">
    <div className="flex flex-col items-center text-center mb-20 gap-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
        <ShieldCheck className="w-4 h-4" /> Responsible AI Framework
      </div>
      <h2 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight max-w-4xl">
        Built on <span className="gradient-text">Responsible AI</span> Principles.
      </h2>
      <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
        Our commitment to fairness, transparency, and ethical excellence in recruitment. We ensure every candidate is evaluated purely on merit, free from systemic bias.
      </p>
      <div className="flex gap-4">
        <button className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-all">
          Download Audit Report
        </button>
        <button className="bg-slate-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-slate-700 transition-all">
          View Methodology
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { icon: Search, title: 'Bias Detection', desc: 'Automated real-time monitoring to identify and neutralize algorithmic bias across demographic variables.' },
        { icon: Gavel, title: '80% Rule Compliance', desc: 'Strict adherence to EEOC and adverse impact guidelines, ensuring selection rates are statistically fair.' },
        { icon: History, title: 'Transparent Logs', desc: 'Full auditability of every AI-driven step. We provide clear explanations for every candidate score.' },
        { icon: Users, title: 'Human Oversight', desc: 'AI assists, it doesn\'t decide. Final hiring decisions always remain in the hands of qualified recruiters.' },
      ].map((item, i) => (
        <div key={i} className="glass-panel p-8 rounded-xl hover:border-primary/40 transition-all">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
            <item.icon className="w-6 h-6" />
          </div>
          <h4 className="text-white text-xl font-bold mb-3">{item.title}</h4>
          <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

// --- Main App ---

export default function App() {
  const [currentPage, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-background-dark">
      <Navbar currentPage={currentPage} setPage={setPage} />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'home' && <HeroSection setPage={setPage} />}
            {currentPage === 'how-it-works' && <HowItWorksSection />}
            {currentPage === 'features' && <FeaturesSection />}
            {currentPage === 'dashboard' && <DashboardSection />}
            {currentPage === 'performance' && <PerformanceSection />}
            {currentPage === 'tech-stack' && <TechStackSection />}
            {currentPage === 'ethics' && <EthicsSection />}
          </motion.div>
        </AnimatePresence>

        {/* Final CTA for all pages except home */}
        {currentPage !== 'home' && (
          <section className="py-20 px-6 max-w-4xl mx-auto text-center">
            <div className="relative overflow-hidden rounded-xl glass-panel p-16">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <Rocket className="w-12 h-12 text-primary mb-2" />
                <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
                  Transform Recruitment with <span className="text-primary">Transparent AI</span>
                </h2>
                <p className="max-w-2xl text-slate-400 text-lg leading-relaxed">
                  Empower your hiring process with explainable AI insights and data-driven decisions. Join the future of recruitment today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
                  <button className="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-base font-bold transition-all hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/25">
                    Access Dashboard <LayoutDashboard className="ml-2 w-5 h-5" />
                  </button>
                  <button className="flex min-w-[200px] items-center justify-center rounded-lg h-14 px-8 bg-slate-800 text-white text-base font-bold transition-all hover:bg-slate-700">
                    View Documentation <FileText className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
