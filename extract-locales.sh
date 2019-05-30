#!/bin/sh

find . -type f -name '*=ru.json' | while read f ; do
  rm "$f"
done

find . -type f -name '*.tree.locale=en.json' | while read f ; do
  dest="$(dirname "$(dirname $f)")"
  if [ "$(stat -c%s "$f")" != "2" ] ; then
    new_name="$(basename $f | sed 's/\=en/\=ru/g')"
    cp -f "$f" "$dest/$new_name"
  fi
done
