"use client";
import { useState } from "react";
import Section from "../components/Section";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Email",
    value: "isbishalde@gmail.com",
    link: "mailto:isbishalde@gmail.com"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: "Phone",
    value: "+91 8299260163",
    link: "tel:+91 8299260163"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "India",
    value: "Bengaluru, KA",
    link: null
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Response Time",
    value: "Within 24 hours",
    link: null
  }
];

export default function Contact() {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message || "Failed");
      setStatus("success");
      setFormData({ name: '', email: '', message: '' });
      e.currentTarget.reset();
      setTimeout(() => setStatus(null), 5000);
    } catch (err) {
      setStatus(err.message || "error");
      setTimeout(() => setStatus(null), 5000);
    }
  }

  const handleInputChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's create something amazing together"
      subtitle="Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life."
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <Reveal>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="grid gap-4">
                {contactInfo.map((item, index) => (
                  <Reveal key={index} delay={index * 0.1}>
                    <div className="group">
                      {item.link ? (
                        <a
                          href={item.link}
                          className="flex items-center gap-4 p-4 rounded-xl glass hover:glass-strong transition-all duration-300 hover:scale-[1.02] hover:shadow-premium"
                        >
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-muted-foreground text-sm">{item.value}</p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 rounded-xl glass transition-all duration-300">
                          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{item.title}</h4>
                            <p className="text-muted-foreground text-sm">{item.value}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Social Links */}
          <Reveal delay={0.4}>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/bishalde/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass hover:glass-strong flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2C20.4 8 24 10.42 24 16.1V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/bishalde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass hover:glass-strong flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.23-1.61-1.23-1.61-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.67 2.56 1.19 3.19.91.1-.71.38-1.19.7-1.47-2.44-.28-5-1.22-5-5.45 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.42.11-2.95 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 2.78-.37c.94 0 1.88.13 2.77.37 2.12-1.43 3.05-1.13 3.05-1.13.6 1.53.22 2.67.11 2.95.7.77 1.13 1.75 1.13 2.95 0 4.24-2.56 5.16-5 5.44.39.33.74.98.74 1.99 0 1.44-.01 2.6-.01 2.95 0 .29.19.64.76.53A11.02 11.02 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/itsbishalde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg glass hover:glass-strong flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.9.25 2.35.42.59.23 1.01.5 1.45.94.44.44.7.86.94 1.45.17.45.36 1.15.42 2.35.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.9-.42 2.35a3.9 3.9 0 0 1-.94 1.45 3.9 3.9 0 0 1-1.45.94c-.45.17-1.15.36-2.35.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.9-.25-2.35-.42a3.9 3.9 0 0 1-1.45-.94 3.9 3.9 0 0 1-.94-1.45c-.17-.45-.36-1.15-.42-2.35C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.9.42-2.35.23-.59.5-1.01.94-1.45.44-.44.86-.7 1.45-.94.45-.17 1.15-.36 2.35-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.77.07-.98.05-1.51.21-1.86.35-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.35-.3.88-.35 1.86-.07 1.25-.07 1.62-.07 4.77s0 3.52.07 4.77c.05.98.21 1.51.35 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.35.14.88.3 1.86.35 1.25.07 1.62.07 4.77.07s3.52 0 4.77-.07c.98-.05 1.51-.21 1.86-.35.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.35.3-.88.35-1.86.07-1.25.07-1.62.07-4.77s0-3.52-.07-4.77c-.05-.98-.21-1.51-.35-1.86a2.36 2.36 0 0 0-.75-1.15 2.36 2.36 0 0 0-1.15-.75c-.35-.14-.88-.3-1.86-.35-1.25-.07-1.62-.07-4.77-.07Zm0 3.2a6.8 6.8 0 1 1 0 13.6 6.8 6.8 0 0 1 0-13.6Zm0 1.8a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm5.5-2.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Contact Form */}
        <Reveal delay={0.2}>
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="text-xl font-semibold text-foreground mb-2">Send a Message</h3>
              <p className="text-muted-foreground">Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>
            
            <form onSubmit={onSubmit} className="space-y-6 card rounded-2xl p-8 border-gradient relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
              </div>
              
              <div className="relative space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      name="name" 
                      required 
                      className="input w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Enter your full name"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-foreground">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      className="input w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Enter your email address"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-foreground">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    name="message" 
                    rows="6" 
                    required 
                    className="input textarea w-full px-4 py-3 rounded-lg border border-border bg-card/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Button 
                    as="button" 
                    type="submit" 
                    className="w-full sm:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-black font-semibold rounded-lg shadow-premium hover:shadow-premium-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </span>
                    )}
                  </Button>
                  
                  {/* Status Messages */}
                  {status === "success" && (
                    <div className="flex items-center gap-2 text-green-500 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium">Message sent successfully!</span>
                    </div>
                  )}
                  
                  {status && status !== "loading" && status !== "success" && (
                    <div className="flex items-center gap-2 text-red-500 bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium">{String(status)}</span>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
