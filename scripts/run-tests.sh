#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SERVER_PID=""
STARTED_SERVER="false"

cleanup() {
  if [[ "$STARTED_SERVER" == "true" ]] && [[ -n "$SERVER_PID" ]]; then
    kill "$SERVER_PID" >/dev/null 2>&1 || true
    wait "$SERVER_PID" >/dev/null 2>&1 || true
  fi
}

trap cleanup EXIT INT TERM

cd "$ROOT_DIR"

if curl -fsS "http://localhost:4200" >/dev/null 2>&1; then
  echo "Using existing frontend server at http://localhost:4200"
else
  echo "Starting frontend server on http://localhost:4200"
  bun run nx run frontend:serve -- --port 4200 >/tmp/itareport-frontend-test-server.log 2>&1 &
  SERVER_PID="$!"
  STARTED_SERVER="true"
fi

echo "Waiting for frontend server to be ready"
for _ in {1..60}; do
  if curl -fsS "http://localhost:4200" >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

if ! curl -fsS "http://localhost:4200" >/dev/null 2>&1; then
  if [[ "$STARTED_SERVER" == "true" ]]; then
    echo "Frontend server failed to start. Last logs:"
    tail -n 50 /tmp/itareport-frontend-test-server.log || true
  fi
  exit 1
fi

echo "Running Cypress E2E tests"
bun run nx run frontend-e2e:e2e-ci --skipNxCache
