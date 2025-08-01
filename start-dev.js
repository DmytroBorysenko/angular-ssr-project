const { exec } = require('child_process');

console.log('�� Запуск dev сервера (англійська мова)...');

// Спочатку перебудуємо проект
console.log('📦 Перебудова проекту...');
exec('npm run build:i18n', (error, stdout, stderr) => {
  if (error) {
    console.error('❌ Помилка перебудови:', error);
    return;
  }
  
  console.log('✅ Проект перебудовано успішно');
  console.log('🌐 Запуск dev сервера...');
  
  // Запускаємо простий сервер для збудованих файлів
  const express = require('express');
  const path = require('path');
  
  const app = express();
  const port = 4200;
  
  // Serve static files
  app.use(express.static(path.join(__dirname, 'dist/angular-ssr-project/browser')));
  
  // Serve all routes to index.html for SPA routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/angular-ssr-project/browser/index.html'));
  });
  
  app.listen(port, () => {
    console.log(`🚀 Dev server запущено на http://localhost:${port}`);
    console.log(`📄 Головна сторінка: http://localhost:${port}/`);
    console.log(`📄 Контакти: http://localhost:${port}/contact`);
    console.log(`\n💡 Для перебудови проекту запустіть: npm run build:i18n`);
    console.log(`💡 Українська мова закоментована для спрощення розробки`);
  });
}); 