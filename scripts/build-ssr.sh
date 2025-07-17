#!/bin/bash

# Скрипт для збірки SSR додатку
echo "Building SSR application..."
npm run build:ssr

echo "Creating ZIP archive..."
npm run package:ssr

echo "Done! Your SSR application archive is ready: ssr-site.zip"
echo "You can deploy this archive to Node.js hosting including ADM.TOOLS"

# Кінець скрипту 