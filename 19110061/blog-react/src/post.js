export const Posts = [
  {
    id: "4zbCsAxN0W",
    title: "my first blog",
    content: "This is my first post!",
    timestamp: new Date(),
    comments: [
      {
        id: "hUenQUjpRw",
        content: "nice blog",
        timestamp: new Date(),
      },
    ],
  },
  {
    id: "mKbl6qpPSh",
    title: "React reaction",
    content: "I love React!",
    timestamp: new Date(),
    comments: [
      {
        id: "bYyAFuYW2s",
        content: "nice blog",
        timestamp: new Date(),
      },
    ],
  },
  {
    id: "vUBVgIMAvD",
    title: "First react blog",
    content: "Just finished my React project.",
    timestamp: new Date(),
    comments: [
      {
        id: "4BIKC7iJ1N",
        content: "well done",
        timestamp: new Date(),
      },
    ],
  },
  {
    id: "XbBEGXQhuM",
    title: "Emotion",
    content: "React is so much fun!",
    timestamp: new Date(),
    comments: [
      {
        id: "Z4FYxRY6tC",
        content: "nice what a noice blog",
        timestamp: new Date(),
      },
    ],
  },
];

export function randomstring() {
  return (Math.random() + 1).toString(36).substring(7);
}
