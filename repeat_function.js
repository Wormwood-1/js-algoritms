function repeat(text, count) {
  if (typeof text !== 'string') {
    throw new TypeError('text должен быть строкой');
  }
  if (typeof count !== 'number' || Number.isNaN(count)) {
    throw new TypeError('count должен быть числом');
  }
  if (count <= 0) {
    throw new RangeError('count должен быть числом больше 0');
  }

  let result = '';
  for (let i = 0; i < count; i++) {
    result += text;
  }
  return result;
}

// --- Проверка ---

// 1. Корректный вызов
try {
  console.log(repeat('JS', 3)); // 'JSJSJS'
} catch (e) {
  console.log(`Неожиданная ошибка: ${e.name}: ${e.message}`);
}

// 2. text не строка
try {
  repeat(123, 3);
} catch (e) {
  console.log(e instanceof TypeError, e.message); // true 'text должен быть строкой'
}

// 3. count не число
try {
  repeat('JS', 'abc');
} catch (e) {
  console.log(e instanceof TypeError, e.message); // true 'count должен быть числом'
}

// 4. count <= 0
try {
  repeat('JS', 0);
} catch (e) {
  console.log(e instanceof RangeError, e.message); // true 'count должен быть числом больше 0'
}