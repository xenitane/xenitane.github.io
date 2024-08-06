#!/bin/bash

# sitemap urls
SITEMAP_URLS=("https://www.xenitane.xyz/geo-vis/sitemap-index.xml")

# sitemap index file
SITEMAP_FILE=${1:-"./dist/sitemap-index.xml"}

SITEMAP=$(cat $SITEMAP_FILE) # original sitemap

for URL in "${SITEMAP_URLS[@]}"; do # loop for adding the urls to the sitemap
    if ! echo $SITEMAP | grep -qs "$URL"; then
        echo "Adding sitemap \`$URL\` to \`$SITEMAP_FILE\`"
        SITEMAP=$(echo "$SITEMAP" | sed "s#</sitemapindex>#<sitemap><loc>$URL</loc></sitemap></sitemapindex>#")
    fi
done

# final version of sitemap
echo $SITEMAP >$SITEMAP_FILE
