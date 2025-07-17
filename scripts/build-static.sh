#!/bin/bash

# Скрипт для збірки статичного сайту
echo "Building static site..."
npm run build:static

echo "Creating ZIP archive..."
npm run package:static

echo "Done! Your static site archive is ready: static-site.zip"
echo "You can deploy this archive to any static hosting including ADM.TOOLS"

# Кінець скрипту 