# frozen_string_literal: true

# Suica版自動販売機問題の自動販売機クラス
class VendingMachine
  DEFAULT_SALES_AMOUNT = 0

  attr_reader :sales_amount, :juice_number_list

  def initialize(juice, number, sales_amount = DEFAULT_SALES_AMOUNT)
    @juice_number_list = { juice.name => number }
    @sales_amount = sales_amount
  end

  def purchase(suica, juice)
    purchasable_juice = purchasable_list.find { |j| j == juice.name }
    if suica.deposit <= juice.price || purchasable_juice.nil?
      raise "You don't have enough money on your card or no juice in stock."
    end

    @juice_number_list[juice.name] -= 1
    add_sales_amount(juice.price)
    suica.call_reduce(juice.price)
  end

  def purchasable_list
    purchasable_juice = @juice_number_list.select { |_k, v| v.positive? }
    purchasable_juice.keys
  end

  def add_juice(new_juice, number)
    @juice_number_list[new_juice.name] = number
  end

  def add_number(juice, number)
    @juice_number_list[juice.name] += number
  end

  private

  def add_sales_amount(price)
    @sales_amount += price
  end
end
