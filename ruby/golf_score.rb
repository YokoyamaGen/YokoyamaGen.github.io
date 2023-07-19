# frozen_string_literal: true

regulation_strokes, player_strokes = gets('').split("\n").map do |line|
  line.chomp.split(',').map(&:to_i)
end

common_associations = { -1 => 'バーディ', 0 => 'パー', 1 => 'ボギー' }
associations = {
  5 => { -4 => 'コンドル', -3 => 'アルバトロス', -2 => 'イーグル', **common_associations },
  4 => { -3 => 'ホールインワン', -2 => 'イーグル', **common_associations },
  3 => { -2 => 'ホールインワン', **common_associations }
}

MULTIPLE_BOGEY = 2
regulation_strokes.each_with_index do |regulation_stroke, i|
  result = player_strokes[i] - regulation_stroke
  if result >= MULTIPLE_BOGEY
    print "#{result}ボギー"
  else
    print associations[regulation_stroke][result]
  end
  print ',' unless i == (regulation_strokes.size - 1)
end
puts
