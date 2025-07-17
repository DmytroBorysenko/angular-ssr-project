#!/bin/bash

# Скрипт для створення .htaccess файлу для статичної збірки

# Перевіряємо, чи існує директорія
if [ ! -d "dist/angular-ssr-project/browser/" ]; then
  echo "Error: Browser build directory not found. Run 'npm run build:static' first."
  exit 1
fi

# Створюємо .htaccess файл
cat > dist/angular-ssr-project/browser/.htaccess <<EOL
# Включаємо mod_rewrite
RewriteEngine On

# Якщо запит не для існуючого файлу або директорії
# перенаправляємо на index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^ index.html [L]

# Встановлюємо кеш для статичних файлів
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/x-javascript "access plus 1 month"
  ExpiresDefault "access plus 1 week"
</IfModule>

# Стискаємо статичні файли для швидшого завантаження
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/x-javascript
  AddOutputFilterByType DEFLATE application/json
</IfModule>
EOL

echo "Created .htaccess file in dist/angular-ssr-project/browser/"
echo "You can now create static site archive using 'npm run package:static'"

# Кінець скрипту 