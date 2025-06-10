"use client";

import { useFormState, useFormStatus } from 'react-dom';
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Send, User, MessageSquare } from "lucide-react";
import { submitContactForm } from '@/app/actions';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: '',
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-accent shadow-glow-primary hover:shadow-glow-accent transition-all duration-300">
      {pending ? (
        <>
          <Send className="mr-2 h-4 w-4 animate-pulse" /> Sending...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" /> Send Message
        </>
      )}
    </Button>
  );
}


export default function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
       if (state.success) {
        // Reset form fields or redirect if needed
        const form = document.getElementById('contact-form') as HTMLFormElement;
        if (form) form.reset();
      }
    } else if (state.message && state.errors) {
         toast({
            title: "Validation Error",
            description: state.message,
            variant: "destructive",
        });
    }
  }, [state, toast]);


  return (
    <SectionWrapper id="contact" title="Get In Touch" className="bg-background/70 backdrop-blur-sm">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-card/80 backdrop-blur-md shadow-xl border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-headline text-accent">Let's Connect</CardTitle>
            <CardDescription className="text-foreground/80">
              Have a project in mind or just want to say hi? Fill out the form below or email me at:
              <a href="mailto:sriharish.eswarathas@example.com" className="text-primary hover:text-accent font-medium ml-1">
                sriharish.eswarathas@example.com
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-6" id="contact-form">
              <div>
                <Label htmlFor="name" className="flex items-center mb-1 text-foreground/90">
                  <User className="mr-2 h-4 w-4 text-primary" /> Name
                </Label>
                <Input id="name" name="name" placeholder="Your Name" required className="bg-input/70 backdrop-blur-sm"/>
                {state?.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="flex items-center mb-1 text-foreground/90">
                  <Mail className="mr-2 h-4 w-4 text-primary" /> Email
                </Label>
                <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-input/70 backdrop-blur-sm"/>
                {state?.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="flex items-center mb-1 text-foreground/90">
                  <MessageSquare className="mr-2 h-4 w-4 text-primary" /> Message
                </Label>
                <Textarea id="message" name="message" placeholder="Your message here..." rows={5} required className="bg-input/70 backdrop-blur-sm"/>
                {state?.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
