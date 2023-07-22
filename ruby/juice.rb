# frozen_string_literal: true

# Suica版自動販売機問題のジュースクラス
class Juice
  attr_reader :name, :price

  def initialize(name, price)
    @name = name
    @price = price
  end
end
