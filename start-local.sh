#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js 18+ لازم است: https://nodejs.org"
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "در حال نصب وابستگی‌ها…"
  npm install
fi

echo "سایت: http://localhost:5173"
echo "انگلیسی: http://localhost:5173/en"
npm run dev
