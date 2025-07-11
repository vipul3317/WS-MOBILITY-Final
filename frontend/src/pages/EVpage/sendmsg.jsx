import React, { useState, useCallback } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building, CheckCircle, Loader } from 'lucide-react';

const Sendmsg = () => {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const validateForm = useCallback(() => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.subject || !formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 3000);
  }, [formData, validateForm]);

   const subjects = [
    "General Inquiry",
    "Dealership Opportunity",
    "Technical Support",
    "Investment Information",
    "Partnership",
    "Media & Press",
    "Other"
  ];

    return (
        <div className="lg:col-span-2 ">
            <div className="bg-green-600 container p-8 md:pl-16 md:pr-16 lg:pl-36 lg:pr-36 shadow-lg border border-gray-100">
                {isSuccess ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                        <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                    </div>
                ) : (
                    <>
                        <h3 className="text-2xl sm:text-4xl text-center font-bold text-gray-200 mb-6">Send us a Message</h3>

                        <div className="space-y-6">
                            {/* Name and Email */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-base font-semibold text-yellow-400 mb-2 flex items-center">
                                        <User className="w-4 h-4 mr-2 text-yellow-400" />
                                        Full Name <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${errors.name ? 'border-red-500' : 'border-gray-300 hover:border-green-300'
                                            }`}
                                        placeholder="Enter your full name"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-base font-semibold text-yellow-400 mb-2 flex items-center">
                                        <Mail className="w-4 h-4 mr-2 text-yellow-400" />
                                        Email Address <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${errors.email ? 'border-red-500' : 'border-gray-300 hover:border-green-300'
                                            }`}
                                        placeholder="your@email.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                            </div>

                            {/* Phone and Company */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-base font-semibold text-yellow-400 mb-2 flex items-center">
                                        <Phone className="w-4 h-4 mr-2 text-yellow-400" />
                                        Phone Number <span className="text-red-500 ml-1">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300 hover:border-green-300'
                                            }`}
                                        placeholder="+91 9876543210"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label className="block text-base font-semibold text-yellow-400 mb-2 flex items-center">
                                        <Building className="w-4 h-4 mr-2 text-yellow-400" />
                                        Company (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all hover:border-green-300"
                                        placeholder="Your company name"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-base font-semibold text-yellow-400 mb-2 flex items-center">
                                    <MessageSquare className="w-4 h-4 mr-2 text-yellow-400" />
                                    Subject <span className="text-red-500 ml-1">*</span>
                                </label>
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all ${errors.subject ? 'border-red-500' : 'border-gray-300 hover:border-green-300'
                                        }`}
                                >
                                    <option value="">Select a subject</option>
                                    {subjects.map((subject) => (
                                        <option key={subject} value={subject}>{subject}</option>
                                    ))}
                                </select>
                                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-base font-semibold text-yellow-400 mb-2 flex items-center">
                                    <MessageSquare className="w-4 h-4 mr-2 text-yellow-400" />
                                    Message <span className="text-red-500 ml-1">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none ${errors.message ? 'border-red-500' : 'border-gray-300 hover:border-green-300'
                                        }`}
                                    placeholder="Tell us about your inquiry, business needs, or how we can help you..."
                                />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                            </div>

                            {/* Submit Button */}
                            <div className="pt-4">
                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className={`py-4 px-16 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed text-yellow-400'
                                            : 'bg-gradient-to-r from-green-100 to-green-300 hover:from-green-300 hover:to-green-100 text-gray-900 hover:shadow-lg transform hover:scale-105'
                                        }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader className="w-5 h-5 mr-2 animate-spin" />
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </div>

                            <div className="text-center">
                                <p className="text-sm text-white">
                                    🔒 Your information is secure and will be used only to respond to your inquiry
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
  )
}

export default Sendmsg