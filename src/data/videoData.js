export const videoData = [
  {
    id: 1,
    title: "Intro to Web Development",
    description: "Learn the basics of web development in this beginner-friendly tutorial.",
    src: "https://www.youtube.com/watch?v=5GG-VUvruzE&ab_channel=WebDevSimplified", // Direct video URL
    poster: "/placeholder1.svg",
    duration: "5:00",
    createdAt: "2024-11-01",
    author: "John Doe",
    likes: 120,
    dislikes: 5,
    comments: [
      { id: 1, user: "Alice", text: "Great introduction! Really helpful." },
      { id: 2, user: "Bob", text: "This clarified a lot of concepts for me." }
    ]
  },
  {
    id: 2,
    title: "CSS Grid Tutorial",
    description: "A comprehensive guide to CSS Grid layout with examples.",
    src: "https://www.youtube.com/watch?v=eJHm03osbHc",
    poster: "/placeholder2.svg",
    duration: "12:34",
    createdAt: "2024-10-28",
    author: "Jane Smith",
    likes: 300,
    dislikes: 20,
    comments: [
      { id: 1, user: "Charlie", text: "Amazing explanation, thanks!" },
      { id: 2, user: "Dana", text: "Could you also cover Flexbox in your next video?" }
    ]
  },
  {
    id: 3,
    title: "JavaScript ES6 Features",
    description: "Dive into the new features of ES6 JavaScript and how to use them.",
    src: "https://www.youtube.com/watch?v=H6440ZsAuXs",
    poster: "/placeholder3.svg",
    duration: "8:45",
    createdAt: "2024-10-25",
    author: "Emily Clark",
    likes: 450,
    dislikes: 15,
    comments: [{ id: 1, user: "Eve", text: "This is a lifesaver for my project!" }]
  },
  {
    id: 4,
    title: "React Hooks Explained",
    description: "An in-depth explanation of React Hooks and practical use cases.",
    src: "https://www.youtube.com/watch?v=HKSTHr2hPlg",
    poster: "/placeholder4.svg",
    duration: "15:20",
    createdAt: "2024-10-15",
    author: "Michael Brown",
    likes: 600,
    dislikes: 10,
    comments: [
      { id: 1, user: "Frank", text: "This cleared up so many doubts I had about hooks!" },
      { id: 2, user: "Grace", text: "Perfect for beginners and advanced devs alike." }
    ]
  },
  {
    id: 5,
    title: "Building a Todo App with Next.js",
    description: "Step-by-step guide to building a Todo application using Next.js.",
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    poster: "/placeholder5.svg",
    duration: "10:30",
    createdAt: "2024-11-05",
    author: "Sophia Wilson",
    likes: 250,
    dislikes: 8,
    comments: [
      { id: 1, user: "Henry", text: "This was incredibly helpful for my Next.js project." },
      { id: 2, user: "Ivy", text: "I love how detailed this tutorial is." }
    ]
  }
];
