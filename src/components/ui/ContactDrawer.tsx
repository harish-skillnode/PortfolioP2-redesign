
"use client";

import { useEffect, useState, useCallback } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Send, User, MessageSquare } from "lucide-react"; 
import { useToast } from '@/hooks/use-toast';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [formspreeState, handleSubmit] = useForm("xqazbeav");
  const { toast } = useToast();
  const [formKey, setFormKey] = useState(Date.now()); 
  const [submissionSuccessHandled, setSubmissionSuccessHandled] = useState(false);

  useEffect(() => {
    if (formspreeState.succeeded && !submissionSuccessHandled) {
      toast({
        title: "Success!",
        description: "Your message has been sent. I'll get back to you soon.",
        variant: "default",
      });
      setFormKey(Date.now()); // Reset form fields by changing the key
      setSubmissionSuccessHandled(true); // Mark success as handled to prevent loop

      const timer = setTimeout(() => { 
          onClose();
      }, 1500); // Close drawer after a delay
      return () => clearTimeout(timer); 
    } else if (!formspreeState.succeeded && submissionSuccessHandled) {
      // Reset handled state if form is no longer in succeeded state (e.g., ready for new submission)
      setSubmissionSuccessHandled(false);
    } else if (formspreeState.errors && formspreeState.errors.length > 0 && !submissionSuccessHandled) {
      // Ensure error toast also doesn't loop if formspreeState.errors reference remains same while component re-renders
      const generalError = formspreeState.errors.find(err => !(err.field));
      if (generalError) {
         toast({
          title: "Submission Error",
          description: generalError.message || "An unexpected error occurred. Please try again.",
          variant: "destructive",
        });
      }
    }
  }, [formspreeState, toast, onClose, submissionSuccessHandled]);

  const handleSheetOpenChange = useCallback((openState: boolean) => {
    if (!openState) {
      onClose();
    }
  }, [onClose]);

  const handleOpenAutoFocus = useCallback((event: Event) => {
    event.preventDefault();
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={handleSheetOpenChange}>
      <SheetContent 
        side="bottom" 
        className="h-[85vh] md:h-[80vh] flex flex-col bg-card/95 backdrop-blur-lg shadow-xl border-t border-primary/30 rounded-t-lg"
        onOpenAutoFocus={handleOpenAutoFocus}
      >
        <SheetHeader className="text-left pt-6 px-6">
          <SheetTitle className="text-3xl font-headline text-accent">Let's Connect</SheetTitle>
          <SheetDescription className="text-foreground/80">
            Have a project in mind or just want to say hi? Fill out the form below.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-grow overflow-y-auto px-6 pb-6">
          <form onSubmit={handleSubmit} key={formKey} className="space-y-6 pt-4">
            <div>
              <Label htmlFor="name-drawer" className="flex items-center mb-1 text-foreground/90">
                <User className="mr-2 h-4 w-4 text-primary" /> Name
              </Label>
              <Input id="name-drawer" name="name" placeholder="Your Name" required className="bg-input/80 backdrop-blur-sm focus:ring-accent"/>
              <ValidationError 
                prefix="Name" 
                field="name"
                errors={formspreeState.errors}
                className="text-sm text-destructive mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email-drawer" className="flex items-center mb-1 text-foreground/90">
                <Mail className="mr-2 h-4 w-4 text-primary" /> Email
              </Label>
              <Input id="email-drawer" name="email" type="email" placeholder="your.email@example.com" required className="bg-input/80 backdrop-blur-sm focus:ring-accent"/>
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={formspreeState.errors}
                className="text-sm text-destructive mt-1"
              />
            </div>
            <div>
              <Label htmlFor="message-drawer" className="flex items-center mb-1 text-foreground/90">
                <MessageSquare className="mr-2 h-4 w-4 text-primary" /> Message
              </Label>
              <Textarea id="message-drawer" name="message" placeholder="Your message here..." rows={5} required className="bg-input/80 backdrop-blur-sm focus:ring-accent"/>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={formspreeState.errors}
                className="text-sm text-destructive mt-1"
              />
            </div>
            <Button type="submit" disabled={formspreeState.submitting} className="w-full bg-primary hover:bg-accent text-primary-foreground shadow-glow-primary hover:shadow-glow-accent transition-all duration-300">
              {formspreeState.submitting ? (
                <>
                  <Send className="mr-2 h-4 w-4 animate-pulse" /> Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
