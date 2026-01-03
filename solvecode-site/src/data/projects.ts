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
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1080&q=80",
    title: "Authentication Backend API",
    description:
      "Complete BaaS (Backend as a Service) authentication system with JWT, OAuth2, role management, and more advanced security features.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=1080&q=80",
    title: "Burger Restaurant Website",
    description:
      "Modern and responsive website for a local burger restaurant with online menu, ordering system, and location details.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1080&q=80",
    title: "Library Backend Service API",
    description:
      "Robust RESTful API for library management with book cataloging, user management, borrowing system, and search functionality.",
  },
];
