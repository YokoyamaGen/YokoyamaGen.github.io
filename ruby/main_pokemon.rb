# frozen_string_literal: true

require './pokemon'
require './pikachu'

pokemon = Pokemon.new('リザードン', '炎', '飛行', 100)
pokemon.attack

pikachu = Pikachu.new('ピカチュウ', 'でんき', '', 100)
pikachu.attack

pokemon.change_name('テキセツ')
puts pokemon.display_name

pokemon.change_name('うんこ')
puts pokemon.display_name
