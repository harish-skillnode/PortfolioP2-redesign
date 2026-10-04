"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
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
import { useToast } from "@/hooks/use-toast";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [formspreeState, handleSubmit, resetForm] = useForm("xqazbeav");
  const resetFormRef = useRef(resetForm);
  resetFormRef.current = resetForm;
  const { toast } = useToast();
  const [formKey, setFormKey] = useState(Date.now());
  useEffect(() => {
    if (!formspreeState.succeeded) return;
    toast({
      title: "Success!",
      description: "Your message has been sent. I'll get back to you soon.",
    });
    const timer = setTimeout(() => {
      onClose();
      setFormKey(Date.now());
      resetFormRef.current();
    }, 1500);
    return () => clearTimeout(timer);
  }, [formspreeState.succeeded, toast, onClose]);

  useEffect(() => {
    const error = formspreeState.errors?.getFormErrors()[0];
    if (error) {
      toast({
        title: "Submission Error",
        description:
          error.message || "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
  }, [formspreeState.errors, toast]);

  const handleSheetOpenChange = useCallback(
    (openState: boolean) => {
      if (!openState) {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <Sheet open={isOpen} onOpenChange={handleSheetOpenChange}>
      <SheetContent
        side="bottom"
        className="max-h-[calc(100dvh-24px)] w-full max-w-2xl mx-auto flex flex-col bg-card/95 backdrop-blur-lg shadow-xl border border-white/10 rounded-t-2xl p-5 sm:p-7"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          onClose();
        }}
      >
        <SheetHeader className="text-left pr-5">
          <SheetTitle className="text-3xl font-headline text-accent">
            Let's Connect
          </SheetTitle>
          <SheetDescription className="text-foreground/80">
            Have a project in mind or just want to say hi? Fill out the form
            below.
          </SheetDescription>
        </SheetHeader>
        <div className="min-h-0 overflow-y-auto">
          <form
            onSubmit={handleSubmit}
            key={formKey}
            className="space-y-4 pt-4"
          >
            <div>
              <Label
                htmlFor="name-drawer"
                className="flex items-center mb-1 text-foreground/90"
              >
                <User className="mr-2 h-4 w-4 text-primary" /> Name
              </Label>
              <Input
                id="name-drawer"
                name="name"
                placeholder="Your Name"
                required
                className="bg-input/80 backdrop-blur-sm focus:ring-accent"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={formspreeState.errors}
                className="text-sm text-destructive mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="email-drawer"
                className="flex items-center mb-1 text-foreground/90"
              >
                <Mail className="mr-2 h-4 w-4 text-primary" /> Email
              </Label>
              <Input
                id="email-drawer"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="bg-input/80 backdrop-blur-sm focus:ring-accent"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={formspreeState.errors}
                className="text-sm text-destructive mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="message-drawer"
                className="flex items-center mb-1 text-foreground/90"
              >
                <MessageSquare className="mr-2 h-4 w-4 text-primary" /> Message
              </Label>
              <Textarea
                id="message-drawer"
                name="message"
                placeholder="Your message here..."
                rows={3}
                required
                className="bg-input/80 backdrop-blur-sm focus:ring-accent"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={formspreeState.errors}
                className="text-sm text-destructive mt-1"
              />
            </div>
            <Button
              type="submit"
              disabled={formspreeState.submitting}
              className="w-full bg-primary hover:bg-accent text-primary-foreground shadow-glow-primary hover:shadow-glow-accent transition-all duration-300"
            >
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
