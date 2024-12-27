export function getInitials(name) {
  if (!name) return "";

  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

const averageReadingSpeed = 250;

function calculateWordCount(content) {
  const words = content.trim().split(/\s+/);
  return words.length;
}

export function calculateReadTime(content) {
  const wordCount = calculateWordCount(content);
  const readTime = Math.ceil(wordCount / averageReadingSpeed); 
  return readTime;
}

export function scrollToTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}