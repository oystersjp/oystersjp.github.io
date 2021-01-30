HUGO = bin/hugo
THEME = hugo/themes/meghna-hugo
TARGET_VERSION = 0.78.0

.PHONY: build watch
build: $(HUGO) $(THEME)
	$(HUGO) --minify --source ./hugo/

watch: $(HUGO) $(THEME)
	$(HUGO) --watch --source ./hugo/ server


# no PHONY
$(HUGO):
	@uname -s | grep "Darwin" >/dev/null 2>&1 || (echo "このOSにはまだ対応してないよ" && exit 1)
	curl -L https://github.com/gohugoio/hugo/releases/download/v$(TARGET_VERSION)/hugo_$(TARGET_VERSION)_macOS-64bit.tar.gz | tar xz -C ./bin/

$(THEME):
	git clone --depth 1 https://github.com/themefisher/meghna-hugo.git $@