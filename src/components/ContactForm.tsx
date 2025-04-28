
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll be in touch soon.",
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-novawav-lightGrey">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">Ready to elevate your digital presence? Let's talk about your project.</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold text-novawav-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-novawav-navy bg-opacity-10 flex items-center justify-center mr-4">
                    <Mail size={20} className="text-novawav-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-novawav-navy">Email</p>
                    <a href="mailto:contact@novawavdigital.com" className="text-gray-600 hover:text-novawav-emerald transition-colors">
                      contact@novawavdigital.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-novawav-navy bg-opacity-10 flex items-center justify-center mr-4">
                    <Phone size={20} className="text-novawav-navy" />
                  </div>
                  <div>
                    <p className="font-medium text-novawav-navy">Phone</p>
                    <a href="tel:+61400000000" className="text-gray-600 hover:text-novawav-emerald transition-colors">
                      +61 400 000 000
                    </a>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <p className="font-medium text-novawav-navy mb-4">Connect on Social Media</p>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-novawav-navy text-white flex items-center justify-center hover:bg-novawav-emerald transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-novawav-navy text-white flex items-center justify-center hover:bg-novawav-emerald transition-colors">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-novawav-navy mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-novawav-emerald focus:border-novawav-emerald outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-novawav-emerald focus:border-novawav-emerald outline-none transition"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-novawav-emerald focus:border-novawav-emerald outline-none transition"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-novawav-emerald focus:border-novawav-emerald outline-none transition"
                    >
                      <option value="">Select a service</option>
                      <option value="website">Website Creation</option>
                      <option value="social">Social Media Management</option>
                      <option value="storytelling">Brand Storytelling</option>
                      <option value="paid">Paid Traffic Management</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-novawav-emerald focus:border-novawav-emerald outline-none transition"
                    placeholder="Tell us about your project or requirements"
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
