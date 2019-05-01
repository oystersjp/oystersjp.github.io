#!/bin/sh -eu

[ $(git diff --name-only | wc -l) -eq 0 ]