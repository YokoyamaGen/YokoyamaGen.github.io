# frozen_string_literal: true

require './suica'

puts '### 例外 100円未満をSuicaにチャージ ###'
suica = Suica.new(500)
suica.put(99)
