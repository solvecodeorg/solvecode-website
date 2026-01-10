export interface Project {
  image: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1080&q=80",
    title: "Email Notification System",
    description:
      "Real-time email notification service with queue management, templates, and delivery tracking for high-volume applications.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Internal analytics & BI Dashboard",
    description:
      "A full-stack platform developed for the management and analysis of business data in real time. The system allows for complete control of sales, customers, and products through a modern and intuitive interface.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1080&q=80",
    title: "Authentication Backend API",
    description:
      "Complete BaaS (Backend as a Service) authentication system with JWT, OAuth2, role management, and more advanced security features.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1080&q=80",
    title: "Library Backend Service API",
    description:
      "Robust RESTful API for library management with book cataloging, user management, borrowing system, and search functionality.",
  },
];
