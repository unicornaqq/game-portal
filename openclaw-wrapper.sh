#!/bin/bash
# OpenClaw wrapper script to ensure valid working directory
# This script ensures openclaw is always called from a valid directory

# Get the openclaw home directory
OPENCLAW_HOME="${OPENCLAW_HOME:-${HOME:-/home/wange11}}"
WORKSPACE_DIR="${OPENCLAW_HOME}/.openclaw/workspace"

# Ensure workspace directory exists
if [ ! -d "$WORKSPACE_DIR" ]; then
    echo "Error: Workspace directory does not exist: $WORKSPACE_DIR" >&2
    exit 1
fi

# Change to workspace directory and call openclaw
cd "$WORKSPACE_DIR" || {
    echo "Error: Cannot change to workspace directory: $WORKSPACE_DIR" >&2
    exit 1
}

# Call openclaw with all arguments
exec openclaw "$@"

