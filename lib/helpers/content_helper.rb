module ContentHelper
  def nav_active(path)
    current_page.path == path ? 'mod-active' : ''
  end
end
