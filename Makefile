rebuild:
	nuxi prepare

clear:
	rm -rf .nuxt
	rm -f package-lock.json
	make rebuild