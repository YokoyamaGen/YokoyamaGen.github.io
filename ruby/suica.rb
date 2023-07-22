# frozen_string_literal: true

# Suica版自動販売機問題のSuicaクラス
class Suica
  attr_reader :deposit

  def initialize(deposit)
    @deposit = deposit
  end

  def put(money)
    raise ArgumentError, 'You cannot put less than 100 yen onto your Suica card.' if money < 100

    calc_deposit(money)
  end

  def call_reduce(money)
    calc_deposit(money * -1)
  end

  private

  def calc_deposit(money)
    @deposit.positive? ? @deposit += money : @deposit -= money
  end
end
