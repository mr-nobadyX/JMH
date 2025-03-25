
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, User, Mail, Phone, MessageSquare, Loader2 } from "lucide-react";
import emailjs from 'emailjs-com';

// Update validation schema per requirements
const formSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string()
    .regex(/^\d+$/, "Please enter only numbers")
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number must not exceed 10 digits"),
  message: z.string().min(8, "Message must be at least 8 characters"),
});

// EmailJS configuration
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
const EMAILJS_USER_ID = "YOUR_USER_ID"; // Replace with your EmailJS user ID
const ADMIN_TEMPLATE_ID = "YOUR_ADMIN_TEMPLATE_ID"; // Replace with your admin notification template

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Send confirmation email to user
      const userEmailParams = {
        to_name: values.name,
        to_email: values.email,
        message: values.message,
      };
      
      // Send notification email to admin
      const adminEmailParams = {
        from_name: values.name,
        from_email: values.email,
        from_phone: values.phone,
        message: values.message,
      };
      
      // Send emails in parallel
      await Promise.all([
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          userEmailParams,
          EMAILJS_USER_ID
        ),
        emailjs.send(
          EMAILJS_SERVICE_ID,
          ADMIN_TEMPLATE_ID,
          adminEmailParams,
          EMAILJS_USER_ID
        )
      ]);
      
      toast({
        title: "Message sent successfully!",
        description: "We've received your message and sent you a confirmation email.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Failed to send message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg h-full">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
        <MessageSquare className="h-6 w-6 text-primary-600 mr-2" />
        Send us a Message
      </h2>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <User className="h-4 w-4 text-primary-600 mr-2" />
                  Full Name
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Doe" 
                    {...field} 
                    className="border-gray-200 focus-visible:ring-primary-500" 
                    onChange={(e) => {
                      // Only allow letters and spaces
                      const value = e.target.value.replace(/[^a-zA-Z\s]/g, '');
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <Mail className="h-4 w-4 text-primary-600 mr-2" />
                  Email
                </FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} className="border-gray-200 focus-visible:ring-primary-500" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <Phone className="h-4 w-4 text-primary-600 mr-2" />
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="1234567890" 
                    {...field} 
                    className="border-gray-200 focus-visible:ring-primary-500" 
                    maxLength={10}
                    onChange={(e) => {
                      // Only allow numbers and limit to 10 digits
                      const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex items-center">
                  <MessageSquare className="h-4 w-4 text-primary-600 mr-2" />
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="How can we help you?"
                    className="min-h-[120px] border-gray-200 focus-visible:ring-primary-500"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            className="w-full bg-primary-600 hover:bg-primary-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
