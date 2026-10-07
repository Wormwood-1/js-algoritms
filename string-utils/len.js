export function len(str) {
  let count = 0;
  for (const char of str) {
    count++;
  }
  return count;
}