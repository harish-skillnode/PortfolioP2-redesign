
"use client";

import { useEffect, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
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
import { submitContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

const initialState = {
  message: '',
  errors: {},
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-accent text-primary-foreground shadow-glow-primary hover:shadow-glow-accent transition-all duration-300">
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

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const [formKey, setFormKey] = useState(Date.now()); 

  useEffect(() => {
    if (state.message && !state.success && state.errors && Object.keys(state.errors).length > 0) {
      toast({
        title: "Validation Error",
        description: state.message || "Please check the form for errors.",
        variant: "destructive",
      });
    } else if (state.message) { 
       toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        setFormKey(Date.now()); 
        setTimeout(() => {
            onClose();
        }, 1500);
      }
    }
  }, [state, toast, onClose]);

  return (
    <Sheet open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <SheetContent 
        side="bottom" 
        className="h-[85vh] md:h-[80vh] flex flex-col bg-card/95 backdrop-blur-lg shadow-xl border-t border-primary/30 rounded-t-lg"
        onOpenAutoFocus={(e) => e.preventDefault()} // Prevents auto-focus on first input
      >
        <SheetHeader className="text-left pt-6 px-6">
          <SheetTitle className="text-3xl font-headline text-accent">Let's Connect</SheetTitle>
          <SheetDescription className="text-foreground/80">
            Have a project in mind or just want to say hi? Fill out the form below.
          </SheetDescription>
        </SheetHeader>
        <div className="flex-grow overflow-y-auto px-6 pb-6">
          <form action={formAction} key={formKey} className="space-y-6 pt-4">
            <div>
              <Label htmlFor="name-drawer" className="flex items-center mb-1 text-foreground/90">
                <User className="mr-2 h-4 w-4 text-primary" /> Name
              </Label>
              <Input id="name-drawer" name="name" placeholder="Your Name" required className="bg-input/80 backdrop-blur-sm focus:ring-accent"/>
              {state?.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
            </div>
            <div>
              <Label htmlFor="email-drawer" className="flex items-center mb-1 text-foreground/90">
                <Mail className="mr-2 h-4 w-4 text-primary" /> Email
              </Label>
              <Input id="email-drawer" name="email" type="email" placeholder="your.email@example.com" required className="bg-input/80 backdrop-blur-sm focus:ring-accent"/>
              {state?.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
            </div>
            <div>
              <Label htmlFor="message-drawer" className="flex items-center mb-1 text-foreground/90">
                <MessageSquare className="mr-2 h-4 w-4 text-primary" /> Message
              </Label>
              <Textarea id="message-drawer" name="message" placeholder="Your message here..." rows={5} required className="bg-input/80 backdrop-blur-sm focus:ring-accent"/>
              {state?.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
            </div>
            <SubmitButton />
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
