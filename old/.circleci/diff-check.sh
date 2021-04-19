#!/bin/sh -eu

[ $(git diff --name-only | wc -l) -eq 0 ]

if [ $? != 0 ]; then
    echo "Some differences found after `make build` between remote branch and CI projects. "
    echo "Please check whether you forget reflects build results into remote branch."
    exit 1
else
    echo "Successfully apply build results into remote branch."
    exit 0
fi