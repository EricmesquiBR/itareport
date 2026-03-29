#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
COMPOSE_FILE="$ROOT_DIR/apps/api/infra/compose.yaml"

if ! command -v docker >/dev/null 2>&1; then
  echo "docker is not installed or not in PATH; skipping compose startup"
else
  echo "Starting database services with Docker Compose..."
  docker compose -f "$COMPOSE_FILE" up -d
fi

cd "$ROOT_DIR"
echo "Running API database migrations..."
bun run nx run api:db:migrate

exec bun run nx run-many -t serve "$@"
