#!/bin/bash

# Скрипт для збірки і запуску SSR сервера
echo "Building SSR application..."
npm run build:ssr

echo "Starting SSR server..."
npm run serve:ssr

# Кінець скрипту 