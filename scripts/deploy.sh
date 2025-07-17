#!/bin/bash

# Скрипт для збірки як статичної, так і SSR версії додатку

echo "Building static site..."
npm run deploy:static

echo "Building SSR application..."
npm run deploy:ssr

echo "Done! Your deployment archives are ready:"
echo "- Static site: static-site.zip"
echo "- SSR application: ssr-site.zip"
echo ""
echo "Use static-site.zip for standard hosting or ssr-site.zip for Node.js hosting"

# Кінець скрипту 