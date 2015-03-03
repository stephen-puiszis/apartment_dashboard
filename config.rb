activate :dotenv
activate :livereload
activate :syntax
activate :directory_indexes
set :username,        ENV["USERNAME"]
set :password,        ENV["PASSWORD"]

Time.zone = "Central Time (US & Canada)"

set :build_dir, 'build'
set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'img'

configure :development do
  set :debug_assets, true
end

configure :build do
  activate :minify_css
  activate :minify_javascript
end
