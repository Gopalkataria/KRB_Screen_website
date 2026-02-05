#!/bin/sh
#
#
chromium-browser \
  --headless \
  --disable-gpu \
  --remote-debugging-port=9222 \
  http://localhost
