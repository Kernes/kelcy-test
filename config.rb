require 'lib/helpers/content_helper'

activate :autoprefixer do |prefix|
  prefix.browsers = 'last 2 versions'
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :directory_indexes
activate :i18n, langs: %i[fr en]
activate :sprockets

helpers ContentHelper

configure :development do
  activate :livereload
end

configure :production do
  activate :asset_hash
  activate :minify_css
  activate :minify_javascript

  set :build_dir, 'build'
end
