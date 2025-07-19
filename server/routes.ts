import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Contact form submission error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Failed to submit contact form. Please check your information and try again." 
      });
    }
  });

  // Get contact submissions (for admin use)
  app.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ 
        message: "Failed to fetch contact submissions" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
