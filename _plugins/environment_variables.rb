# Plugin to add environment variables to the `site` object in Liquid templates

module Jekyll

  class EnvironmentVariablesGenerator < Generator

    def generate(site)
      site.config['prod_url'] = ENV['prod_url'] || 'http://localhost:4000'
      # Add other environment variables to `site.config` here...
    end

  end

end
