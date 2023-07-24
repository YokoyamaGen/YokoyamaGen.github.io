# frozen_string_literal: true

# ポケモンで学ぶ！クラスとオブジェクト指向のポケモンクラス
class Pokemon
  def initialize(name, type1, type2, hit_point)
    @name = name
    @type1 = type1
    @type2 = type2
    @hit_point = hit_point
  end

  def attack
    puts "#{name}のこうげき！"
  end

  def change_name(new_name)
    if new_name == 'うんこ'
      puts '不適切な名前です'
      return
    end
    update_name(new_name)
  end

  def display_name
    name
  end

  private

  attr_reader :name

  def update_name(name)
    @name = name
  end
end
