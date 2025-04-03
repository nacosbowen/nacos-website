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

const averageReadingSpeed = 200;

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

export function formatPhoneNumber(input){
  // Remove all non-numeric characters except '+'
  const cleaned = input.replace(/[^\d+]/g, "");
  
  // Check if it's an international number
  if (cleaned.startsWith("+")) {
    return cleaned.replace(/(\+\d{3})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");
  }
  
  // Format based on length for local numbers
  const digits = cleaned.replace(/\D/g, "");
  if (digits.length <= 3) {
    return digits;
  } else if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  } else {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  }
};

