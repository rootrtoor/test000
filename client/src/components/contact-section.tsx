import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  newsletter: boolean;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const apiUrl = import.meta.env.VITE_API_BASE_URL || '';
      if (apiUrl) {
        // Use AWS API Gateway endpoint
        const response = await fetch(`${apiUrl}/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        
        if (!response.ok) {
          throw new Error('Failed to submit contact form');
        }
        
        return response.json();
      } else {
        // Fallback to local development endpoint
        return apiRequest("POST", "/api/contact", data);
      }
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
        newsletter: false
      });
      queryClient.invalidateQueries({ queryKey: ["/api", "contact"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const updateFormData = (field: keyof ContactFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 bg-campaign-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold campaign-blue mb-6">
              Contact Our Campaign
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Have questions? Want to get involved? We'd love to hear from you. 
              Reach out to our campaign team and let's work together for Albuquerque's future.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-campaign-blue rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold campaign-blue mb-1">Campaign Headquarters</h4>
                  <p className="text-gray-700">
                    123 Central Avenue NW<br/>
                    Albuquerque, NM 87102
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-campaign-green rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold campaign-green mb-1">Phone</h4>
                  <p className="text-gray-700">(505) 555-JERRY</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-campaign-red rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold campaign-red mb-1">Email</h4>
                  <p className="text-gray-700">info@jerrytrudell2024.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-campaign-gold rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold campaign-gold mb-1">Office Hours</h4>
                  <p className="text-gray-700">
                    Monday - Friday: 9:00 AM - 6:00 PM<br/>
                    Saturday: 10:00 AM - 4:00 PM
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold campaign-blue mb-4">Follow Our Campaign</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-campaign-blue hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-campaign-blue hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-campaign-blue hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-campaign-blue hover:bg-blue-800 rounded-lg flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold campaign-blue mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <Input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <Input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                  placeholder="john.doe@email.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <Select value={formData.subject} onValueChange={(value) => updateFormData('subject', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="volunteer">Volunteer Opportunities</SelectItem>
                    <SelectItem value="events">Campaign Events</SelectItem>
                    <SelectItem value="media">Media Inquiry</SelectItem>
                    <SelectItem value="endorsement">Endorsement</SelectItem>
                    <SelectItem value="general">General Question</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => updateFormData('message', e.target.value)}
                  placeholder="Tell us how you'd like to get involved or what questions you have..."
                  required
                />
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="newsletter" 
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => updateFormData('newsletter', checked as boolean)}
                />
                <label htmlFor="newsletter" className="text-sm text-gray-700">
                  Subscribe to campaign updates and volunteer opportunities
                </label>
              </div>
              
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-campaign-blue hover:bg-blue-800 text-white"
              >
                {contactMutation.isPending ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
