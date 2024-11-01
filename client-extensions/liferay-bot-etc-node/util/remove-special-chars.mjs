export default function removeSpecialChars(str) {
    return str.replace(/[^\w\s\n.?!:]/g, '');
  }