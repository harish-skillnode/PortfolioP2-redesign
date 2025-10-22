
"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import { portfolioChat } from '@/ai/flows/portfolio-chat-flow';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bot, Send, User, Loader2 } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface ChatbotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatbotDrawer({ isOpen, onClose }: ChatbotDrawerProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      // Format history for the Genkit flow
      const history = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await portfolioChat({ history, question: currentInput });

      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      toast({
        title: "Error",
        description: "The AI assistant is currently unavailable. Please try again later.",
        variant: "destructive",
      });
       // Restore user message if AI fails
      setMessages(messages);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSheetOpenChange = useCallback((openState: boolean) => {
    if (!openState) {
      onClose();
    }
  }, [onClose]);
  
  return (
    <Sheet open={isOpen} onOpenChange={handleSheetOpenChange}>
      <SheetContent 
        side="bottom" 
        className="h-[85vh] md:h-[80vh] flex flex-col bg-card/95 backdrop-blur-lg shadow-xl border-t border-primary/30 rounded-t-lg"
      >
        <SheetHeader className="text-left pt-6 px-6">
          <SheetTitle className="text-3xl font-headline text-accent flex items-center">
            <Bot className="mr-3 h-8 w-8" />
            AI Assistant
          </SheetTitle>
          <SheetDescription className="text-foreground/80">
            Ask me anything about Sriharish, his projects, or his experience.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="flex-grow px-6" ref={scrollAreaRef}>
          <div className="space-y-4 py-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-start gap-3",
                  message.role === 'user' ? "justify-end" : "justify-start"
                )}
              >
                {message.role === 'assistant' && (
                   <Avatar className="w-8 h-8 border-2 border-primary">
                    <AvatarFallback className="bg-accent text-accent-foreground">
                      <Bot className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    "max-w-xs md:max-w-md lg:max-w-lg p-3 rounded-lg",
                    message.role === 'user' 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                 {message.role === 'user' && (
                  <Avatar className="w-8 h-8 border-2 border-primary/50">
                    <AvatarFallback>
                      <User className="w-5 h-5" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
             {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                <Avatar className="w-8 h-8 border-2 border-primary">
                  <AvatarFallback className="bg-accent text-accent-foreground">
                    <Bot className="w-5 h-5" />
                  </AvatarFallback>
                </Avatar>
                <div className="bg-secondary text-secondary-foreground p-3 rounded-lg">
                  <Loader2 className="w-5 h-5 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="px-6 pb-6 border-t border-border/50 pt-4">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              required
              disabled={isLoading}
              className="flex-grow bg-input/80 backdrop-blur-sm focus:ring-accent"
            />
            <Button type="submit" disabled={isLoading || !input.trim()} size="icon" className="flex-shrink-0">
              <Send className="h-5 w-5" />
              <span className="sr-only">Send</span>
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
