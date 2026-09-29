export function isEqual(a, b) {
  let i = 0;

  while (true) {
    const codeA = a.charCodeAt(i);
    const codeB = b.charCodeAt(i);
    const hasA = codeA >= 0;
    const hasB = codeB >= 0;

    if (hasA !== hasB) return false;
    if (!hasA) return true;
    if (codeA !== codeB) return false;

    i++;
  }
}