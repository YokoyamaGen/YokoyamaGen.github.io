# frozen_string_literal: true

# ポケモンで学ぶ！クラスとオブジェクト指向のピカチュウクラス
class Pikachu < Pokemon
  def attack
    super
    puts "#{name}の10万ボルト！"
  end
end
