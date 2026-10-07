export function isLessOrEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') {
    throw new TypeError('Аргументы должны быть строками');
  }

  let i = 0;

  while (true) {
    const codeA = a.charCodeAt(i);
    const codeB = b.charCodeAt(i);
    const hasA = codeA >= 0;
    const hasB = codeB >= 0;

    if (!hasA || !hasB) {
      return !hasA || hasB;
    }

    if (codeA !== codeB) {
      return codeA < codeB;
    }

    i++;
  }
}